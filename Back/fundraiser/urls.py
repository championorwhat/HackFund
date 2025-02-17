from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CampaignViewSet  # Check if this import works

router = DefaultRouter()
router.register(r'campaigns', CampaignViewSet)  # Registers endpoint: /api/campaigns/

urlpatterns = [
    path('', include(router.urls)),
]
