from django.db import models


# Create your models here.
class Booking(models.Model):
    booking_firstname = models.CharField(max_length=20)
    booking_lastname = models.CharField(max_length=20)
    booking_email = models.CharField(max_length=100)
    booking_phone = models.CharField(max_length=20)
    booking_fromaddress = models.CharField(max_length=20)
    booking_toaddress = models.CharField(max_length=20)
    booking_date = models.DateField()
    booking_time = models.TimeField()
    booking_message = models.CharField(max_length=500)
    booking_payment = models.CharField(max_length=500)
    car_name = models.CharField(max_length=500)

    def __str__(self):
        return self.booking_firstname


class Contact(models.Model):
    c_name = models.CharField(max_length=20)
    c_email = models.CharField(max_length=100)
    c_phno = models.CharField(max_length=20)
    c_message = models.CharField(max_length=500)

    def __str__(self):
        return self.c_name


class Staff(models.Model):
    name1=models.CharField(max_length=100)
    name2=models.CharField(max_length=100)
    email=models.CharField(max_length=100)
    password=models.CharField(max_length=15)
    new_password=models.CharField(max_length=15)
    phno=models.CharField(max_length=10)
    day=models.CharField(max_length=10)
    month=models.CharField(max_length=20)
    year=models.CharField(max_length=10)
    radio=models.CharField(max_length=20)

    def __str__(self):
        return self.name

