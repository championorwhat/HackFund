from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView
from django.conf import settings
from django.conf.urls.static import static  # ✅ Import this

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('fundraiser.urls')),  # Include fundraiser URLs once

    # JWT Authentication URLs
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path("api/token/verify/", TokenVerifyView.as_view(), name="token_verify"),  # ✅ Add this
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]

# ✅ Serve media files during development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
