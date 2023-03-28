from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from datetime import datetime
from . import JSON
# Create your views here.

# *** helper functions ***
def returnId(item):
  return item.id

# *** API Docs ***

@api_view(['GET'])
def getApiDocs(request):
  return Response()

# *** Product Views ***

@api_view(['GET'])
def getProducts(request):
  return Response(JSON.products)

@api_view(['POST'])
def saveProduct(request):
  data = request.data
  data['id'] = JSON.products[-1]['id'] + 1
  data['start_date'] = datetime.today().strftime('%Y-%m-%d')

  JSON.products.append(data)
  return Response(status.HTTP_201_CREATED)

@api_view(['PUT'])
def updateProduct(request, pk):
  JSON.products = [ product for product in JSON.products if not product.id == int(pk) ]
  JSON.products.append(request.data)
  JSON.products.sort(key=returnId)
  return Response(status.HTTP_200_CREATED)


@api_view(['DELETE'])
def deleteProduct(request, pk):
  JSON.products = [ product for product in JSON.products if not product.id == int(pk) ]
  return Response(status.HTTP_200_OK)

# *** Developer Views ***

@api_view(['GET'])
def getDevelopers(request):
  return Response(JSON.developers)

@api_view(['POST'])
def saveDeveloper(request):
  JSON.developers.append(request.data.name)
  return Response(status.HTTP_200_OK)

@api_view(['DELETE'])
def removeDeveloper(request, name):
  JSON.developers.remove(name)
  return Response(status.HTTP_200_OK)