//Exercicio 2 
const pares = (x, y) => {
    for (var i = x; i <= y; i++) {
      if (i % 2 === 0) {
        console.log(i);
      }
    }
  };
  pares(1, 20);