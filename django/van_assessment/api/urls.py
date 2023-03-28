from django.urls import path
from . import views

urlpatterns = [
  path('api-docs/', views.getApiDocs),
  
  path('products/', views.getProducts),
  path('products/create/', views.saveProduct),
  path('products/<str:pk>/', views.getProduct),
  path('products/<str:pk>/delete/', views.deleteProduct),
  path('products/<str:pk>/update/', views.updateProduct),

  path('developers/', views.getDevelopers),
  path('developers/create/', views.saveDeveloper),
  path('developers/<str:name>/delete/', views.removeDeveloper),
]