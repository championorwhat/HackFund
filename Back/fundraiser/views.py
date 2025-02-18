from django.contrib.auth import get_user_model  # ✅ Import this
from django.contrib.auth.hashers import check_password
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken

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
