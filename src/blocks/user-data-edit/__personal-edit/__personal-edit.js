import {isEmail} from "../../../components/validator/validator.js";

//ПРОВЕРЯЕМ E-MAIL
var addressInput = document.forms.personal_edit.email; //инпут в форме
addressInput.addEventListener("input", function () {
    var address = addressInput.value; //значение e-mail
    if(isEmail(address) == false) {
        addressInput.classList.add("input-block__input_invalid");
    }
    else{
        addressInput.classList.remove("input-block__input_invalid");
    }
})