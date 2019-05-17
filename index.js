function catification() {
    fetch("https://aws.random.cat/meow")
        .then(response => {
            return response.json();
        })
        .then(result => {
            const catContainer = document.getElementById("catContainer");
            const catInfoBox = document.createElement("section");
            const catImage = document.createElement("img");
            catImage.src = result.file;
            catInfoBox.append(catImage);
            catContainer.prepend(catInfoBox);
        });
}

document.getElementById("catification").onclick = catification;
