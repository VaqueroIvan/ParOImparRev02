//Written by: Ivan Vaquero;
//Title: Clase2Carla;
//Declarations of variables;
let btnEnviar = <HTMLButtonElement>document.getElementById("btnEnviar");
let dato1 = <HTMLInputElement>document.getElementById("dato1");

let valor1: number = 0;
//Main***********************************************************************
btnEnviar.addEventListener("click", () => {
  //It runs when you press submit button.
  valor1 = Number(dato1.value);
  console.log("El numero ingresado es: " + valor1);

  if (valor1 % 2 === 0 && (valor1 || 0) && valor1 >= 0) {
    alert("El número " + valor1 + " es par");
  } else {
    if ((valor1 || 0) && valor1 >= 0) {
      alert("El número " + valor1 + " es impar");
    }
  }
  if (valor1 === 0) {
    alert("El número " + valor1 + " es cero");
  }
  if (valor1 < 0) {
    alert("El número ingresado no puede ser negativo");
  }
});
//End***************************************************************
