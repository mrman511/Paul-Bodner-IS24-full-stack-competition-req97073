from django.db import models
from users.models import User

# Create your models here.
class Product(models.Model):
  methodology_choices = [
    ('AG', 'Agile'),
    ('WF', 'Waterfall')
  ]

  productName=models.CharField(max_length=50, null=True, blank=True)
  productOwnerName=models.CharField(max_length=50, null=True, blank=True)
  developers = models.ManyToManyField(User, null=True, blank=True)
  scrumMasterName=models.CharField(max_length=50, null=True, blank=True)
  startDate=models.DateField(auto_now=True)
  methodology=models.CharField(max_length=3, choices=methodology_choices, null=True, blank=True)

  def __str__(self) -> str:
      return self.productName