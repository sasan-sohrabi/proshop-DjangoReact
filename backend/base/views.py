from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Product
from .products import products
from .serializers import ProductSerializers


@api_view(['GET'])
def get_routes(request):
    return Response('Hello')


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
