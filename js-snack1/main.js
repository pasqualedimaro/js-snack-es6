// array di object di bici
const bici = [
    { nome: "Bianchi Oltre XR4", peso: 7 },
    { nome: "Specialized Tarmac", peso: 6 },
    { nome: "Cannondale SuperSix", peso: 7 },
    { nome: "Trek Emonda", peso: 8 },
    { nome: "Pinarello Dogma", peso: 9 }
];

// trovo bici più leggera con ciclo for
let biciLeggera = bici[0]; 

for (let i = 1; i < bici.length; i++) {
    if (bici[i].peso < biciLeggera.peso) {
        biciLeggera = bici[i];
    }
}

// stampo
console.log(`La bici più leggera è ${biciLeggera.nome} con un peso di ${biciLeggera.peso} kg`)