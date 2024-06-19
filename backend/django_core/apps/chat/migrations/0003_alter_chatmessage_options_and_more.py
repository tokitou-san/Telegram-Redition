# Generated by Django 5.0.6 on 2024-06-19 09:41

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("chat", "0002_chatroom_created_at_alter_chatroom_type"),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="chatmessage",
            options={},
        ),
        migrations.RemoveField(
            model_name="chatmessage",
            name="timestamp",
        ),
        migrations.AddField(
            model_name="chatmessage",
            name="created_at",
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
        migrations.AlterField(
            model_name="chatroom",
            name="id",
            field=models.CharField(
                default="7167081746", editable=False, primary_key=True, serialize=False
            ),
        ),
        migrations.AlterField(
            model_name="chatroom",
            name="type",
            field=models.CharField(
                choices=[("DM", "DM"), ("GROUP", "GROUP")], default="DM", max_length=10
            ),
        ),
    ]
