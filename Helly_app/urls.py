from django.urls import path
from . import views

urlpatterns = [
    path('', views.start_helly, name='start_helly'),
]

# add helly to root urls