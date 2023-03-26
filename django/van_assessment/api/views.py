from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import UserSerializer, ProductSerializer
from products.models import Product
from django.contrib.auth.models import User
# Create your views here.

@api_view(['GET'])
def get_products(request):
  products = Product.objects.all()
  serializer = ProductSerializer(products, many=True)
  return Response(serializer.data)