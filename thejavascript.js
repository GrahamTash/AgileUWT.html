function checkForm(usersName, eMail, thePswrd, confPswrd, checks) {
	//make errors invisible if not applicable

   if (usersName.length > 0) {
   	document.getElementById('err1').style.display = 'none';
   	checks += 1;
   }
   else document.getElementById('err1').style.display = 'block';
 

   if (testEmail(eMail)) {
   	document.getElementById('err2').style.display = 'none';
   	checks += 1;
   }
   else document.getElementById('err2').style.display = 'block';


   if (thePswrd.length > 0) {
    document.getElementById('err3').style.display = 'none';
    checks += 1;
   }
   else document.getElementById('err3').style.display = 'block';

   if (thePswrd == confPswrd) {
    document.getElementById('err4').style.display = 'none';
    checks += 1;
   }
   else document.getElementById('err4').style.display = 'block';

   if (checks == 4) {
    document.getElementById("successMsg").style.display = 'inline';
    //TODO: SEND INFO TO DB HERE
  }
   else document.getElementById("successMsg").style.display = 'none';
}

document.getElementById("submit").addEventListener("click", function(event) {
  usersName = document.getElementById('fullName').value;
  eMail = document.getElementById('email').value;
  thePswrd = document.getElementById('thePass').value;
  confPswrd = document.getElementById('confPass').value;

  checks = 0;

  document.getElementById('formErrors').style.display = 'block';
  //check with the function
  checkForm(usersName, eMail, thePswrd, confPswrd, checks);

   // Prevent default form action. DO NOT REMOVE THIS LINE
   event.preventDefault();
});


// check for proper email formatting
function testEmail(theEmail) 
{
    var formated = /\S+@\S+\.\S+/;
    return formated.test(theEmail);
}
