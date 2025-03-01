from django.contrib.auth import get_user_model  # ✅ Import this
from django.contrib.auth.hashers import check_password
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from .models import Fundraiser
from .serializers import FundraiserSerializer

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import get_user_model
from .serializers import UserSerializer  # ✅ Import the serializer

User = get_user_model()

@api_view(['POST'])
def register_user(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def login_user(request):
    email = request.data.get('email')
    password = request.data.get('password')

    # Get the custom user model
    User = get_user_model()
    
    # Check if user exists
    try:
        user = User.objects.get(email=email)
    except User.DoesNotExist:
        return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

    # Verify password
    if not check_password(password, user.password):
        return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

    # Generate JWT tokens
    refresh = RefreshToken.for_user(user)
    return Response({
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    })
# @api_view(['POST'])
# @permission_classes([IsAuthenticated])  # User must be logged in
# def create_fundraiser(request):
#     serializer = FundraiserSerializer(data=request.data)
#     if serializer.is_valid():
#         serializer.save(user=request.user)  # Assign logged-in user
#         return Response(serializer.data, status=status.HTTP_201_CREATED)
#     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def list_fundraisers(request):
    fundraisers = Fundraiser.objects.all()
    serializer = FundraiserSerializer(fundraisers, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def list_fundraisers_by_category(request, category):
    fundraisers = Fundraiser.objects.filter(category=category)
    serializer = FundraiserSerializer(fundraisers, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_fundraiser(request, fundraiser_id):
    try:
        fundraiser = Fundraiser.objects.get(id=fundraiser_id)
        serializer = FundraiserSerializer(fundraiser)
        return Response(serializer.data)
    except Fundraiser.DoesNotExist:
        return Response({'error': 'Fundraiser not found'}, status=status.HTTP_404_NOT_FOUND)
@api_view(['GET'])


@permission_classes([IsAuthenticated])
def protected_view(request):
    return Response({"message": "You have accessed a protected route!"})


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_fundraiser(request):
    """API for creating a fundraiser"""
    print("🔹 Request Data:", request.data)  # Debugging

    serializer = FundraiserSerializer(data=request.data, context={'request': request})
    if serializer.is_valid():
        fundraiser = serializer.save(user=request.user)  # Ensure fundraiser is saved with a user
        print(f"✅ Fundraiser Created: {fundraiser.title} (ID: {fundraiser.id})")

        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    print("❌ Validation Errors:", serializer.errors)  # Debugging for errors
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def verify_fundraiser(request, fundraiser_id):
    """API for submitting verification details"""
    try:
        fundraiser = Fundraiser.objects.get(id=fundraiser_id, user=request.user)
    except Fundraiser.DoesNotExist:
        return Response({'error': 'Fundraiser not found or unauthorized'}, status=status.HTTP_404_NOT_FOUND)

    # Handle file uploads
    authorized_doc = request.FILES.get("authorizedDoc")
    company_evaluation = request.FILES.get("companyEvaluation")

    serializer = FundraiserSerializer(fundraiser, data=request.data, partial=True, context={'request': request})

    if serializer.is_valid():
        serializer.save(status="Pending", authorized_doc=authorized_doc, company_evaluation=company_evaluation)
        return Response(serializer.data, status=status.HTTP_200_OK)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
