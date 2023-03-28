from django.urls import path
from . import views

urlpatterns = [
  path('products/', views.getProducts),
  path('products/create/', views.saveProduct),
  path('developers/', views.getDevelopers),
]