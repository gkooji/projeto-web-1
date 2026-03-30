// declarações e variaveis
// var, let e const

var nome="Fiap";
console.log(nome);

var nome="Teste";
console.log(nome);

if(true){
    let apelido="fiapinho";
   console.log(apelido);
}

const taxaJuros=0.05;
console.log(taxaJuros)
//taxaJuros=1.5;

var exemplo="ola-dev-var";
console.log(typeof exemplo)
let exemplo1="ola-dev-let";
console.log(exemplo1)
const exemplo2="ola-dev-const";
console.log(exemplo2)

let exemplo3=10;
console.log(typeof exemplo3)

let exemplo4=true;
console.log(typeof exemplo4);

let exemplo5={nome1:"teste"}
console.log(typeof exemplo5)

let exemplo6=["java", "c#", "php"]
console.log(typeof exemplo6)

// valor undefined
let exemplo7;
console.log(exemplo7)

// valor null

let exemplo8 =null;
console.log(exemplo8)

// operadores aritmeticos

const valor1=10;
const valor2=20;

console.log(valor1 + valor2);
console.log(valor1 - valor2);
console.log(valor1 * valor2);
console.log(valor1 / valor2);

// operadores logicos
// = atribuição
// && = E (todas as condi)
// || = OU (uma das condição tem que ser verdadeira)


console.log(valor1 <valor2);
console.log(valor1 > 10 && valor2 <10);
console.log(valor2 < 100 || valor1 >10);
console.log(valor1 == valor2);
console.log(valor2 === valor1);

// ex1

const v=3;
const p=4;

const precofinal = p - v;
console.log("o preço final com desconto é", precofinal);

// ex2

let a=20;
let b=10;

let comparar= (a==20 && b>= 10);

console.log("o resultado é",comparar)

// ex3

const usuariologado=20
const tempotoken= 10

const transação = (usuariologado ===20 && tempotoken >=10)
console.log("transação autorizada",transação)
