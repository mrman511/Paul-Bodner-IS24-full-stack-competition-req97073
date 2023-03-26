from django.db import models

# Create your models here.
from developers.models import Developer

# Create your models here.
class Product(models.Model):
  methodology_choices = [
    ('AG', 'Agile'),
    ('WF', 'Waterfall')
  ]


  productName = models.CharField(max_length=50, null=True, blank=True)
  productOwnerName = models.CharField(max_length=50, null=True, blank=True)
  developers = models.ManyToManyField(Developer, help_text="maximum five developers")
  scrumMasterName = models.CharField(max_length=50, null=True, blank=True)
  methodology = models.CharField(max_length=2, null=True, blank=True)

  def __str__(self) -> str:
      return self.productName