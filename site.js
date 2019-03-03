// Using global form
"use strict";

console.log('Starting');
// Function to check if the browser is able to run javascript
(function(){
  // If javascript can't be ran, exits out of function
  if (!('querySelector' in document && 'addEventListener' in document))
  {
    return;
  }

  console.log('hello');
  document.addEventListener('DOMContentLoaded', function(){
    // Link DOM elements
    var signup_form = document.querySelector('#dogform');
    var name_input = document.querySelector('#name');
    var email_input = document.querySelector('#email');
    var num_input = document.querySelector('#phone');
    var submitbtn = document.querySelector('#signup');

    // Using focus method on user input boxes
    document.getElementById('name_input').focus();
    document.getElementById('email_input').focus();
    document.getElementById('num_input').focus();

    console.log('helo');

    document.getElementById('submitbtn').disabled = true;


  });





});
