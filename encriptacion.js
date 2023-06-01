function encriptar() {
    const numeroInput = document.getElementById("numero");
    const resultadoP = document.getElementById("resultado");
    const numero = numeroInput.value.trim();

    const cero = /^[0-9]\d{3}$/;

    if (cero.test(numero)) {
      let n1 = Math.floor((numero / 1000) % 10);
      let n2 = Math.floor((numero / 100) % 10);
      let n3 = Math.floor((numero / 10) % 10);
      let n4 = numero % 10;
  
      n1 = (n1 + 7) % 10;
      n2 = (n2 + 7) % 10;
      n3 = (n3 + 7) % 10;
      n4 = (n4 + 7) % 10;
  
      let num1 = n1;
      n1 = n3;
      n3 = num1;
      let num2 = n2;
      n2 = n4;
      n4 = num2;
  
      resultadoP.textContent = "El número transformado es: " + n1 + n2 + n3 + n4;
    }
    else {
      resultadoP.textContent = "El número debe tener 4 cifras.";
    }
  }
  

  // Requisitos: - Que no se puedan introducir simbolos, ni letras. */
  //             - Que se pueda introducir unicamente un numero de 4 cifras*/
  //             - Que se puedan introducir numeros con 0's a la izquierda*/