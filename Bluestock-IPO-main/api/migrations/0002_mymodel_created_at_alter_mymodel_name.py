# Generated by Django 5.1 on 2024-08-17 14:08

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='mymodel',
            name='created_at',
            field=models.DateTimeField(default=datetime.datetime.now),
        ),
        migrations.AlterField(
            model_name='mymodel',
            name='name',
            field=models.CharField(max_length=255),
        ),
    ]
