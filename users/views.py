from django.shortcuts import render

# Create your views here.
def index(req): 
    yo ="aslam"
    return render(req, 'index.html', {'yo': yo})



def home(req):
    return render(req, 'home.html')
