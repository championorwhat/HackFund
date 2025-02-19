from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('fundraiser.urls')), 
    path('api/fundraiser/', include('fundraiser.urls')),  
 # Ensure this is correctly written
]
