from django.db import models
from django.contrib.auth.models import User

# 1️⃣ User Profile (Fundraiser or Donor)
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    is_donor = models.BooleanField(default=False)  # False for fundraisers, True for donors

# 2️⃣ Fundraising Campaigns (For Medical & Startups)
# class Campaign(models.Model):
#     CATEGORY_CHOICES = [
#         ('medical', 'Medical'),
#         ('startup', 'Startup')
#     ]
#     title = models.CharField(max_length=255)
#     description = models.TextField()
#     category = models.CharField(max_length=10, choices=CATEGORY_CHOICES)
#     goal_amount = models.DecimalField(max_digits=10, decimal_places=2)
#     raised_amount = models.DecimalField(max_digits=10, decimal_places=2, default=0)
#     created_at = models.DateTimeField(auto_now_add=True)
#     owner = models.ForeignKey(User, on_delete=models.CASCADE)

CATEGORY_CHOICES = [
    ("medical", "Medical"),
    ("startup", "Startup"),
    ("education", "Education"),
    ("others", "Others"),
]

class Campaign(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    goal_amount = models.DecimalField(max_digits=10, decimal_places=2)
    raised_amount = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)


# 3️⃣ Donations
class Donation(models.Model):
    donor = models.ForeignKey(User, on_delete=models.CASCADE)
    campaign = models.ForeignKey(Campaign, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    donated_at = models.DateTimeField(auto_now_add=True)
