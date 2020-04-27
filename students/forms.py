from django import forms
from .models import Students

class StudentForm(forms.ModelForm):
    dob = forms.DateField(input_formats=['%d-%m-%Y'],widget=forms.DateInput(attrs={'class':'date-pick'},format='%d-%m-%Y'))
    class Meta:
        model = Students
        fields = ('firstname','middlename','lastname','dob','age','email','contact','gender','standard',
        'division','father_name','mother_name','address','photo')
        widgets = {
            'contact':forms.TextInput(attrs={'type':'text','max_length':'10','class':'only_allow_number'}),
            'age':forms.TextInput(attrs={'type':'text','class':'only_allow_number'}),
            'photo':forms.FileInput(attrs={'type':'file','class':'choose_img'})
        } 
        help_texts = {
            'photo': 'Please upload passport size photo. Maximum resolution 1260 * 990 pixels.',
        }

    def __init__(self, *args, **kwargs):
        super(StudentForm, self).__init__(*args, **kwargs)
        self.fields['dob'].label = "Date of Birth"
        self.fields['firstname'].label = 'First Name'
        self.fields['middlename'].label = 'Middle Name'
        self.fields['lastname'].label = 'Last Name'
        self.fields['father_name'].label = 'Name of Father'
        self.fields['mother_name'].label = 'Name of Mother'

class DropdownForm(forms.ModelForm):
    class Meta:
        model = Students
        fields  = ['gender','standard','division']