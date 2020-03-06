class MenuList{
    constructor() {
        let page = document.body.dataset.page;
        document.querySelectorAll(".menu__item").forEach(
            elem=>{
                if (elem.dataset.menu == page){
                    elem.classList.add("menu__item_active");
                }
            }
        )
    }
}
document.addEventListener('DOMContentLoaded', ()=>{
    var menuList = new MenuList();
})