from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Comments
from .serializers import CommentsSerializer
from django.shortcuts import get_object_or_404, get_list_or_404

#Getting all comments from database, or user adds a comment
@api_view(['GET', 'POST'])
@permission_classes([AllowAny, IsAuthenticated])
def all_comments(request):
    if request.method == 'GET':
        comments = get_list_or_404(Comments)
        serializer = CommentsSerializer(comments, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        print('User ', f"{request.user.id} {request.user.email} {request.user.username}")
        serializer = CommentsSerializer(data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



# Get all comments on one video
@api_view(['GET'])
@permission_classes([AllowAny])
def video_comments(request, video_id):
    comments = get_list_or_404(Comments, video_id = video_id)
    serializer = CommentsSerializer(comments, many=True)
    return Response(serializer.data)

#endpoint to like or dislike a comment
@api_view(['GET', 'PUT'])
@permission_classes([AllowAny])
def get_one_comment(request, comment_id):
    comment = get_object_or_404(Comments, id = comment_id) 
    if request.method == 'GET':
        serializer = CommentsSerializer(comment)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = CommentsSerializer(comment, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status = status.HTTP_202_ACCEPTED)

    


