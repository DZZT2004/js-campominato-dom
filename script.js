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
    var punti = 0;
    const mine = [];
    mina_pestata = false;
    var punteggio = document.createElement("p");
    var stringa;
    quadrato.classList.add("quadrato");
    contenitore.appendChild(quadrato);
    // Creazione array
    var arr = [];

    for (var i = 1; i <= 100; i++) {
        arr.push(true);
    }
    console.log(arr);
    // Creazione mine
    for (let index = 0; index < 16; index++) {
        mine.push(Math.floor(Math.random() * 100) + 1);
    }
    console.log(mine);

    for (let index = 1; index < 101; index++) {
        let pezzo = document.createElement("div");
        pezzo.innerHTML = index;
        pezzo.classList.add("pezzo");
        if(mine.includes(index)){
            pezzo.addEventListener("click", () =>{
                if(!mina_pestata){
                    pezzo.style.backgroundColor = 'red';
                    console.log("Hai calpestato una mina, partita finita!");
                    stringa = " Mi dispiace, hai perso, il tuo punteggio è:" + punti;
                    punteggio.innerHTML = stringa;
                    quadrato.appendChild(punteggio);
                    mina_pestata = true;
                }
            })
        }else{
            pezzo.addEventListener("click", () =>{
                if(arr[index-1] && !mina_pestata){
                    pezzo.style.backgroundColor = 'azure';
                    console.log(index);
                    punti++;
                    arr[index-1] = false;
                }
                if(punti == 84){
                    punteggio = document.createElement("p");
                    stringa = "Congratulazioni, hai vinto!";
                    punteggio.innerHTML = stringa;
                    quadrato.appendChild(punteggio);
                }
            })
        }
        quadrato.appendChild(pezzo);
    }
    bottone.disabled = true;
})