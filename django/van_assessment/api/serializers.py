from rest_framework import serializers

from products.models import Product
from users.models import User

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):
  developers = UserSerializer(read_only=True, many=True)

  class Meta:
    model = Product
    fields = '__all__'