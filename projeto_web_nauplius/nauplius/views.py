from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def home(request):
    return render(request, 'nauplius/pages/home.html', context={
        'nome':'Eduardo'
    })
