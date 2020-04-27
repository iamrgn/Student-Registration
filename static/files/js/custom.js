$(window).ready(function() {
  // pre-loader script 
  $(".pre-loader").fadeOut("slow");
  
  // active link 
  for (var i = 0; i < document.links.length; i++) {
   if (document.links[i].href == document.URL) {
 $(document.links[i]).addClass('active');
 }}
  $('ul.sub-menu li a.active').first().parents('ul').first().addClass('open-sub-menu');
  
  // page-form, pop-up 'col height-set'
  $('.page-col textarea').parents('.page-col').addClass('height-set');
  $('.pop-up-col textarea').parents('.pop-up-col').addClass('height-set');
  
 // page-form, pop-up 'choose-img-div'
  $('.page-col .choose-img-show').parents('.page-col').addClass('choose-img-div');
  $('.pop-up-col .choose-img-show').parents('.pop-up-col').addClass('choose-img-div');
  
});

/* date-pick class */  
$(function() { 
  $( ".date-pick" ).datepicker({ dateFormat: 'dd-mm-yy',
  maxDate: '0',});
}); 
$('body').on('focus',".date-pick", function(){
 if( $(this).hasClass('hasDatepicker') === false )  {
     $(this).datepicker({ dateFormat: 'dd-mm-yy',
     maxDate: '0',
   });
 }
});

// profile_popup
$('.profile_popup_btn').click(function() {
 $('.profile_popup').toggleClass('profile_popup_open');
});

// close-modal
$('.close-modal, .pop-up .modal-footer .delete-btn, .pop-up .modal-footer .transfer-btn').on('click',function() {
  $('.modal').modal('hide');
});

// toggle-password
$(".toggle-password").click(function() {
 //$(this).toggleClass("fa-eye fa-eye-slash");
 var input = $($(this).attr("toggle"));
 if (input.attr("type") == "password") {
   input.attr("type", "text");
 } else {
   input.attr("type", "password");
 }
 });
 
// submitAnyForm
function submitAnyForm(src) 
   {
   var form=$(src).parents('form').first();
   if(! form[0].checkValidity())
       $('<input type="submit">').hide().appendTo(form).click().remove();
   else
       {
       $(src).removeAttr('onclick');
       $(src).prop('onclick',null).off('click');
       $(src).text('Submitting...');
       form.submit();
       }
   }
 
// hid-show-menu
/*
var div = localStorage['div'] || 0;
 if (div == 1) {
 $('body').toggleClass("hid-show-menu-click");
 }
 $('.hid-show-menu').click(function() {
 $('body').toggleClass("hid-show-menu-click");
 var current = localStorage['div'] || 0;
 if (current == 1) {
   localStorage['div'] = 0;
  } 
 else {
 localStorage['div'] = 1;
 }
});
*/

// Confirm password front-end validation script  
function chkPasswordMatch() {
 var password = $("#comm_confirm_password").val();
 var confirmPassword = $("#comm_new_password").val();
 if (password != confirmPassword){
     $("#comm_password_match").html("Passwords do not match!");
     $("#comm_change_password_btn").attr('disabled',true);
 }
 else{
     $("#comm_password_match").html("Passwords match.");
     $("#comm_change_password_btn").attr('disabled',false);
 }
}
$(document).ready(function () {
   $("#comm_confirm_password, #comm_new_password").keyup(chkPasswordMatch);
});

// front-end table search
!function(t){"use strict";var e=function(e){function n(n){o=n.target;var r=t.getElementsByClassName(o.getAttribute("data-table"));e.forEach.call(r,function(t){e.forEach.call(t.tBodies,function(t){e.forEach.call(t.rows,a)})})}function a(t){var e=t.textContent.toLowerCase(),n=o.value.toLowerCase();t.style.display=-1===e.indexOf(n)?"none":"table-row"}var o;return{init:function(){var a=t.getElementsByClassName("filter");e.forEach.call(a,function(t){t.oninput=n})}}}(Array.prototype);t.addEventListener("readystatechange",function(){"complete"===t.readyState&&e.init()})}(document);


$(window).ready(function() {
// only_allow_number
$('.only_allow_number').bind('keyup paste', function(){
  this.value = this.value.replace(/[^0-9]/g, '');
  console.log('ppp')
});

// only_allow_text
$('.only_allow_text').bind('keyup blur',function(){ 
var node = $(this);
node.val(node.val().replace(/[^a-z]/g,'') ); }
);
});

// jquery-file-upload-preview
$(document).ready(function() {	
  $(".choose_img").change(function () {
       if (this.files && this.files[0]) {
         var reader = new FileReader();
         reader.onload = function (e) {
          $('.choose_img_show').attr('src', e.target.result);
        }
      reader.readAsDataURL(this.files[0]);
    }
   });		
});

//lodge checkbox
$(document).ready(function(){
  $(document).on('change', '#id_lodge', function(e){
    if ($("#id_lodge").prop('checked') == true){
      $('#id_lodge_room_count').attr('disabled',false);
      $('#id_restaurant_type').attr('hidden',false);
      console.log('jambo2')
    }
    else{
        $('#id_lodge_room_count').attr('disabled',true);
        $('#id_restaurant_type').attr('hidden',true);
        console.log('jambo3')
    }
  });

});
