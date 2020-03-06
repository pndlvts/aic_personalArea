//функциям-валидаторам передаются значения полей, которые сравниваются с регулярным выражением

export function isEmail(inputVal) {
    let regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(regEmail.test(inputVal) == false && inputVal != "") return 0;
    else return 1;
    }

//Маски ввода

export function phoneMask() {
    var phoneInput = document.querySelectorAll('.phone__input')
    phoneInput.forEach( inp => {inp.addEventListener('keydown', function(event) {
        if( !(event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Backspace' || event.key == 'Tab')) { event.preventDefault() }
        var mask = '+1 (111) 111-11-11'; // Задаем маску

        if (/[0-9\+\ \-\(\)]/.test(event.key)) {
            // Здесь начинаем сравнивать this.value и mask
            // к примеру опять же
            var currentString = this.value;
            var currentLength = currentString.length;
            if (/[0-9]/.test(event.key)) {
                if (mask[currentLength] == '1') {
                    this.value = currentString + event.key;
                } else {
                    for (var i=currentLength; i<mask.length; i++) {
                        if (mask[i] == '1') {
                            this.value = currentString + event.key;
                            break;
                        }
                        currentString += mask[i];
                    }
                }
            }
        }
    if (/\+\d \(\d{3}\) \d{3}\-\d{2}\-\d{2}/.test(inp.value)){
        inp.classList.remove("input-block__input_invalid");
    }
    else {
        inp.classList.add("input-block__input_invalid");
    }
    })});
}