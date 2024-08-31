# api/urls.py
from django.urls import path
from .views import get_items, create_item, get_item, update_item, delete_item

urlpatterns = [
    path('items/', get_items, name='get_items'),
    path('item/<int:pk>/', get_item, name='get_item'),
    path('create-item', create_item, name='create_item'),
    path('update-item/<int:pk>/', update_item, name='update_item'),
    path('delete-item/<int:pk>/', delete_item, name='delete_item'),
]
