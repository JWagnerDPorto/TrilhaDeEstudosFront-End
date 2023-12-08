
function checarTamanhoTexto (texto) {
    if(texto.length > 10) {
        console.log("Texto muito longo");
    } else {
        console.log("Texto dentro do limite");
    }
}

checarTamanhoTexto("teste");
checarTamanhoTexto("Vamos testar se funciona");
checarTamanhoTexto("Menor de 10");