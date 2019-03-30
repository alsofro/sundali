from django.db import models


# Create your models here.

class TestTable(models.Model):
    message_id = models.AutoField(primary_key=True)
    message_text = models.CharField(verbose_name='Текст сообщения', blank=True)
    message_dttm = models.DateField(auto_now=true)
    read_status = models.BooleanField(default=False)

    def __str__(self):
        return self.message_id
