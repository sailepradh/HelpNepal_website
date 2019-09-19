
"use strict";
function IsEmpty(objectfield,stringfield)
{
var objectvalue;
    objectvalue = objectfield.value.length;
    if(objectvalue==="")
    {
        alert("Oops.. Please fill out the value of "+stringfield);
        objectfield.style.background = 'Yellow';
        return false;
    }
    else{
        return true;
}
}

function validateemail(fld) {
    var error = "";
    var illegalChars = /[\W_]/; // allow only letters and numbers
 
    if (fld.value === "") {
        fld.style.background = 'Yellow';
        error = "You didn't enter a password.\n";
        alert(error);
        return false;
 
    } 
    if ((fld.value.length < 7) || (fld.value.length > 15)) {
        error = "The password is the wrong length. \n";
        fld.style.background = 'Yellow';
        alert(error);
        return false;
    } 
    if (illegalChars.test(fld.value)) {
        error = "The password contains illegal characters.\n";
        fld.style.background = 'Yellow';
        alert(error);
        return false;
 
    } 
    if ( (fld.value.search(/[a-zA-Z]+/)===-1) || (fld.value.search(/[0-9]+/)===-1) ) {
        error = "The password must contain at least one numeral.\n";
        fld.style.background = 'Yellow';
        alert(error);
        return false;
 
    } 

   return true;
}

function preloader() 

{
var Image="";
var heavyImage = new Image(); 

heavyImage.src = "heavyimagefile.jpg";

}

function imageloader() 

{

     // counter
     var i = 0;
     var Image="";
     var images="";

     // create object
      var imageObjs = new Image();
     // set image list
     images = new Array["image1.jpg"]();

     // start preloading
     for(i=0; i<=3; i+=1)
     {

         imageObjs[i] = new Image();
          imageObjs[i].src=images[i];
     }

} 



    
