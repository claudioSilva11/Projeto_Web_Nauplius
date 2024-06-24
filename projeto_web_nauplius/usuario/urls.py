from django.urls import path
from usuario.views import login

urlpatterns = [
    path('login/', login)
]