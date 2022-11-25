// Tipos Primitivos

//Boolean - retorna true ou false
// O método 'typeof()' retorna o tipo de dado da variável.

/* var vOuF = false;
console.log(vOuF); // retorna o valor 'false'
console.log(typeof(vOuF)); // Retorna o tipo 'boolean' */

// Number

/* var numb = 3;
console.log(numb); // retorna o valor 3
console.log(typeof(numb)); // retorna o tipo 'number' */

// String

/* var nome = 'Vernan';
console.log(nome); // retorna 'Vernan'
console.log(typeof(nome)); // retorna o tipo 'string' */

// Function

/* var funcao = function() {}
console.log(typeof(funcao)); // retorna o tipo 'function' */

// Declarando variáveis VAR, LET e CONST
// VAR: escopo global e local. Será tratado como 'null' se não lhe atribuírem algum valor.
// LET: recomendado p/ escopo local. Ela pode ser acessada somente dentro do escopo q/ a declarou e
// Será tratado como 'null' se não lhe atribuírem algum valor.
// CONST: de escopo local e constante, ou seja, o valor não pode ser alterado. È obrigatório atribuir
// um valor a ela na sua declaração

/* var texto1;
var texto2 = 'marques'; // Escopo global
console.log(texto1); // retorna undefined
console.log(texto2); // retorna 'marques' */

/* let meuNome = 'vernan';
meuNome = 'conceição'; // a variável 'meuNome' mudou do valor 'vernan' p/ 'conceição'
console.log(meuNome); // retorna 'conceição' */

/*const idade = 26;
idade = 23;
console.log(idade); // retorna um erro pois uma variável constante não pode ser alterada
*/

// Global Scope and e Local Scope
// Scope in JavaScript defines the limitation and visibility of a block of code 

/*var globalScope = "escopo global";
console.log(globalScope);

function localScope(){ 
    let localScopeInside = "escopo local";
    console.log(localScopeInside);
}
localScope();*/

// Atribuição, Comparação e Comparação Indêntica

// Atribuição - atribui o valor 'vernan' à variável nome.
/* var nome = 'vernan';

// Comparação - compara um valor se for verdade ou falso.
// Caso verdadeiro - true, caso falso - false
var comparar = '0'=='0';
console.log(comparar);

// Comparação Idêntica - Compara se o valor e o tipo de dado são idênticos.
// Se lê "o tipo "0" tem o tipo idêntico a 0"?
// Caso verdadeiro - true, caso falso - false
var compararIgual = "0" === 0;
console.log(compararIgual); */

// Operadores Aritméticos
/* var adicao = 1 + 2;
var subtracao = 2 - 1;
var multiplicacao = 2 * 5;
var divisaoReal = 10 / 2;
var divisaoInteira = 10 % 2; // will return the remainder of the division
var potenciacao = 2 ** 3;

console.log(adicao);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisaoReal);
console.log(divisaoInteira);
console.log(potenciacao); */

// Operadores relacionais - consultam a relação entre os valores.
/* var maiorQue = 5 > 2
var menorQue = 5 < 2
var maiorOuIgualA = 5 >= 2
var menorOuIgualA = 5 <= 2
var igualA = 5 == 2
var diferenteDe = 5 != 2
console.log(maiorQue)
console.log(menorQue)
console.log(maiorOuIgualA)
console.log(menorOuIgualA)
console.log(igualA)
console.log(diferenteDe) */

// Operadores Lógicos - consultam valóres lógicos
// && - "E" todos os valores devem ser verdadeiro p/ que o retorno seja verdade
var e = true && false
console.log(e)

// || - "OU" qualquer um pode ser verdadeiro p/ condição retornar verdade
var ou = true || false
console.log(ou)

// ! - "não" inverte o valor verdadeiro p/ falso e vice-versa
var nao = !true
console.log(nao)