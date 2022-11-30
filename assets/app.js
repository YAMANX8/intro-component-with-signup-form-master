const form = document.querySelector(".grid__form");
const inputFields = form.querySelectorAll(".card__input");
const email = document.getElementById("email");
let ex = /^[a-zA-Z0-9.!#$%&'*+/=?^_'{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//remove the error when the user try to type
inputFields.forEach(field => {
    field.addEventListener("keydown", function () {
        field.parentElement.classList.remove("error");
    })
});
form.addEventListener("submit", function (e) {
    //create an expresion to check
    //check the vaule of the email field
    if (!email.value.match(ex)) {
        e.preventDefault();
        errorMessage(email, "looks like this is not an");
    }
    //check each field if empty
    inputFields.forEach(field => {
        if (field.value == "") {
            e.preventDefault();
            errorMessage(field, "cannot be empty");
        }
    });

});
//error message function
function errorMessage(field, errorTxt) {
    field.parentElement.classList.add("error");
    const errorM = field.parentElement.querySelector(".error__message");
    errorM.innerHTML = `${field.name} ${errorTxt}`;
    //error message for email unmatch expresion
    if (field.value !== "")
        errorM.innerHTML = `${errorTxt} ${field.name}`;
}