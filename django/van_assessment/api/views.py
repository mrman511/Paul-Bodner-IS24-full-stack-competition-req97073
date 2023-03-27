from django.shortcuts import render, HttpResponse
from.serializers import UserSerializer, ProductSerializer
from products.models import Product
from users.models import User
from rest_framework.response import Response
from rest_framework.decorators import api_view

# Create your views here.
@api_view(['GET'])
def getProducts(request):
  products = Product.objects.all()
  serializer = ProductSerializer(products, many=True)
  return Response(serializer.data)