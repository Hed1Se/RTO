function validateform(){  
var name=document.myform.name.value;  
var password=document.myform.password.value;  
var num=document.myform.num.value;
var mail=document.myform.mail.value;
var atposition=mail.indexOf("@");  
var dotposition=mail.lastIndexOf(".");
  
if (name==null || name==""){  
  alert("Name can't be blank");  
  return false;

}if (num===null || num===""){
alert("Phone number can't be blank!");
return false; 
}else if(password.length<6){  
  alert("Password must be at least 6 characters long.");  
  return false;  
  }  
else if (isNaN(num)){
alert("Phone number please enter number");
return false;
}
else if (atposition<1 || dotposition<atposition+2 || dotposition+2>=mail.length){
alert("Please enter a valid e-mail adress!");
return false;
}
else {
alert("welcome");
  return true;  
}
}  






