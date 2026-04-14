const footer = document.getElementById("footer");

const copyright = document.createElement("p");
copyright.innerHTML = "&copy; 2026 Riley L. Lindsay";

const email = document.createElement("p");
email.innerHTML = `<a href="mailto:rlindsay@atu.edu">rlindsay@atu.edu</a>`;

footer.appendChild(copyright);
footer.appendChild(email);

footer.className = "bg-text-color text-primary text-center p-4";