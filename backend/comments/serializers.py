from rest_framework import serializers
from .models import Comments

class CommentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = ['id', 'user', 'video_id', 'text', 'likes', 'dislikes', 'user_id']
        depth = 1

    user_id = serializers.IntegerField(write_only=True)


   