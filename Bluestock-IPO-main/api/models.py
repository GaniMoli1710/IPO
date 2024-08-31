# api/models.py
from django.db import models

class MyModel(models.Model):
    company_name = models.CharField(max_length=255)
    open_date = models.CharField(max_length=50)
    issue_size = models.DecimalField(max_digits=10, decimal_places=2)
    listing_date = models.DateField()
    price_band = models.CharField(max_length=50)
    close_date = models.CharField(max_length=50)
    issue_type = models.CharField(max_length=50)
    status = models.CharField(max_length=50)
    ipo_price = models.DecimalField(max_digits=10, decimal_places=2)
    listing_gain = models.DecimalField(max_digits=5, decimal_places=2)
    cmp = models.DecimalField(max_digits=10, decimal_places=2)
    rhp = models.URLField()
    listing_price = models.DecimalField(max_digits=10, decimal_places=2)
    listing_date_new = models.DateField()
    current_return = models.DecimalField(max_digits=5, decimal_places=2)
    drhp = models.URLField()

    # def __str__(self):
    #     return self.company_name

    class Meta:
        db_table='items'
