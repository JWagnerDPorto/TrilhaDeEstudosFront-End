// Criação de um objeto chamado 'carro' com algumas propriedades iniciais.
let carro = {
    portas: 2,
    portamalas: "200l",
    motor: "2.0"
}

// Exibição do objeto 'carro' no console antes de adicionar propriedades adicionais.
console.log(carro);

// Criação de um objeto chamado 'adicionais' com características extras para o carro.
let adicionais = {
    tetosolar: true,
    arcondicionado: true
}

// Mescla as propriedades do objeto 'adicionais' no objeto 'carro'.
Object.assign(carro, adicionais);

// Exibição do objeto 'carro' no console após a mesclagem das propriedades adicionais.
console.log(carro);


// O código cria dois objetos (carro e adicionais), e em seguida, mescla as propriedades do objeto adicionais no objeto carro usando Object.assign(). O resultado final é exibido no console.