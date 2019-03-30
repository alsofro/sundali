from django.shortcuts import render
from mainapp.models import TestTable
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from mainapp.serializers import UserSerializer, GroupSerializer


# Create your views here.

def main(request):
    return render(request, 'frontend/public/index.html')


def save_data(request):
    message_text = ''

    if request.POST:
        message_text = request.POST.get('identity')

    data = TestTable(message_text=message_text)
    data.save()


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
