(function initialize(){
    document.querySelector("#sign-up").addEventListener("submit", submitSignupForm);
})();

function submitSignupForm(event){
    event.preventDefault();
    const formData = new FormData(event.target);

    console.log(formData.get("email"));

    event.target.reset();
}
