// To ensure that if the user's browser does not have JavaScript or can't handle
// it, will not run any JavaScript
(function(){
  if (!('querySelector' in document && 'addEventListener' in document)){
    return;
  }
}

document.addEventListener('DOMContentLoaded',function(){
  console.log('LOADED DOM');
});

var name_input = document.querySelector('#lname');
lname_input.addEventListener('focus', function(){
  console.log('Focused');
});

var email_input = document.querySelector('#email');
email_input.addEventListener('focus', function(){
  console.log('Focused');
});

var phone_input = document.querySelector('#phone');
phone_input.addEventListener('focus', function(){
  console.log('Focused');
});
