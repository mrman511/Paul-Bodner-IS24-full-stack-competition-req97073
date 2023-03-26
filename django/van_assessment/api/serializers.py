from dataclasses import fields
from rest_framework import serializers
from django.contrib.auth.models import User
from products.models import Product

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ['name']

class ProductSerializer(serializers.ModelSerializer):
  class Meta:
    model = Product
    fields = '__all__'