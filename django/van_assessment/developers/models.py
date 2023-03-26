from django.db import models

# Create your models here.
class Developer(models.Model):
  name = models.CharField(max_length=50, null=True, blank=True)

  def __str__(self) -> str:
      return self.name