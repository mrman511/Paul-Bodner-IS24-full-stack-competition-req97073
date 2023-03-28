from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from datetime import datetime
from .JSON import products, developers
# Create your views here.
@api_view(['GET'])
def getProducts(request):
  return Response(products)

@api_view(['GET'])
def getDevelopers(request):
  return Response(developers)

@api_view(['POST'])
def saveProduct(request):
  data = request.data
  data['id'] = products[-1]['id'] + 1
  data['start_date'] = datetime.today().strftime('%Y-%m-%d')
  products.append(data)

  return Response(status.HTTP_201_CREATED)