from django.shortcuts import render
from .models import Booking
from .models import Contact
from .models import Staff
from .serializers import RentalSerializer,ContactSerializer,StaffSerializer
from rest_framework import viewsets

# Create your views here.
class RentalViewSet(viewsets.ModelViewSet):
    serializer_class = RentalSerializer
    queryset = Booking.objects.all()


class ContactViewSet(viewsets.ModelViewSet):
    serializer_class = ContactSerializer
    queryset = Contact.objects.all()


class StaffViewSet(viewsets.ModelViewSet):
    serializer_class = StaffSerializer
    queryset = Staff.objects.all()