//тип файла
function fileType() {
    let file = document.querySelector(".add-doc__add-document").files[0],
        ext = "не определилось",
        parts = file.name.split('.');
    if (parts.length > 1) ext = parts.pop();
    if (ext !== "doc" && ext !== "docx" && ext !== "pdf") {
        document.querySelector(".add-doc__warning").innerHTML = "Можно загружать только doc, docx, pdf";
    } else {
        document.querySelector(".add-doc__warning").innerHTML = "Вы загрузили " + ext + "-файл";
    }
}

if (document.querySelector('.add-doc__add-document') != null) {
    document.querySelector('.add-doc__add-document').addEventListener('change', fileType);
}
//удаление документа
document.querySelectorAll(".doc__del").forEach(
    function (btn) {
        btn.addEventListener("click", function () {
            var doc = btn.closest(".doc");
            doc.remove();
        })
    }
);