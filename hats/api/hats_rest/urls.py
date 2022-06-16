from django.urls import path
from .views import api_list_hats, api_delete_hats

urlpatterns = [
    path('hats/', api_list_hats, name="api_list_hats"),
    path('hats/<int:pk>/', api_delete_hats, name="api_delete_hats"),
]