// Initialize Firebase(2)
var firebaseConfig = {
  apiKey: "AIzaSyBFX2qxsoYNWvI_i--BRSCqKkL8yTWvxU4",
  authDomain: "job-portal-d6ade.firebaseapp.com",
  databaseURL: "https://job-portal-d6ade-default-rtdb.firebaseio.com",
  projectId: "job-portal-d6ade",
  storageBucket: "job-portal-d6ade.appspot.com",
  messagingSenderId: "116293980161",
  appId: "1:116293980161:web:8b5d06ec21de37148b7000"
};
  firebase.initializeApp(config);
  
  //Reference for form collection(3)
  let formMessage = firebase.database().ref('register');
  
  //listen for submit event//(1)
  document
    .getElementById('registrationform')
    .addEventListener('submit', formSubmit);
  
  //Submit form(1.2)
  function formSubmit(e) {
    e.preventDefault();
    // Get Values from the DOM
    let name = document.querySelector('#name').value;
    let phonenumber = document.querySelector('#phonenumber').value;
    let age = document.querySelector('#age').value;
    let location = document.querySelector('#location').value;
    let job = document.querySelector('#job').value;
  
    //send message values
    sendMessage(name, phonenumber, age, location, job);
  
    //Show Alert Message(5)
    document.querySelector('.alert').style.display = 'block';
  
    //Hide Alert Message After Seven Seconds(6)
    setTimeout(function() {
      document.querySelector('.alert').style.display = 'none';
    }, 7000);
  
    //Form Reset After Submission(7)
    document.getElementById('registrationform').reset();
  }
  
  //Send Message to Firebase(4)
  
  function sendMessage(name, phonenumber, age, location, job) {
    let newFormMessage = formMessage.push();
    newFormMessage.set({
      name: name,
      phonenumber: phonenumber,
      age: age,
      location: location,
      job: job,
    });
  }