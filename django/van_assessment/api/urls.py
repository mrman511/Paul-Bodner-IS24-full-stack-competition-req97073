from webbrowser import get
from django.urls import path
from django.views.generic import TemplateView
from . import views
from rest_framework.schemas import get_schema_view

urlpatterns = [
  path('swagger-json/', 
    get_schema_view(
      title='Vancouver Assessment Project API Doc', 
      description='Swagger api documentation for Vancouver assessment project',
    ),
    name='swagger_JSON'
    ),

  path('api-docs/', TemplateView.as_view(
      template_name='swagger-docs.html',
      extra_context={'schema_url': 'swagger_JSON'}
    ), name='api_docs'
  ),
  
  path('products/', views.getProducts),
  path('products/create/', views.saveProduct),
  path('products/<str:pk>/', views.getProduct),
  path('products/<str:pk>/delete/', views.deleteProduct),
  path('products/<str:pk>/update/', views.updateProduct),

  path('developers/', views.getDevelopers),
  path('developers/create/', views.saveDeveloper),
  path('developers/<str:name>/', views.getDeveloper),
  path('developers/<str:name>/delete/', views.removeDeveloper),

  path('scrum_masters/', views.getScrumMasters),
  path('scrum_masters/<str:name>/', views.getScrumMaster),
]