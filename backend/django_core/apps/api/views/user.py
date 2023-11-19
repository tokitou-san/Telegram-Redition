from django.shortcuts import render
from django.db.models import OuterRef, Subquery, Q

from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from apps.api.serializers import CustomUserSerializer
from apps.user.models import CustomUser


class ProfileDetailView(generics.RetrieveAPIView):
    serializer_class = CustomUserSerializer
    queryset = CustomUser.objects.all()
    permission_classes = [IsAuthenticated]
