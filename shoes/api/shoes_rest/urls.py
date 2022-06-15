from django.urls import path
from .views import api_shoes

urlpatterns = [
path("shoe/", api_shoes, name="api_shoes")
]