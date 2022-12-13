from django.urls import path
from . import views

urlpatterns = [
    path("", views.all_comments),
    path('<str:video_id>/', views.video_comments),
    path("comment/<int:comment_id>/", views.get_one_comment)
]