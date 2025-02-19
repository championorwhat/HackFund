from django.urls import path
from .views import protected_view,register_user, login_user, create_fundraiser, list_fundraisers, list_fundraisers_by_category, get_fundraiser

urlpatterns = [
    # Authentication
    path('register/', register_user, name='register'),
    path('login/', login_user, name='login'),

    # Fundraisers
    path('fundraisers/create/', create_fundraiser, name='create_fundraiser'),
    path('fundraisers/', list_fundraisers, name='list_fundraisers'),
    path('fundraisers/category/<str:category>/', list_fundraisers_by_category, name='list_fundraisers_by_category'),
    path('fundraisers/<int:fundraiser_id>/', get_fundraiser, name='get_fundraiser'),
    path('protected-route/', protected_view, name='protected_route'),

]
