const navBar = document.getElementById("nav-bar");

const ul = document.createElement("ul");

// Define URLs of navigation bar
const urls = [
    "../home/index.html", "../education/index.html", "../skills/index.html",
    "../projects/index.html", /*"../hobbies/index.html",*/ "../contact/index.html",
];

// Define text of navigation bar
const textLabels = [
    "Home", "Education", "Skills",
    "Projects", /*"Hobbies",*/ "Contact",
];

// Style the list
ul.className = "flex gap-8 px-6 py-4 bg-primary";

// Loop through each of the URLs and text labels to populate the navigation bar
for (let i = 0; i < urls.length; i++)
{
    const li = document.createElement("li");
    const a = document.createElement("a");

    // Set the link URL to the current URL and the link text to the current text
    a.href = urls[i];
    a.textContent = textLabels[i];

    // Style the links to look like buttons
    a.className = "px-4 py-2 rounded-lg bg-primary text-textbase font-medium transition duration-200 hover:bg-secondary";

    // Add the current button to the ul
    li.appendChild(a);
    ul.appendChild(li);
}

// Add the ul to the navbar
navBar.appendChild(ul);