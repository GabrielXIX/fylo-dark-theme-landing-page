//Email validation variables
const submitBtn = document.querySelector('[data-submit]');
const txtInput = document.querySelector('[data-input]');
const errorAlert = document.querySelector('[data-error]');
var valid = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//Email validation for error alert
submitBtn.addEventListener("click", e => {

    if(!txtInput.value.match(valid)) {

        errorAlert.focus();
    }
});