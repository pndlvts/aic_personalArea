class Select{
    /*
        select-выбираем select
        options-блок со всеми элементами списка, который будет показываться
     */
    constructor(select, options, optionsList) {
        this.select = select;
        this.options = options;
        //опции оригинального селекта
        let originalOptions = document.querySelectorAll("select[name=" + options.dataset.name + "] option");
        let data = []; //выбранные пункты option
        this.select.addEventListener('click', () => {
            singleActiveOptions();
            select.classList.add('brands-main__select_active'); //переключаем стиль селекта
            options.classList.add("brands-main__options_active"); //показываем опции селекта
            optionsList.forEach(option => {
                option.addEventListener('click', () => { //остслеживаем клики по опции
                    originalOptions.forEach(removeSelected => {
                        removeSelected.removeAttribute("selected"); //убираем выбор со всех опций в настоящем селекте
                    });
                    data = []; //очищаем массив выбранных опций
                    if (select.dataset.mode === "single"){  //если не multi-селект
                        optionsList.forEach((removeOption) => {
                            removeOption.classList.remove("brands-main__option_active"); //удаляем выбранные опции
                            select.classList.remove("brands-main__select_active");
                            options.classList.remove("brands-main__options_active");
                        })
                    }
                    option.classList.toggle("brands-main__option_active"); //переключаем стили опций
                    options.querySelectorAll(".brands-main__option_active").forEach(
                        activeOption => {
                            data.push(activeOption.dataset.value); //добавляем выбранные опции в массив data
                            originalOptions.forEach(
                                originalOption => {
                                    if (originalOption.value === activeOption.dataset.value){
                                        originalOption.setAttribute("selected", "selected");
                                    }
                                }
                            );
                        }
                    );
                    if (data.length === 0){
                        data = ["&nbsp;"]; //если не выбраны options то втсавляем пробел
                    }
                    data = data.join(", ");
                    select.innerHTML=data;
                })
            })
        });
    }
}

function singleActiveOptions(){
    document.querySelectorAll(".brands-main__select_active").forEach(
        activeSelect => {
            activeSelect.classList.remove("brands-main__select_active");
        }
    );
    document.querySelectorAll(".brands-main__options_active").forEach(
        activeSelect => {
            activeSelect.classList.remove("brands-main__options_active");
        }
    );
}

function closeOptions(){
    document.body.addEventListener("click", elem => {
        if (elem.target.classList.contains("brands-main__select") === false && elem.target.classList.contains("brands-main__option") === false){
            document.querySelectorAll(".brands-main__options").forEach(
                activeBlock => {
                    activeBlock.classList.remove("brands-main__options_active");
                }
            );
            document.querySelectorAll(".brands-main__select").forEach(
                activeBlock => {
                    activeBlock.classList.remove("brands-main__select_active");
                }
            );
        }
    })
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelectorAll('.brands-main__select-wrapper').forEach(list => {
        let select = list.querySelector(".brands-main__select");
        let options = list.querySelector(".brands-main__options");
        let optionsList = options.querySelectorAll(".brands-main__option");
        new Select(select, options, optionsList);
    });
    closeOptions();
});