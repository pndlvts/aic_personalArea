/* Указать табам (data-tab) и соответствующим им блокам (data-anchors) одинаковые значения data-атрибутов.
   Блоки должны быть в блоке tabs, а tab-menu в tab-menu
   Структура для передачи БЭМ-миксину, формирующему меню
   var tabs = [
                {
                    bem: "parent-block",
                    block: "block-name",
                    modifier: "mod",
                    text: "tab-text",
                    tag: "div data-tab=tab"
                }
              ]
*/
class TabList{
    constructor(tabMenu, tabs) {
        this.tabMenu = tabMenu; // блок-родитель табов
        this.tabs = tabs; //отображаемые блоки

        this.tabMenu.addEventListener('click', event => {
            //closest – возвращает ближайший родительский элемент (или сам элемент), который соответствует заданному CSS-селектору
            //target – ссылка на объект, который был инициатором события.
            //CONST index – содержит значение data-tab атрибута
            const index = event.target.closest('.tab-menu__tab-menu-item').dataset.tab;
            //удаляет стиль с активного таба
            document.querySelectorAll(".tab-menu__tab-menu-item_active").forEach(
                function (e){
                    //удаляем модификаторы активных табов
                    e.classList.remove("tab-menu__tab-menu-item_active");
                }
            );
            //метод показа таба
            this.openTab(index);
        });
    }
    openTab(index) {
        //скрывает активный блок
        this.tabs.querySelector('.active').classList.remove('active');
        //добавляет активный блок и стиль табу
        this.tabs.querySelectorAll(".tab-menu__content").forEach(function (tab) {
                if (tab.dataset.anchor === index) {
                    tab.classList.add('active');
                    document.querySelectorAll('.tab-menu__tab-menu-item').forEach(function (item) {
                            if (item.dataset.tab === index) {
                                item.classList.add("tab-menu__tab-menu-item_active");
                            }
                        }
                    );
                }
            }
        );
    }
}
document.addEventListener('DOMContentLoaded', ()=>{
    const tabMenu = document.querySelector('.tab-menu'); //контейнер с табами
    const tabs = document.querySelector('.tabs'); //контейнер с блоками
    const tabList = new TabList(tabMenu, tabs);
});

