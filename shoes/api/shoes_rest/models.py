from django.db import models

# Create your models here.
# make a class in shoes that keeps track of? manufacturer, 
#model name, color, url for a picture ? maybe views. 
#bin where it exists in wardrobe 
#check wardrobe to see relationship between shoes 
#wardrobe has a class model named bin- that has the parameters
#closet_name; bin_number; and bin_size
class BinVO(models.Model):
    closet_name = models.CharField(max_length=150)
    import_href = models.CharField(max_length=200, unique=True)


class Shoe(models.Model):
    manufacturer = models.CharField(max_length=150)
    model_name = models.CharField(max_length=150)
    color = models.CharField(max_length=150)
    picture_url = models.URLField(null=True)
    bin = models.ForeignKey(
        BinVO, related_name="shoes", on_delete=models.CASCADE,
    )
#going to need to research the foreignkey relationship for BIN to shoe


