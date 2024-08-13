function loginForm(){
  var name=document.getElementById('name').value;
  var email=document.getElementById('email').value;

  document.getElementById('nameError').innerHTML='';
  document.getElementById('emailError').innerHTML='';

  if(name === ''){
    document.getElementById('nameError').innerHTML='Name is Required';
    return false;
  }
  var emilRegex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)){
    document.getElementById('emailError').innerHTML='Invalid Email Id';
    return false;
  }
  alert('Form Submitted Successfully!');
  return true;
}


function signupForm(){
  var name=document.getElementById('name').value;
  var email=document.getElementById('email').value;
  var password=document.getElementById('password').value;
  var conpassword=document.getElementById('conpassword').value;

  document.getElementById('nameError').innerHTML='';
  document.getElementById('emailError').innerHTML='';
  document.getElementById('passwordError').innerHTML='';
  document.getElementById('conpasswordError').innerHTML='';

  if(name === ''){
    document.getElementById('nameError').innerHTML='Name is Required';
    return false;
  }
  var emailRegex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)){
    document.getElementById('emailError').innerHTML='Invalid Email Id';
    return false;
  }
  if(password === ''){
    document.getElementById('passwordError').innerHTML='Password is Required';
    return false;
  }
  if(password.length < 8){
    document.getElementById('passwordError').innerHTML='password must be alteat 8 characters';
    return false;
  }
  if(conpassword === ''){
    document.getElementById('conpasswordError').innerHTML='Retype yor password';
    return false;
  }
  if(conpassword !== password){
    document.getElementById('conpasswordError').innerHTML='password do not match';
    return false;
  }
  alert('Form Submitted Successfully!');
  return true;
}