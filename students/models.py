from django.db import models

# Create your models here.

gender = (
    ('MALE','MALE'),
    ('FEMALE','FEMALE'),
)

student_class = (
    ('8','8'),
    ('9','9'),
    ('10','10'),
    ('11','11'),
    ('12','12'),
)

student_divisions = (
    ('A','A'),
    ('B','B'),
    ('C','C'),
    ('D','D'),
)

class Students(models.Model):
    firstname   = models.CharField(max_length=100, blank=False, null=False)
    middlename  = models.CharField(max_length=100, blank=True, null=True)
    lastname    = models.CharField(max_length=100, blank=False, null=False)
    dob         = models.DateField(auto_now=False,auto_now_add=False,blank=False,null=False)
    age         = models.CharField(max_length=2,blank=False, null=False)
    email       = models.EmailField(max_length=100,blank=False,null=False)
    contact     = models.CharField(max_length=10,blank=False,null=False)
    gender      = models.CharField(choices=gender,blank=False,null=False,max_length=20)
    standard    = models.CharField(choices=student_class,blank=False,null=False,max_length=10)
    division    = models.CharField(choices=student_divisions,blank=False,null=False,max_length=10)
    father_name = models.CharField(max_length=100,blank=False,null=False)
    mother_name = models.CharField(max_length=100,blank=False,null=False)
    address     = models.TextField(max_length=1000,blank=False,null=False)
    photo       = models.ImageField(upload_to='student_photos',max_length=100,blank=False,null=False)

    def __str__(self):
        return self.firstname
