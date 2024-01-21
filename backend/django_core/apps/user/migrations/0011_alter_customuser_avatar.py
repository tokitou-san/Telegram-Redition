# Generated by Django 5.0.1 on 2024-01-21 10:20

import dynamic_filenames
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("user", "0010_alter_customuser_otp"),
    ]

    operations = [
        migrations.AlterField(
            model_name="customuser",
            name="avatar",
            field=models.ImageField(
                blank=True,
                default="defaults/avatar.png",
                null=True,
                upload_to=dynamic_filenames.FilePattern(
                    filename_pattern="avatar/{uuid:s}{ext}"
                ),
            ),
        ),
    ]
