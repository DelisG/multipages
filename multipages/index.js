// function changeModo() {
//   const cores = document.getElementById("nav");
//   const logo = document.getElementById("logo");
//   const fundo = document.getElementById("fundo");
//   if (cores.style.backgroundColor === "yellow") {
//     cores.style.backgroundColor = "black";
//     logo.style.color = "white";
//     fundo.style.backgroundColor = "black";

//     // frase.textContent = "Ops, quebrou, Clique para trocar";
//   } else if (cores.style.backgroundColor === "black") {
//     cores.style.backgroundColor = "white";
//     logo.style.color = "black";
//     fundo.style.backgroundColor = "white";
//   } else {
//     cores.style.backgroundColor = "yellow";
//     fundo.style.backgroundColor = "grey";
//   }
// }
// função mudar cor
const checkbox = document.getElementById("check");
checkbox.addEventListener("change", function () {
  const nav = document.getElementById("nav");
  const logoMarca = document.getElementById("logo");
  const fundoBackGround = document.getElementById("fundo");
  const frases = document.getElementById("frase");
  if (!this.checked) {
    nav.style.backgroundColor = "black";
    logoMarca.style.color = "white";
    fundoBackGround.style.backgroundColor = "black";
    frases.textContent = "Voltar a Cor Padrão";
    frases.style.color = "white";
  } else {
    nav.style.backgroundColor = "yellow";
    logoMarca.style.color = "black";
    fundoBackGround.style.backgroundColor = "grey";
    frases.textContent = "";
    frases.style.color = "grey";
  }
});
// fim mudar cor
// função somar
function somarNumeros() {
  let numero1 = parseInt(document.getElementById("n1").value);
  let numero2 = parseInt(document.getElementById("n2").value);
  let resultado = numero1 + numero2;

  document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}
function limpar() {
  document.getElementById("n1").value = "";
  document.getElementById("n2").value = "";
  document.getElementById("resultado").innerHTML = "";
}
// fim soma
// função imc
function imc() {
  let peso = parseFloat(document.getElementById("n1").value);
  let altura = parseFloat(document.getElementById("n2").value);
  let resultado = peso / (altura * altura);
  let status;

  if (resultado < 18.5) {
    status = "A baixo do Peso";
  } else if (resultado < 25) {
    status = "Peso Ideal";
  } else if (resultado < 30) {
    status = "Pré-Obesidade";
  } else if (resultado < 35) {
    status = "Obesidade Grau 1";
  } else if (resultado < 40) {
    status = "Obesidade Grau 2";
  } else if (resultado < 900) {
    status = "Obesidade Grau 2";
  } else {
    status = "Insira Um Valor Para Calcular o";
  }

  document.getElementById(
    "resultado"
  ).innerHTML = `${status}, imc ${resultado.toFixed(2)}`;
}
function limpar() {
  document.getElementById("n1").value = "";
  document.getElementById("n2").value = "";
  document.getElementById("resultado").innerHTML = "";
}
// fim imc
//  calculadora
function insert(num) {
  var numero = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = numero + num;
}
function clean() {
  document.getElementById("resultado").innerHTML = "";
}
function back() {
  var resultado = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = resultado.substring(
    0,
    resultado.length - 1
  );
}
function calcular() {
  var resultado = document.getElementById("resultado").innerHTML;
  if (resultado) {
    document.getElementById("resultado").innerHTML = eval(resultado);
  } else {
    document.getElementById("resultado").innerHTML = "";
  }
}
// fim Calculadora
// Função lanchonete
function imc() {
  let peso = parseFloat(document.getElementById("n1").value);
  let altura = parseFloat(document.getElementById("n2").value);
  let resultado = peso / (altura * altura);
  let status;

  if (resultado < 18.5) {
    status = "A baixo do Peso";
  } else if (resultado < 25) {
    status = "Peso Ideal";
  } else if (resultado < 30) {
    status = "Pré-Obesidade";
  } else if (resultado < 35) {
    status = "Obesidade Grau 1";
  } else if (resultado < 40) {
    status = "Obesidade Grau 2";
  } else if (resultado < 900) {
    status = "Obesidade Grau 2";
  } else {
    status = "Insira Um Valor Para Calcular o";
  }

  document.getElementById(
    "resultado"
  ).innerHTML = `${status}, imc ${resultado.toFixed(2)}`;
}

function limpar() {
  document.getElementById("n1").value = "";
  document.getElementById("n2").value = "";
  document.getElementById("resultado").innerHTML = "";
}

// fim lanchonete
