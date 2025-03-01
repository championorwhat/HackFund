from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models

class CustomUserManager(BaseUserManager):
    def create_user(self, email, username, password=None):
        if not email:
            raise ValueError('Users must have an email address')
        email = self.normalize_email(email)
        user = self.model(email=email, username=username)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, username, password):
        user = self.create_user(email, username, password)
        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user


class CustomUser(AbstractUser):
    groups = models.ManyToManyField(Group, related_name="customuser_set", blank=True)
    user_permissions = models.ManyToManyField(Permission, related_name="customuser_permissions_set", blank=True)

    def __str__(self):
        return self.username

    def __str__(self):
        return self.email
from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Fundraiser(models.Model):
    CATEGORY_CHOICES = [
        ('Medical', 'Medical'),
        ('Startup', 'Startup'),
    ]

    STATUS_CHOICES = [
        ('Pending', 'Pending'),
        ('Verified', 'Verified'),
        ('Rejected', 'Rejected'),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE)  # Fundraiser creator
    title = models.CharField(max_length=255)
    description = models.TextField()
    goal_amount = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.CharField(max_length=10, choices=CATEGORY_CHOICES)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='Pending')

    # Verification Details
    company_content = models.TextField(blank=True, null=True)
    authorized_doc = models.FileField(upload_to='fundraiser_docs/', blank=True, null=True)
    company_evaluation = models.FileField(upload_to='fundraiser_docs/', blank=True, null=True)
    why_fundraise = models.TextField(blank=True, null=True)
    pre_existing_loans = models.CharField(max_length=3, choices=[('Yes', 'Yes'), ('No', 'No')], default='No')

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
