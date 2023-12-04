function lembrarSoma(x) {
    return function (y) {
        return x + y;
    }
}

let soma1 = lembrarSoma(2);

console.log(soma1(5));

let soma2 = lembrarSoma(5);

console.log(soma2(7));

function contador(i) {
    let cont = i;
    let somarContador = function() {
        console.log(cont);
        cont ++;
    }
    return somarContador
}

let meuContador1 = contador(1);
meuContador();
meuContador();
meuContador();

let meuContador2 = contador(4);
meuContador();
meuContador();
meuContador();