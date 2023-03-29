from datetime import date
import random
from faker import Faker

fake = Faker()

developers = [ fake.name() for x in range(14) ]
developers.append('Paul Bodner')

scrum_masters = [ fake.name() for x in range(6) ]

def getDevelopers():
  rand = random.randint(1, 5)
  randDevelopers = []
  for i in range(rand):
    while len(randDevelopers) < rand:
      name = developers[random.randint(0, (len(developers) - 1 ))]
      if name not in randDevelopers:
        randDevelopers.append(name)

  return randDevelopers

def getStartDate(product):
  return product['start_date']

products = [
  {
    'title': fake.sentence(),
    'owner': fake.name(),
    'developers': getDevelopers(),
    'scrum_master': scrum_masters[random.randint(0, (len(scrum_masters) - 1 ))],
    'start_date':  fake.date_between(start_date='-2y', end_date='today'),
    'methodology': 'Agile' if bool(random.getrandbits(1)) else 'Waterfall'
  } for x in range(40)
]

products.sort(key=getStartDate)

for i in range(len(products)):
  products[i]['id'] = i+1