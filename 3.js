function validateform(){  
var name=document.myform.name.value;  

  
if (name==null || name==""){  
alert("identity can't be blank");  
return false;  
}  
else if (name==1){
alert("Please view the school information in the current interface");  
return false;  
}
else if (name==0){
alert("Will jump to the course details interface");  
  return true;  
}
else {
alert("Please enter the correct value");
return false; 
}
}