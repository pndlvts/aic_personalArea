export function readURL(input, selector) {
    if (input.files && input.files[0]) {
        let file = input.files[0],
            ext = "не определилось",
            parts = file.name.split('.');
        if (parts.length > 1) ext = parts.pop();
        if (ext !== "jpeg" && ext !== "jpg" && ext !== "png") {
            input.files[0].value="";
            return 1;
        }
        else {
            let reader = new FileReader();
            let image = document.querySelector(selector);
            reader.onload = function (e) {
                image.style.width = "100%";
                image.style.height = "100%";
                image.style.visibility = "visible";
                image.setAttribute('src', e.target.result);
            };
            reader.readAsDataURL(input.files[0]);
            return 0;
        }
    }
}