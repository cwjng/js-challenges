document.getElementById("subscribe").addEventListener("click", function(){
    let element = document.getElementById("subscribe");
    console.log("Checkbox was clicked");
    console.log(element.checked);
    if(this.checked) {
        document.querySelector("#emailDiv").style.display="block"
    }
    else {
        document.querySelector("#emailDiv").style.display="none"
    }
})