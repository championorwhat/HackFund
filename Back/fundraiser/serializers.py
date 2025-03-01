from rest_framework import serializers
from .models import CustomUser

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'email', 'username', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = CustomUser.objects.create_user(
            email=validated_data['email'],
            username=validated_data['username'],
            password=validated_data['password']
        )
        return user
from rest_framework import serializers
from .models import Fundraiser

class FundraiserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fundraiser
        fields = '__all__'
        read_only_fields = ['user', 'status']  # Use all fields
