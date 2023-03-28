from rest_framework.response import Response
from rest_framework.decorators import api_view
from .JSON import products, developers
# Create your views here.
@api_view(['GET'])
def getProducts(request):
  return Response(products)

@api_view(['GET'])
def getDevelopers(request):
  return Response(developers)