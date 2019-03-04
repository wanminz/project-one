// Using global form
"use strict";

// Function to check if the browser is able to run javascript
(function(){
  // If javascript can't be ran, exits out of function
  if (!('querySelector' in document && 'addEventListener' in document))
  {
    return;
  }

  // Functions from Karl Stolley @ https://github.com/itmd-362-2019/demos
  // Comparison function
  function eq(value, condition){
    return value === condition;
  }

  // Function to clean up phone number inputs
  function cleannum(value){
    return value.replace(/\D/g,'');
  }

  // Function to clean up whitespace
  function cleanws(value){
    return value.replace(/\s/g, '');
  }

  // Function to remove the +1 area code in phone numbers
  function rmone(value){
    return value.replace(/^1/,'');
  }

  // Function to validate the user's inputs
  function validate(value, check, condition){
    if(eq(typeof(check.test), 'function')){
      // Checking a regular expression
      return check.test(value);
    } else if (eq(typeof(check), 'function')){
      // Checking a comparison function
      return check(value, condition);
    } else {
      return false;
    }
  }

  // Function to check phone number
  function checkphone(value){
    // Removing the one from the phone number if exists and any non-digits
    var phone_input = rmone(cleannum(value));
    // Ensuring that the phone number entered is exactly 10 digits
    return validate(phone_input.length, eq, 10);
  }

  // Function to check email
  function checkemail(value){
    var email_input = cleanws(value);
    // Ensures that there is an @ in between characters
    return validate(email_input, /^[^@\s]+@[^@\s]+$/g);
  }

  // Will run everything when the DOM has finished loading
  document.addEventListener('DOMContentLoaded', function(){
    // Link DOM elements
    var signup_form = document.querySelector('#dogform');
    var name_input = document.querySelector('#name');
    var contact_info = document.querySelector('#contact');
    // Lets user know their input doesn't satisfy requirements
    var help = document.querySelector('#contact-info .hint');
    help.innerHTML += ' <b id="err"></b>';
    var submitbtn = document.querySelector('#signup');

    // Using focus method on user input boxes
    name_input.addEventListener('focus', function(){
      console.log('Focusing on name');
    });
    contact_info.addEventListener('focus', function(){
      console.log('Focusing on email/phone number');
    });

    // Disabling submit button without a full 10-digit phone number
    submitbtn.setAttribute('disabled','disabled');


  // End of DOMContentLoaded
  });




// End of IIFE
}());
