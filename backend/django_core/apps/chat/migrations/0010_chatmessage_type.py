# Generated by Django 5.0.2 on 2024-02-11 03:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("chat", "0009_chatmessage_file_alter_chatmessage_content"),
    ]

    operations = [
        migrations.AddField(
            model_name="chatmessage",
            name="type",
            field=models.CharField(
                choices=[("text", "Text"), ("image", "Image"), ("video", "Video")],
                default="text",
                max_length=10,
            ),
        ),
    ]
