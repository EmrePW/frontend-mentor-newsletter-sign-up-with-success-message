const form = document.getElementById("myForm");

const completed = document.querySelector(".completed");
const form_side = document.querySelector(".form-side");
const image = document.querySelector(".image");

const comp_email = document.getElementById("completed-email");
const email = document.querySelector("#email")
const err_message = document.getElementById("errorMessage");

const comp_button = document.querySelector(".completed .button");


form.addEventListener("submit", (e) => {
    e.preventDefault();

    validateEmail(email.value.trim());
})


function validateEmail(email1) {
    var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(regex.test(email1)) {
        console.log("wrong");
        form_side.classList.add("hidden");
        image.classList.add("hidden");
        comp_email.setHTML(email1);
        completed.classList.remove("hidden");
        
    }

    else {
        err_message.classList.add("error-message-active");
        email.classList.add("error-input");
        return;
    }
}

comp_button.addEventListener("click", () => {
    form_side.classList.remove("hidden");
    image.classList.remove("hidden");
    completed.classList.add("hidden");
    err_message.classList.remove("error-message-active");
    email.classList.remove("error-input");
})
