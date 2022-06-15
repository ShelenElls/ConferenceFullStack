from django.shortcuts import render
from common.json import ModelEncoder
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from shoes.api.shoes_rest.models import Shoe
from wardrobe.api.wardrobe_api.views import BinEncoder

# Create your views here.
#views in wardrobe had a bin encoder with properties from model 
# uses api and json content to load the data 
#create and decide what gets rendered on a list view first 
# shoes.objects.all() model encoder will have the properties of id, 
# manufacturer model name, color, and get extra data? for the bin in 
# wardrobe 

class ShoeEncoder(ModelEncoder):
    model = Shoe
    properties = [
        "id",
        "manufacturer",
        "color",
        "picture_url", 
        "bin",
    ]
    encoders = {
        "bin": BinEncoder(),
    }

#get returns a diction with a single key, shoes which has a list of 
# the manufacturer, color, picture_url, and bin for where its locationed, 
# as well as its assigned ID

@require_http_methods(["GET"])
def api_shoes(request):
    if request.method == "GET":
        shoes = Shoe.objects.all()
        return JsonResponse(
            {"shoes": shoes},
            encoder=BinEncoder,
        )
    else:
        pass