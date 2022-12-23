/**JQUERY FUNCTION */
// $(document).ready(function() {
//     $(document).on('submit', '#my-form', function() {
//       // do your things
//       return false;
//      });
// });

let uname = document.getElementById('uname').value
let emailId = document.getElementById('email').value
let pwd = document.getElementById('pwd').value
let mobile = document.getElementById('mobile').value

//username

function submitHandler() {
  

  //username 
  let uname = document.getElementById('uname').value;
  let namePattern = /^[A-Za-z0-9]+$/g;

  if (namePattern.test(uname) && !null) {
    console.log('username matched')
    document.getElementById('usernameError').style.visibility = 'hidden'
  } else {
    document.getElementById('usernameError').style.visibility = 'visible'
    console.log('username - no match')
  }

  //email
  let emailId = document.getElementById('email').value;
  let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;

  if (emailPattern.test(emailId)) {
    console.log('email matched')
    document.getElementById('emailError').style.visibility = 'hidden'
    
  } else {
    document.getElementById('emailError').style.visibility = 'visible'
    console.log('email id - no match')
  }

  //password
  let pwd = document.getElementById('pwd').value;
  let pwdPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%\^&\*])(?=.{8,})/;

  if (pwdPattern.test(pwd)) {
    // console.log('matched')
    console.log("password matched", pwd)
    document.getElementById('pwdError').style.visibility = 'hidden'
  } else {
    document.getElementById('pwdError').style.visibility = 'visible'
    console.log("password - no match")
  }

  //mobile
  let mobile = document.getElementById('mobile').value;
  let mobPattern = /^\d{10}$/;

  if (mobPattern.test(mobile)) {
    // console.log('matched')
    console.log("contact matched", mobile)
    document.getElementById('mobError').style.visibility = 'hidden'
  } else {
    document.getElementById('mobError').style.visibility = 'visible'
    console.log("contact - no match")
  }

   //submit error
  if(uname && emailId && pwd && mobile == ""){
    // alert("Please fill required fields")
    // console.log(alert)
    document.getElementById('error').style.visibility = 'visible';

  }
  else {
    document.getElementById('error').style.visibility = 'hidden';

  }
  console.log(uname+ "\n" + emailId + "\n" +pwd + "\n" + mobile );

}
