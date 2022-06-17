from django.shortcuts import render
from common.json import ModelEncoder
from django.views.decorators.http import require_http_methods
import json
from django.http import JsonResponse

from .models import Hats, LocationVO
# Create your views here.

class LocationVOEncoder(ModelEncoder):
    model = LocationVO
    properties = [
        "closet_name", 
        "section_number", 
        "shelf_number", 
        "import_href",
    ]

class HatEncoder(ModelEncoder):
    model = Hats
    properties = [
        "fabric", 
        "style_name", 
        "color", 
        "pictureurl",
        "location",
        "id",
    ]
    encoders = {
        "location": LocationVOEncoder(),
    }


class HatDetailEncoder(ModelEncoder):
    model = Hats
    properties = [
        "fabric",
        "style_name",
        "color",
        "pictureurl",
        "location",
    ]
    encoders = {
        "location": LocationVOEncoder(),
    }


# get and post dont require unique id, 
# GET method gets back hat objects in json format
# POST method uploads json formatted body to (database?)

@require_http_methods(["GET", "POST"])
def api_list_hats(request):
    if request.method == "GET":
        hats = Hats.objects.all()
        return JsonResponse(
            hats,
            encoder=HatEncoder,
            safe=False,
        )
    else:
        content = json.loads(request.body)
        #try & except block
        try:
            href = content["location"]
            location = LocationVO.objects.get(import_href=href)
            content["location"] = location
        except LocationVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid Location id"}, 
                status=400,
            )
        hat = Hats.objects.create(**content)
        return JsonResponse(
            hat,
            encoder=HatDetailEncoder,
            safe=False,
        )

@require_http_methods(["DELETE"])
def api_delete_hats(request, pk):
    if request.method == "DELETE":
        count, _ = Hats.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})

