let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(nums.slice(4, 5));   // Retorna um novo array contendo o elemento no índice 4: [4]
console.log(nums.slice(4, 6));   // Retorna um novo array contendo os elementos nos índices 4 e 5: [4, 5]
console.log(nums.slice(2));      // Retorna um novo array começando do índice 2 até o final: [2, 3, 4, 5, 6, 7, 8, 9]
console.log(nums.slice(-2));     // Retorna um novo array contendo os dois últimos elementos: [8, 9]
console.log(nums.slice(3, -2));  // Retorna um novo array começando do índice 3 até o segundo elemento a partir do final: [3, 4, 5, 6, 7]
console.log(nums.slice(3, 8));   // Retorna um novo array contendo os elementos nos índices 3 a 7: [3, 4, 5, 6, 7]

