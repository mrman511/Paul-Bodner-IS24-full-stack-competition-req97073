# from rest_framework import serializers

# from products.models import Product
# from developers.models import Developer

# class DeveloperSerializer(serializers.ModelSerializer):
#   class Meta:
#     model = Developer
#     fields = '__all__'

# class ProductSerializer(serializers.ModelSerializer):
#   developers = DeveloperSerializer(read_only=True, many=True)

#   class Meta:
#     model = Product
#     fields = '__all__'