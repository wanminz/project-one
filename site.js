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
    var name_input = document.querySelector('#name');
    var email_input = document.querySelector('#email');
    var numinput = document.querySelector('#phone');
    var submitbtn = document.querySelector('#signup');
  });





});
