const navBar = document.getElementById("nav-bar");

const ul = document.createElement("ul");

const urls = [
    "../home/index.html", "../education/index.html", "../skills/index.html",
    "../projects/index.html", "../hobbies/index.html", "../contact/index.html",
];

const textLabels = [
    "Home", "Education", "Skills",
    "Projects", "Hobbies", "Contact",
];

for (let i = 0; i < urls.length; i++)
{
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = urls[i];
    a.textContent = textLabels[i];
    li.appendChild(a);
    ul.appendChild(li);
}

navBar.appendChild(ul);