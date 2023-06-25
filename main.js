// Getting elements {main, form, input, submit button}
const main = document.querySelector("main");
const emailForm = document.querySelector("form");
const emailInput = document.querySelector("input[type='email']");
const submitBtn = document.querySelector("form input[type='button']");
// Keeping main inner html in a variable to use it with the dismiss button
const mainHtml = main.innerHTML;
// Making a dismiss button 
let dismissBtn = document.createElement("input");
dismissBtn.setAttribute("value", "Dismiss message");
dismissBtn.setAttribute("type", "button");
// Setting a variable for the email
let email = "";
// Regular expersion for email checking
const checkEmail = /(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;
// Get input from user on click
submitBtn.addEventListener("click", function(e) {
    e.preventDefault();
    email = emailInput.value;
    if(email.match(checkEmail)) {
        success(email); // a function that changes main element inner html to show the success state     
    } else {
        emailForm.classList.add("error"); // error is a class that changes input css style
    }
});
// Removing the error class from our email input when
emailInput.addEventListener("focus", function() {
    emailForm.classList.remove("error");
});
// Success function
function success(email) {
    main.classList.add("animation"); // animation class contains css animation of disappearing
    setTimeout(() => {
        main.classList.add("success"); // this class contians css style for the new main contents and it has the animation of appearing
        main.classList.remove("animation");
        main.innerHTML = `
        <img src="assets/images/icon-success.svg" alt="success">
    <h1>
      Thanks for subscribing!
    </h1>
    <p>
      A confirmation email has been sent to <span class="sentto">${email}</span> Please open it and click the button inside to confirm your subscription.
    </p>
        `;
        main.appendChild(dismissBtn);
        dismissBtn.addEventListener("click", ()=>{
            window.location.reload();
        })
    }, 450);
}

