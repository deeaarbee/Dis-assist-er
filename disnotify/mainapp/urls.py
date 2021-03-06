"""disnotify URL Configuration

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
from django.urls import path
from mainapp import views

app_urlpatterns = [
    # path('admin/', admin.site.urls),
    path('notify/update/', views.UpdateNotify.as_view(), name='update-notify'),
    path('notify/match/', views.Match.as_view(), name='match-notify'),
    path('notify/setsig/', views.SetSigId.as_view(), name='sig-notify'),
    path('notify/sendsig/', views.SendSig.as_view(), name='sig-send-notify'),
    path('notify/getposts/', views.SuggestScreen.as_view(), name='get-notify'),
]
