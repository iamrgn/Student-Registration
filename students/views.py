from django.shortcuts import render,redirect
from django.views import View
from .forms import StudentForm,DropdownForm
from django.contrib import messages
from .models import Students
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
import operator
import functools
from django.db.models import Q
from datetime import datetime
# Create your views here.

def registrationpage(request):
    student_form = StudentForm()
    return render(request,"registration_form/registration_form.html",{"student_form":student_form})

def studentregistration(request):
    studentform = StudentForm(request.POST,request.FILES or None) 
    if studentform.is_valid():
        studentform.save()
        messages.success(request,"Form Submitted Successfully !")
        return redirect('registrationform')

def studentslist(request):
    students = Students.objects.all().order_by('-id')
    dropform = DropdownForm()
    search = request.GET.get('search')
    st_gender = request.GET.get('gender')
    st_standard = request.GET.get('standard')
    st_division = request.GET.get('division')
    
    filters = []
    if st_gender:
        case1 = Q(gender=st_gender)
        filters.append(case1)
    if st_standard:
        case2 = Q(standard=st_standard)
        filters.append(case2)
    if st_division:
        case3 = Q(division=st_division)
        filters.append(case3)
    if st_gender or st_standard or st_division:
        filters=functools.reduce(operator.and_,filters)
        students = students.filter(filters)

    if search:
        students = students.filter(Q(firstname__icontains=search)|Q(middlename__icontains=search)|Q(lastname__icontains=search)|Q(dob__icontains=search)|Q(father_name__icontains=search)|Q(mother_name__icontains=search)|Q(email__icontains=search)|Q(contact__icontains=search)|Q(address__icontains=search))

    paginator = Paginator(students,5) #Pagination
    page = request.GET.get('page')
    try:
        student_pg = paginator.page(page)
    except PageNotAnInteger:
        student_pg = paginator.page(1)
    except EmptyPage:
        student_pg = paginator.page(paginator.num_pages)
    return render(request,"registered_students/registered_students.html",{"students":student_pg,"dropform":dropform,'gender':st_gender,'standard':st_standard,'division':st_division,'search':search})

def edit_student_form(request,pk):
    student = Students.objects.get(pk=pk)
    edit_student_form = StudentForm(instance=student)
    
    if request.method == "POST":
        section = request.POST['section']
        if section == 'edit':
            edit_form = StudentForm(request.POST,request.FILES or None,instance=student)
            if edit_form.is_valid():
            
                edit_form.save()
                
                messages.success(request,"Changes Saved !")
                return redirect('list_students')

        if section == 'delete':
            student = Students.objects.get(pk=pk)
            student.delete()
            messages.success(request,"Student Deleted successfully !")
            return redirect('list_students')
    return render(request,"registered_students/edit_student.html",{'edit_student_form':edit_student_form,'student':student})
