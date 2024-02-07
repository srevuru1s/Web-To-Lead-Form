function beforesubmit(){
    debugger;
    let outputdate = document.querySelector('.outputdate');
    let inputdate = document.querySelector('.inputdate');
    console.log('Inputdate value: ', inputdate.value);//* convert into date form

    let formatedDate = new Date(inputdate.value).toLocaleDateString('en-US');
    outputdate.value = formatedDate;

};
