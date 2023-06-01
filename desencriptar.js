    function desencriptar() {
      const numencInput = document.getElementById("numenc");
      const resultadoP = document.getElementById("resultado");
      const numenc = numencInput.value.trim();

      const negar = /^[0-9]\d{3}$/;

      if (negar.test(numenc)) {
        let n1 = Math.floor((numenc / 1000) % 10);
        let n2 = Math.floor((numenc / 100) % 10);
        let n3 = Math.floor((numenc / 10) % 10);
        let n4 = numenc % 10;

        n1 = (n1 + 3) % 10;
        n2 = (n2 + 3) % 10;
        n3 = (n3 + 3) % 10;
        n4 = (n4 + 3) % 10;

        let num1 = n1;
        n1 = n3;
        n3 = num1;
        let num2 = n2;
        n2 = n4;
        n4 = num2;
    
        resultadoP.textContent = "El número desencriptado es: " + n1 + n2 + n3 + n4;
      } else {
        resultadoP.textContent = "Ingrese un número de 4 cifras.";
      }
    }



      // Requisitos: - Que no se puedan introducir simbolos, ni letras. */
  //                 - Que se pueda introducir unicamente un numero de 4 cifras*/
  //                 - Que se puedan introducir numeros con 0's a la izquierda*/
























