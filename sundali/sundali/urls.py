"""sundali URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
import mainapp.views as mainapp
from django.conf.urls import include
from django.urls import include, path
from rest_framework import routers

# from tutorial.quickstart import views

router = routers.DefaultRouter()
router.register('users', mainapp.UserViewSet)
router.register('groups', mainapp.GroupViewSet)


urlpatterns = [
    path('admin/', admin.site.urls),
    # path('', mainapp.main, name='main'),
    path('', include(router.urls)),
    path('test/', mainapp.save_data, name='save_data'),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
