from datetime import date
import random
from faker import Faker

fake = Faker()

developers = [ fake.name() for x in range(14) ]
developers.append('Paul Bodner')

scrum_masters = [ fake.name() for x in range(6) ]

# pick a random number (1-5) of random not repeated developers
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

# creates a list of products

def validateProduct(product):
  if not product['developers'] or len(product["developers"]) < 1:
    return {'is_valid': False, 'message': 'please select more at least one developer'}
  if not product['title']:
    return {'is_valid': False, 'message': 'Please add a title'}
  if not product['owner']:
    return {'is_valid': False, 'message': 'Please add as owner'}
  if not product['scrum_master']:
    return {'is_valid': False, 'message': 'Please add a scrum master'}
  if not product['methodology']:
    return {'is_valid': False, 'message': 'Please add a methodology'}
    
  return { 'is_valid': True, }


products = [
  {
    'title': fake.sentence(),
    'owner': fake.name(),
    'developers': getDevelopers(),
    'scrum_master': scrum_masters[random.randint(0, (len(scrum_masters) - 1 ))],
    'start_date':  fake.date_between(start_date='-2y', end_date='today'),
    'methodology': 'Agile' if bool(random.getrandbits(1)) else 'Waterfall'
  } for x in range(20)
]

products.sort(key=getStartDate)


# giv all products a unique id
idNum = 0
for i in range(len(products)):
  idNum += 1
  products[i]['id'] = idNum