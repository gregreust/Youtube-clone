from django.shortcuts import render
from rest_framework import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Comments
from .serializers import CommentsSerializer
from django.shortcuts import get_list_or_404

# This endpoint gets the video_id in the URL
@api_view(['GET'])
@permission_classes([AllowAny])
def get_video_comments(request, video_id):

    comments = get_list_or_404(Comments, video_id = video_id)
    serializer = CommentsSerializer(comments)
    return Response(serializer.data)

