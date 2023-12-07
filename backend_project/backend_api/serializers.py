from rest_framework import serializers
from backend_api.models import Booking
from backend_api.models import Contact
from backend_api.models import Staff

class RentalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = '__all__'

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields ="__all__"


class StaffSerializer(serializers.ModelSerializer):
    class Meta:
        model = Staff
        fields ="__all__"