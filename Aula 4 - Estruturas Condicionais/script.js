// ESTRUTURAS CONDICIONAIS

// IF - O comando IF é executado se a condição for verdade.

/*var jogador1 = prompt("First Player Score: ")

if (jogador1 > 0) {
    alert('Player 1 scored a point!')
}*/

// IF ELSE - O comando IF é executado se a condição for verdadeira.

// Caso seja falso, será executado comando else
/*var jogador1 = prompt("First Player Score: ")
var jogador2 = prompt("Second player's score: ")
var placar

if (jogador1 > 0) {
    alert('Player 1 scored a point!')
}
else{
    alert('Nobody scored!')
}*/

// ELSE IF - CAso haja mais de uma condição.

/*var jogador1 = prompt("First Player Score: ")
var jogador2 = prompt("Second player's score: ")
var placar

if (jogador1 > 0) {
    alert('Player 1 scored a point!')
}
else if(jogador2 > 0) {
    alert('Player 2 scored a point!')
}
else {
    alert('Nobody scored!')
}*/

// ANINHAMENTO DE IF's

/*var jogador1 = prompt("First Player Score: ")
var jogador2 = prompt("Second player's score: ")
var placar

if (jogador1 != -1) {
    if (jogador1 > 0) {
        alert('Player 1 scored a point!')
    }
    else if(jogador2 > 0) {
        alert('Player 2 scored a point!')
    }
    else {
        alert('Nobody scored!')
    }
}*/

// IF TERNÀRIO - Faz a verificação em uma única linha.
// Sintaxe: [condição]?[instrução 1]:[instrução 2]

/*var jogador1 = prompt("First Player Score: ")
var jogador2 = prompt("Second player's score: ")
var placar

    jogador1 != -1 && jogador2 != -1 ? console.log('The players are valid') : console.log('Players are invalid')
    if (jogador1 > 0) {
        console.log('Player 1 scored a point!')
    }
    else if(jogador2 > 0) {
        console.log('Player 2 scored a point!')
    }
    else {
        console.log('Nobody scored!')
    }*/

// VERIFICAÇÂO

/*var jogador1 = prompt("First Player Score: ")
var jogador2 = prompt("Second player's score: ")
var placar

// IF TERNÀRIO
jogador1 != -1 && jogador2 != -1 ? console.log('The players are valid') : console.log('Players are invalid')

// usando IF
if (jogador1 > 0 && jogador2 == 0) {
    console.log('Player 1 scored a point!')
    placar = jogador1 > jogador2
}
// usando ELSE IF
else if(jogador2 > 0 && jogador1 == 0) {
    console.log('Player 2 scored a point!')
    placar = jogador2 > jogador1
}
// usando ELSE IF
else {
    console.log('Nobody scored!')
}*/

// SWICH/CASE - Quando o usuário tem que selecionar apenas uma das
// opcões disponíveis

/*var player1 = prompt("First Player Score: ")
var player2 = prompt("Second player's score: ")
var placar

// IF TERNÀRIO
player1 != -1 && player2 != -1 ? console.log('The players are valid') : console.log('Players are invalid')

// usando IF
if (player1 > 0 && player2 == 0) {
    console.log('Player 1 scored a point!')
    placar = player1 > player2
}
// usando ELSE IF
else if(player2 > 0 && player1 == 0) {
    console.log('Player 2 scored a point!')
    placar = player2 > player1
}
// usando ELSE IF
else {
    console.log('No one scored!')
}
// Usando SWICH CASE
switch (placar) {
    case placar = player1 > player2:
        console.log('Player 1 won :-)')
        break;
    case placar = player2 > player1:
        console.log('Player 2 won :-)')

    default:
        console.log('Game Over!')
        break;
}*/

// ESTRUTURAS DE REPETIÇÂO
// São estruturas condicionais que repetem uma instrução até atingir determinada condição.
// FOR, FOR/IN, FOR/OF, WHILE, DO/WHILE.

/*let array = ['var1', 'var2', 'var3', 'var4', 'var5']
let object = { propriedade1: 'var1', propriedade2: 'var2', propriedade3: 'var3', propriedade4: 'var4', propriedade5: 'var5'}*/

// FOR - Executa a instrução até que a condição seja falsa.
 /*for (let indice = 0; indice < array.length; indice++){
    console.log(indice)
 }*/

 // FOR/IN - Funciona como uma repetição a partir de uma propriedade.
 /*for(let i in array){
    console.log(i)//imprimirá os valor em string 0, 1, 2, 3, 4
 }
 // for/in com objeto
 for(i in object){
    console.log(i)// Imprimirá cada propriedade
 }*/

 // FOR/OF - Funciona como uma repetição a partir de um valor.
/*for(i of array){
    console.log(i)// imprimeirá os valores do array
}

// For/Of com objeto - não funciona com objetos pois as propriedades variam
// diferente do índice em um array q sempre serão números inteiros
// Se quiser pegar o valor mesmo assim, tem q passar a propriedade dentro da condição
for (i of object.propriedade1){
    console.log(i)// imprimirá cada letra em uma linha
}*/

// WHILE - Executa a instrução enquanto a condição for verdade. A verificação é feita antes da execução.
/*var a = 0
 while(a < 10){
    a++;
    console.log(a)
 }*/

 // DO/WHILE - Executa uma instrução até que a condição seja falsa. A verificação é feita depois da execução.
 /*var a = 0
 do {
    a++;
    console.log(a)
 } 
 while(a < 10)*/ 