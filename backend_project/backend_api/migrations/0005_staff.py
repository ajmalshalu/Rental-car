# Generated by Django 4.1.5 on 2023-02-03 14:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend_api', '0004_booking_car_name'),
    ]

    operations = [
        migrations.CreateModel(
            name='Staff',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name1', models.CharField(max_length=100)),
                ('name2', models.CharField(max_length=100)),
                ('email', models.CharField(max_length=100)),
                ('password', models.CharField(max_length=15)),
                ('phno', models.CharField(max_length=10)),
                ('day', models.CharField(max_length=10)),
                ('month', models.CharField(max_length=20)),
                ('year', models.CharField(max_length=10)),
                ('radio', models.CharField(max_length=20)),
            ],
        ),
    ]
