import {phoneMask} from "../../components/validator/validator.js";
import {readURL} from "../../components/set-photo-input/set-photo-input.js";
import datepicker from 'js-datepicker';

//DATEPICKER
let dateInput =  document.querySelector(".birthday__select");
let dateObj =  new Date();
const picker = datepicker(".birthday__select", {
    customDays: ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'],
    customMonths: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
    position: "br",
    formatter: (dateInput, dateObj, picker) => {
        const dateValue = dateObj.toLocaleDateString();
        dateInput.value = dateValue // => '1/1/2099'
    }
});

//ОЧИСТКА ФОРМЫ
document.querySelector(".user-data-edit__del").addEventListener("click", function () {
    document.querySelector(".user-data-edit__personal-edit").reset();
    document.querySelectorAll("option").forEach(removeAllSelected => {
        removeAllSelected.removeAttribute("selected");
    });
    document.querySelectorAll(".brands-main__select").forEach(
        clearSelect => {
            clearSelect.innerHTML="&nbsp;";
        }
    );
    document.querySelectorAll(".brands-main__option").forEach(
        clearOptions => {
            clearOptions.classList.remove("brands-main__option_active");
        }
    );
});

//ДОБАВЛЕНИЕ НОМЕРОВ
let x = 1;
phoneMask();
document.querySelector(".personal-data__add-number").addEventListener("click", function () {
    if (x < 3) {
        let str = '<input name="phone'+x+'" type="text" placeholder=" " style="margin-top: 17px" class="input-block__input personal-data phone__input">';
        let phones = document.querySelectorAll(".phone__input");
        let phoneAfter = phones[phones.length-1];
        phoneAfter.insertAdjacentHTML("afterEnd", str);
        phoneMask();
        x++;
        if (x === 3){
            document.querySelector(".personal-data__add-number").style.display="none";
            document.querySelector(".user-data-edit__max-amount-number").style.display="block";
        }
    }
});
//ДОБАВЛЕНИЕ ФОТО В ИНПУТ
if (document.querySelector(".user-data-edit__ava-load") !== null){
document.querySelector(".user-data-edit__ava-load").addEventListener("change", (function() {
    readURL(this, ".ava");
}));
}
if (document.querySelector(".user-data-edit__cover-load") !== null){
    document.querySelector(".user-data-edit__cover-load").addEventListener("change", (function() {
        let response = readURL(this, ".cover");
        if (response === 0) {
            document.querySelector(".user-data-edit__cover-drop-zone").style.display = "none";
            document.querySelector(".user-data-edit__cover-drop-block").style.padding = "0";
        }
    }));
}