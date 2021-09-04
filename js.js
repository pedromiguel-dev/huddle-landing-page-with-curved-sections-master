const valid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
function validar(){
    const email = document.querySelector(".footer__email").value;
    const border = document.querySelector(".footer__email");
    const text = document.querySelector(".footer__alert");
    if (valid.test(email)) {
        alert("Valid email");
        border.classList.remove("footer__email--active");
        text.classList.remove("footer__alert--active");
        return true;
    }
    alert("invalid Email")
    border.classList.add("footer__email--active");
    text.classList.add("footer__alert--active");

    return false;
}