// Using global form
"use strict";

// Function to check if the browser is able to run javascript
(function(){
  // If javascript can't be ran, exits out of function
  if (!('querySelector' in document && 'addEventListener' in document))
  {
    return;
  }

  document.addEventListener('DOMContentLoaded', function(){
    // Link DOM elements
    var signup_form = document.querySelector('#dogform');
    var contact_info = document.querySelector('#contact');
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
