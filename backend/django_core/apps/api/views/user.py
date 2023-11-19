from django.shortcuts import render
from django.db.models import OuterRef, Subquery, Q

from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from apps.api.serializers import CustomUserSerializer
from apps.user.models import CustomUser


class UserDetailView(generics.RetrieveUpdateAPIView):
    serializer_class = CustomUserSerializer
    queryset = CustomUser.objects.all()
    permission_classes = [IsAuthenticated]

    def perform_update(self, serializer):
        instance = self.get_object()

        if "avatar" in self.request.FILES:
            serializer.save()
        else:
            serializer.validated_data["avatar"] = instance.avatar
            serializer.save()


class SearchUserView(generics.ListAPIView):
    serializer_class = CustomUserSerializer

    def get_queryset(self):
        username = self.kwargs["username"]
        request_user = self.request.user

        search_users = CustomUser.objects.filter(
            Q(username__icontains=username) | Q(first_name__icontains=username)
        ).exclude(id=request_user.id)

        return search_users
