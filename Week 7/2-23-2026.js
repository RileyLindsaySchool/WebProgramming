let form = document.getElementById("taskForm");
form.action = "https://www.google.com";
form.addEventListener("submit", function (event) {
    // event.preventDefault();
    console.log(event);
    console.log("Form Submitted");
});