// creo array di squadre con punti e falli a 0
const squadre = [
    { nome: "Napoli", punti: 0, falliSubiti: 0 },
    { nome: "Inter", punti: 0, falliSubiti: 0 },
    { nome: "Milan", punti: 0, falliSubiti: 0 },
    { nome: "Roma", punti: 0, falliSubiti: 0 },
    { nome: "Juventus", punti: 0, falliSubiti: 0 }
];

//genero numeri random per punti fatti e falli subiti
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < squadre.length; i++) {
    // punti tra 10 e 90
    squadre[i].punti = getRandomNum(10, 90);  
    // falli tra 50 e 200
    squadre[i].falliSubiti = getRandomNum(50, 200);   
}

// array vuoto
const squadreFalli = [];  

// inserisco nel ciclo for solo i nomi delle squadre e i falli subiti
for (let i = 0; i < squadre.length; i++) {
    squadreFalli.push({
        nome: squadre[i].nome,
        falliSubiti: squadre[i].falliSubiti
    });
}
