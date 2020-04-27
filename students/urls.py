from django.urls import include,path
from .views import studentregistration, registrationpage, studentslist, edit_student_form

urlpatterns = [
    path('',registrationpage,name="registrationform"),
    path('add-registration-form/',studentregistration,name="studentregister"),
    path('registered_students/',studentslist,name="list_students"),
    path('editform/<int:pk>',edit_student_form,name='edit_student_form'),
]