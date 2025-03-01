from django.urls import path
from .views import (
    register_user, 
    login_user, 
    create_fundraiser, 
    list_fundraisers, 
    list_fundraisers_by_category, 
    get_fundraiser, 
    verify_fundraiser
)

urlpatterns = [
    path('register/', register_user, name='register'),
    path('login/', login_user, name='login'),
    path('fundraisers/', list_fundraisers, name='list_fundraisers'),
    path('fundraisers/category/<str:category>/', list_fundraisers_by_category, name='list_fundraisers_by_category'),
    path('fundraisers/<int:fundraiser_id>/', get_fundraiser, name='get_fundraiser'),
    path('fundraisers/create/', create_fundraiser, name='create_fundraiser'),
    path('fundraisers/verify/<int:fundraiser_id>/', verify_fundraiser, name='verify_fundraiser'),  # ✅ Add this
]
