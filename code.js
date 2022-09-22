function compute(){

    //create variables for lagic
   var principal = document.getElementById("principal").value;
   var rate = document.getElementById("rate").value;
   var years = document.getElementById("years").value;
   var interesting = principal * years * rate /100;

   if(principal < 1){
    alert("Please enter a valid Number"); // testing the button connection
    document.getElementById("principal").focus();
    return;
}

   // logic for to convert numbers in year of the future
   var year_future = new Date().getFullYear()+parseInt(years);

   //obtein the element result with the button calculate...
   var boton_result = document.getElementById("result");
   document.getElementById("result").innerHTML = "" + interesting; 

   // add more info
   document.getElementById("result").innerHTML=` "If you deposit is" ${principal}$, \<br>\ "At an interest rate: ${rate}%", \<br>\ "You receive :  ${interesting}$", \<br>\ "in the next Years  ${year_future}"`

 
}
        
  // funtion for read  the menu-range
  function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}