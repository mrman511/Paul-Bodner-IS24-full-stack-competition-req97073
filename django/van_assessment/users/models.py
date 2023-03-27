from django.db import models

class User(models.Model):
  name=models.CharField(max_length=50, null=True, blank=True)

  def __str__(self) -> str:
      return self.name