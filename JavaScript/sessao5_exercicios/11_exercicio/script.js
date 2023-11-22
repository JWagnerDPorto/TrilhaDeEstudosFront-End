let idade = prompt("Qual a sua idade?");
let CNH = prompt("Possui CNH? (Sim ou Não)");

if (idade >= 18 && CNH == "Não") {
    console.log("Você não pode dirigir.");
} else if (idade > 18 && CNH == "Sim") {
    console.log("Você pode dirigir.");
} else {
    console.log("Você não pode dirigir.");
}

