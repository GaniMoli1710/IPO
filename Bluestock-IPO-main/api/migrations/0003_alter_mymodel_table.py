# Generated by Django 5.1 on 2024-08-17 18:32

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_mymodel_created_at_alter_mymodel_name'),
    ]

    operations = [
        migrations.AlterModelTable(
            name='mymodel',
            table='items',
        ),
    ]
