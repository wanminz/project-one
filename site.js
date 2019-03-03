// To ensure that if the user's browser does not have JavaScript or can't handle
// it, will not run any JavaScript
(function(){
  if (!('querySelector' in document && 'addEventListener' in document)){
    return;
  }
});

console.log('Running!');

var name_input = document.querySelector('#name');
name_input.addEventListener('focus', function(){
  console.log('Focused on Name');
});

var email_input = document.querySelector('#email');
email_input.addEventListener('focus', function(){
  console.log('Focused on Email');
});

var phone_input = document.querySelector('#phone');
phone_input.addEventListener('focus', function(){
  console.log('Focused on Phone');
});
