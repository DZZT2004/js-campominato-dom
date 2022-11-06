// Creazione html
var head = document.getElementById("header");
var titolo = document.createElement("h1");
var bottone = document.createElement("button");
var contenitore = document.getElementById("container");
var foot = document.getElementById("footer");
titolo.innerHTML = "<img href='logo.png'>Campo Minato";
bottone.innerHTML = "Play";
foot.innerHTML = "Made with &hearts; by <a href='#'>Boolean</a>"
bottone.classList.add("play");
head.appendChild(titolo);
head.appendChild(bottone);

// Aggiunge evenet listener al bottone
bottone.addEventListener("click", () =>{
    var quadrato = document.createElement("div");
    quadrato.classList.add("quadrato");
    contenitore.appendChild(quadrato);
    for (let index = 1; index < 101; index++) {
        let pezzo = document.createElement("div");
        pezzo.innerHTML = index;
        pezzo.classList.add("pezzo");
        pezzo.addEventListener("click", () =>{
            pezzo.style.backgroundColor = 'azure';
            console.log(index);
        })
        quadrato.appendChild(pezzo);
    }
    bottone.disabled = true;
})