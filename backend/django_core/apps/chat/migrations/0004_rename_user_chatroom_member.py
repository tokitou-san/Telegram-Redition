# Generated by Django 5.0.1 on 2024-01-23 00:54

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("chat", "0003_chatroom_chatmsg"),
    ]

    operations = [
        migrations.RenameField(
            model_name="chatroom",
            old_name="user",
            new_name="member",
        ),
    ]
