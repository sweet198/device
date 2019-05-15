var link = document.querySelector(".feedback-link");

var feedback = document.querySelector(".modal-feedback");
var close = document.querySelector(".modal-close"); 

var form = document.querySelector(".feedback-form");
var feedbackName = document.querySelector("[name=feedback-name]");
var email = document.querySelector("[name=email]");
var letter = document.querySelector("[name=feedback-letter]");
        
var isStorageSupport = true;
var nameStorage = "";
var emailStorage = "";

try {
    nameStorage = localStorage.getItem("feedbackName");
    emailStorage = localStorage.getItem("email"); 
} catch (err) {
    isStorageSupport = false;
}

link.addEventListener("click", function(evt) {
    evt.preventDefault();
    feedback.classList.add("modal-show");
     
    if (nameStorage && emailStorage) {
        feedbackName.value = nameStorage;
        email.value = emailStorage;
        letter.focus(); 
    } else {
        feedbackName.focus(); 
    }          
});

close.addEventListener("click", function(evt) {
    evt.preventDefault();
    feedback.classList.remove("modal-show");
    feedback.classList.remove("modal-error");            
});

form.addEventListener("submit", function(evt) {            
    if (!feedbackName.value || !email.value) {
        evt.preventDefault();
        feedback.classList.remove("modal-error");
        feedback.offsetWidth = feedback.offsetWidth; 
        feedback.classList.add("modal-error");   
    } else {
        if (isStorageSupport) {
            localStorage.setItem("feedbackName", feedbackName.value);
            localStorage.setItem("email", email.value);
        }                
    }
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
         evt.preventDefault();
       
        if (feedback.classList.contains("modal-show")) {
            feedback.classList.remove("modal-show");
            feedback.classList.remove("modal-error");      
        } 
    }
});
