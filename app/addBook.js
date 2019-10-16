function get() {
    let book = {
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        description: document.getElementById('description').value,
    }
    fetch('http://localhost:3000/books', {

            method: 'POST',
            body: JSON.stringify(book),
            headers: {

                "Content-Type": "application/json"
            },
            credentials: "same-origin"
        })



        .then(res => {
            alert("dodałeś książkę")
            book = {

                title: "",
                author: "",
                description: "",
            }
        })
        .catch(err => {
            console.log(err)
        })
}

function countTitle(idName) {

    if (idName == "title") {
        let title = document.getElementById("title").value.split('').length
        document.getElementById('spantitle').innerHTML = title
    } else if (idName == "author") {
        let title = document.getElementById("author").value.split('').length
        document.getElementById('spanauthor').innerHTML = title
    } else if (idName == "description") {
        let title = document.getElementById("description").value.split('').length
        document.getElementById('spandescription').innerHTML = title
    }
}