from django.shortcuts import render
from common.json import ModelEncoder
from django.views.decorators.http import require_http_methods
import json
from django.http import JsonResponse

from .models import Hats, LocationVO
# Create your views here.

class LocationVODetailEncoder:
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
    ]

    def get_extra_data(self, o):
        return LocationVO()



# get and post dont require unique id, 
# GET method gets back hat objects in json format
# POST method uploads json formatted body to (database?)

@require_http_methods(["GET", "POST"])
def api_list_hats(request):
    if request.method == "GET":
        hats = Hats.objects.all()
        return JsonResponse(
            {"hats": hats},
            encoder=HatEncoder,
            safe=False,
        )
    else:
        content = json.loads(request.body)
        #try & except block
        hat = Hats.objects.create(**content)
        return JsonResponse(
            hat,
            encoder=HatEncoder,
            safe=False,
        )

@require_http_methods(["DELETE"])
def api_delete_hats(request, pk):
    if request.method == "DELETE":
        try:
            hat = Hats.objects.get(id=pk)
            hat.delete()
            return JsonResponse(
                hat,
                encoder=HatEncoder,
                safe=False,
            )
        except Hats.DoesNotExist:
            return JsonResponse({"message": "Does not exist"})

