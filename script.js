let capthcheck = false;

function beforesubmit(event){
    
    if (capthcheck) {
        let outputdate = document.querySelector('.outputdate');
        let inputdate = document.querySelector('.inputdate');
        console.log('Inputdate value: ', inputdate.value);//* convert into date form
    
        let formatedDate = new Date(inputdate.value).toLocaleDateString('en-US');
        outputdate.value = formatedDate;
    } else {
        alert('Please check the re-acptha box to submit the lead');
        event.preventDefault();
    }


};

function timestamp() {
     var response = document.getElementById("g-recaptcha-response"); 
     if (response == null || response.value.trim() == "") {var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
     elems["ts"] = JSON.stringify(new Date().getTime());document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); } } setInterval(timestamp, 500); 

function capthachasuccess() {
    capthcheck = true;
}

