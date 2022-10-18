from django.urls import path
from . import views

urlpatterns = [
    path("", views.all_comments),
    path('<str:video_id>/', views.get_video_comments),
]