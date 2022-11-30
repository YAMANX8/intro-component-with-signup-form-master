const form = document.querySelector(".grid__form");
const inputFields = form.querySelectorAll(".card__input");
const email = document.getElementById("email");
//remove the error when the user try to type
inputFields.forEach(field => {
    field.addEventListener("keyup", function () {
        field.parentElement.classList.remove("error");
    })
});
form.addEventListener("submit", function (e) {
    //check each field if empty
    inputFields.forEach(field => {
        if (field.value == "") {
            e.preventDefault();
            errorMessage(field, "cannot be empty");
        }
    });
    //create an expresion to check
    let ex = /^[a-zA-Z0-9.!#$%&'*+/=?^_'{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    //check the vaule of the email field
    if (!email.value.match(ex)) {
        e.preventDefault();
        errorMessage(email, "looks like this is not an");
    }

});
//error message function
function errorMessage(field, errorTxt) {
    field.parentElement.classList.add("error");
    const errorM = field.parentElement.querySelector(".error__message");
    if (field.value == "")
        errorM.innerHTML = `${field.name} ${errorTxt}`;
    else
        errorM.innerHTML = `${errorTxt} ${field.name}`;

}