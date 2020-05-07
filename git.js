function searchBtn() {
    let userName = document.getElementById("inputArea").value;
    const showUrl = (name) => `https://api.github.com/users/${name}`
    const url = showUrl(userName);
    fetch(url)
        .then(res => res.json())
        .then(userData => {
            // console.log(userData);
            let table = document.getElementById("table");
            table.innerHTML = ""
            displayTable(userData);
        })
}

function displayTable(userData){
    let table = document.getElementById("table");
    let tableRow = '<tr> <th>Name</th> <th>Profile Picture</th> <th>followers</th> <th>Location</th> <th>Repositories</th> </tr>';

    table.innerHTML += tableRow;

    tableRow = `<tr> <td>${userData.name}</td> <td><img src= ${userData.avatar_url} style="height: 100px; width: 100px;"></td> <td>${userData.followers}</td> <td>${userData.location}</td> <td>${userData.public_repos}</td> </tr>`;

    table.innerHTML += tableRow;
}