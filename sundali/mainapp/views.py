from django.shortcuts import render
from mainapp.models import TestTable


# Create your views here.

def main(request):
    return render(request, 'frontend/public/index.html')


def save_data(request):
    message_text = ''

    if request.POST:
        message_text = request.POST.get('identity')

    data = TestTable(message_text=message_text)
    data.save()