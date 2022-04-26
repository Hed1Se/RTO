function handle(){
    var x = document.getElementById("number1").value;
    var y = document.getElementById("number2").value; 
    var z =  Number(x) + Number(y)
    if (isNaN(x)) {
    z = "error"
}
     else if (isNaN(y)) {
     z = "error"
}
     else {
     z = Number(x) + Number(y);
}






    document.getElementById("demo").innerHTML = z;
}