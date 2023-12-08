function tipoDeDado(dado) {

    if (typeof dado === "string") {
        console.log("Este dado é uma string");
    } else if (typeof dado === "number") {
        console.log("Este dado é uma number");
    } else if (typeof dado === "boolean") {
        console.log("Este dado é uma boolean");
    }
}

tipoDeDado(true);
tipoDeDado(37);
tipoDeDado("teste");
