# Generated by Django 5.0 on 2024-01-14 11:59

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("user", "0008_customuser_otp"),
    ]

    operations = [
        migrations.AlterField(
            model_name="customuser",
            name="otp",
            field=models.CharField(
                blank=True, max_length=5, null=True, verbose_name="one time password"
            ),
        ),
    ]
