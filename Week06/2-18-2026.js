let button = document.getElementById("changeTextBtn");

button.addEventListener("click", function() {
    let heading = document.getElementById("title");
    heading.textContent = "DOM is Working!";
    heading.style.color = "blue";
    heading.style.backgroundColor = "lightyellow";
    document.body.style.backgroundColor = "lavender";
})