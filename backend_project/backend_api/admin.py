from django.contrib import admin
from .models import Booking
from .models import Contact
from .models import Staff

# Register your models here.

class RentalAdmin(admin.ModelAdmin):
    list = ('booking_firstname' , 'booking_lastname' , 'booking_email' , 'booking_phone' , 'booking_fromaddress' , 'booking_toaddress' , 'booking_date' , 'booking_time' , 'booking_message','car_name')
admin.site.register(Booking)

class RentalAdmin(admin.ModelAdmin):
    list = (' c_name', 'c_email', 'c_phno', 'c_message')
admin.site.register(Contact)

class RentalAdmin(admin.ModelAdmin):
    list = ('name1', 'name2', 'email', 'password', 'newpassword', 'phno', 'day', 'month', 'year', 'radio')
admin.site.register(Staff)
    
