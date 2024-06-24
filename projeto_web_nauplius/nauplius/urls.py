from django.urls import path
from nauplius.views import home

urlpatterns = [
    path('', home)
]