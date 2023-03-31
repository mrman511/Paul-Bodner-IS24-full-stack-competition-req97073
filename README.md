# Developer Application

## API framework

### **Install Python / pip**
This project uses the Python3 language and the Django frame work to create a restful API

Make sure Python3 is installed on your local work station
[Download Python](https://www.python.org/downloads/)
downloading Python from python.org will include PIP package manager

to be sure you have the most recent version of PIP run:
##### **macOS/Unix**
python3 -m install --user --upgrade pip
##### **Windows**
py -m pip install --upgrade pip


once python is set up locally cd into the django folder of this repository

### **Set Up Virtual Environment**

#### **Install Virtualenv**

##### **macOS/Unix**
python3 -m install --user virtualenv
##### **Windows**
py -m pip install --user virtualenv


#### **Create Virtual Environment**

##### **macOS/Unix**
python3 -m venv *{environment_name}***
##### **Windows**
py -m venv *{environment_name}*

#### **Activate Virtual Environment**

##### **macOS/Unix**
source *{environment_name}*/bin/activate
##### **Windows**
.\ *{environment_name}*\Scripts\activete

#### **Install Dependencies**

##### **macOS/Unix**
pip install -r requirements.txt
##### **Windows**
pip install -r requirements.txt

#### **Run Server on localhost:/3000**

##### **macOS/Unix**
python3 manage.py runserver localhost:3000
##### **Windows**
py manage.py runserver localhost:3000

### **Swagger api docs visable at [api/api-docs](http://localhost:3000/api/api-docs/)**


## **Front end Framework**


### **Install Dependencies**

##### **macOS/Unix**
npm install
##### **Windows**
npm install

### **Run Development Server on localhost:/8000**

##### **macOS/Unix**
npm run dev
##### **Windows**
npm run dev

### **[Visit Site](http://localhost:8000/)**