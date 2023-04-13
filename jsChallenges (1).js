
// This is for Challenge #1 - make the checkbox display email when checked
function challenge1(){
    console.log('check this');
   if(document.getElementById('subscribe').checked==true){
    document.getElementById('emailDiv').style.display="block";
}
else{
    document.querySelector('#emailDiv').style.display="none";
}
}
// Challenge 2 Exercise - Home = Billing

function challenge2(){
    let bill=document.querySelector('#bill')
    let home=document.querySelector('#home')
    console.log ('this works');

    if(document.querySelector('#sameAddress').checked){
        home.value=bill.value;
        home.disabled = true;
    }
    else{
        home.value="";
        home.disabled = false;
    }
    
    
}

// Challenge 3 can't move on until I've slected a Class Standing and Graduation Date
 function challenge3(){
     var standing = null
     var grad_date = null
 
     var grad_date = document.querySelector('input[name="gradDate"]:checked')
     var standing = document.querySelector('input[name="standing"]:checked')
 
     if (grad_date == null || standing == null){
         alert("You must select a choice from each set of radio buttons")
         return false
     }
 }
//Challenge 4 Make sure both fields are filled out before you can submit the form and show alert messages if one or both aren't filled out
 function challenge4(){
    console.log("here")
    nameField = document.querySelector("#name").value
    addrField = document.querySelector("#addr").value
    nameError = document.querySelector("#nameError")
    addrError = document.querySelector("#addrError")
    // console.log("Namefield is" +nameField.length)
    // console.log("Addresfield is" +addrField.length)
    
    if (nameField.length ==0){
        nameError.style.display ="block"
    }
    else{
        nameError.style.display ="none"
    }
    if (addrField.length ==0){
        addrError.style.display ="block"
    }
    else{
        addrError.style.display ="none"
    }
    if (nameField.length ==0 || addrField.length ==0){
        return false
    }
    // console.log("I shouldn't be here")
    // return false
    }

 //Challenge 5 - hover over images to show image and alt text
 function challenge5(element){
     console.log("Hovering")
     console.log(element.src)
     console.log(element.alt)
 
     document.querySelector("#display").style.backgroundImage = "url('" + element.src + "')"
     document.querySelector("#display").innerHTML = element.alt
 }
 
 function challenge5leave(element){
 
     console.log("Leaving")
         document.querySelector("#display").style.backgroundImage = ""
         document.querySelector("#display").innerHTML = "Hover over an image below to display the image and the alt text."
 }
 