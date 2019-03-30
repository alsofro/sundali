from django.db import models


# Create your models here.

class TestTable(models.Model):
    message_id = models.AutoField(primary_key=True)
    message_text = models.CharField(verbose_name='Текст сообщения', blank=True, max_length=200)
    message_dttm = models.DateField(auto_now=True)
    read_status = models.BooleanField(default=False)

    def __str__(self):
        return self.message_id


