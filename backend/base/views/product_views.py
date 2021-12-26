from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from django.contrib.auth.models import User
from base.models import Product
from base.products import products
from base.serializers import ProductSerializers

from rest_framework import status


@api_view(['GET'])
def get_products(request):
    product = Product.objects.all()
    serializers = ProductSerializers(product, many=True)
    return Response(serializers.data)


@api_view(['GET'])
def get_single_products(request, pk):
    product = Product.objects.get(_id=pk)
    serializers = ProductSerializers(product, many=False)
    return Response(serializers.data)
