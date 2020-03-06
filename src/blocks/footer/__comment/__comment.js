import {isEmail} from "../../../components/validator/validator.js";

var addressInput = document.forms.footerform.email; //инпут в форме футера
addressInput.addEventListener("input", function () {
    var address = addressInput.value; //значение e-mail
    if(isEmail(address) == false) {
        addressInput.classList.add("common-input-block_invalid");
    }
    else{
        addressInput.classList.remove("common-input-block_invalid");
        document.querySelector(".sendfooterform").addEventListener("click", function () {
            this.send();
        })
    }
})