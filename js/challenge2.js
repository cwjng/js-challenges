document.getElementById("sameAddress").addEventListener("click", function(){
    let element = document.getElementById("sameAddress")
    console.log("Checkbox was clicked.");
    console.log(element.checked);
    let home = document.getElementById("home");
    let bill = document.getElementById("bill");
    if (this.checked) {
        home.value = bill.value;
        home.disabled = true;
    }
    else {
        home.value = ""
        home.disabled = false;
    }
})