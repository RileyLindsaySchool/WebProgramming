console.log("Now running...");

let usersTable = document.getElementById("users-table");

json = fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.forEach(user => {
            let tr = document.createElement("tr");
            let id = document.createElement("td");
            let username = document.createElement("td");
            let email = document.createElement("td");
            id.innerHTML = user.id;
            username.innerHTML = user.username;
            email.innerHTML = user.email;
            tr.appendChild(id);
            tr.appendChild(username);
            tr.appendChild(email);
            usersTable.appendChild(tr);
        });
    });

console.log("Still running...");