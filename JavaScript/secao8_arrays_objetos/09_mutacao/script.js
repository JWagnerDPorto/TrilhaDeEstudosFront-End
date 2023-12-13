// Criação de pessoas com nomes diferentes
let pessoa1 = {
    nome: "Wagner"
}

let pessoa3 = {
    nome: "Matheus"
}

// pessoa2 agora "aponta" para o mesmo objeto que pessoa1
let pessoa2 = pessoa1;

// Verificação de igualdade entre as pessoas
console.log(pessoa1 == pessoa2); // true (ambos referenciam o mesmo objeto)
console.log(pessoa1 == pessoa3); // false (objetos diferentes)
console.log(pessoa2 == pessoa3); // false (objetos diferentes)

// Exibição do nome da pessoa1
console.log(pessoa1.nome); // "Wagner"

// Modificação do nome através de pessoa2 (que referencia o mesmo objeto que pessoa1)
pessoa2.nome = "Pedro";

// Exibição do nome atualizado da pessoa1
console.log(pessoa1.nome); // "Pedro" (a mudança é refletida)

// Modificação do nome através de pessoa1 (que referencia o mesmo objeto que pessoa2)
pessoa1.nome = "Maria";

// Exibição do nome atualizado da pessoa2
console.log(pessoa2.nome); // "Maria" (a mudança é refletida)

