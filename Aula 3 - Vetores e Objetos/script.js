// O que são Vetores ou Arrays

// Declarando um Array
/*let array = ['string', 1, true]
console.log(array)*/

// Array com vários tipos de dados
/*let array = ['string', 1, true, ['array1'], ['array2'], ['array3']]
console.log(array)*/

// Acessando o valor de um array. Informamos o indice desse valor.
/*let array = ['string', 1, true, ['array1'], ['array2'], ['array3']]
console.log(array[2])*/

// Métodos de um Array

// forEach() - Itera um array, ou seja percorre todo array utilizando o laço FOR
/*let array = ['string', 1, true, ['array1'], ['array2'], ['array3']]
console.log(array[2])
array.forEach(function(item, index){console.log(item, index)});*/

// push() - Adiciona novo item ao final do array.
/*let array = ['string', 1, true, ['array1'], ['array2'], ['array3']]
array.push('novo item')
console.log(array)*/

// pop() - Remove o último item do array
/*let array = ['string', 1, true, ['array1'], ['array2'], ['array3']]
array.pop()
console.log(array)*/

// shift() - Remove o primeiro item do array
/*let array = ['string', 1, true, ['array 1'], ['array 2'], ['array 3']]
array.shift()
console.log(array)*/

// unshift() - Adiciona um item no início do array;
/*let array = ['string', 1, true, ['array1'], ['array2'], ['array3']]
array.unshift('item novo - inicio')
console.log(array)*/

// indexOf() - Retorna o índice de algum valor;
/*let array = ['string', 1, true, ['array1'], ['array2'], ['array3']]
console.log(array.indexOf(true))*/

// splice() - Remove ou substitui um item pelo índice;
/*let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']]
array.splice(0, 3) // Apagou os itens de indices 0 até o 3
console.log(array)*/

// slice() - Retorna uma parte de um array existente;
/*let array = ['string', 1, true, ['array1'], ['array2'], ['array3']]
let novoArray = array.slice(0, 3)
console.log(novoArray) // Retornou os tres primeiros indices*/

// Objetos - São dados que possuem propriedades e valores que definem suas cacteristicas.
// Deve ser declaradas entre chaves "{}". Ex: Uma xicara tem propriedades: cor, tamanho, peso.
// Tem função "tomar café". Cada propriedade tem seus valores azul, pequeno, 200g.

// Declaração de Objetos
/*var xicara = {
    cor: 'azul',
    tamanho: 'p',
    peso: '200g',
    funcao: tomarCafe()
}*/

// Acessando as propriedades do objeto
/*let object = { 
    String: 'vernan', 
    number: 26, 
    boolean: false, 
    array: ["valor1"], 
    carro: {cor: 'amarelo', marca: 'gol'}
}
console.log(object.number)*/

// Acessa objeto dentro do objeto
/*let object = { 
    String: 'vernan', 
    number: 26, 
    boolean: false, 
    array: ["valor1"], 
    carro: {cor: 'amarelo', marca: 'gol'}
}
console.log(object.carro)*/

// Acessa um array dentro do objeto
/*let object = { 
    String: 'vernan', 
    number: 26, 
    boolean: false, 
    array: ["valor1"], 
    carro: {cor: 'amarelo', marca: 'gol'}
}
console.log(object.array)*/

// Desestruturando um Objeto
/*let object = { 
    string: 'vernan', 
    number: 26, 
    boolean: false, 
    array: ["valor1"], 
    carro: {cor: 'amarelo', marca: 'gol'}
}

// Associa o valor 'string'(propriedade do objeto 'object') à variável string
var string = object.string 
console.log(string)

// A variável arrayInterno recebe como valor a propriedade 'array' do objeto 'object'.
var arrayInterno = object.array
console.log(arrayInterno)

// Desestruturação a partir de chaves {}. Dentro das chaves ínformamos as propriedades
// q serão retornadas
var {string, boolean, carro} = object
console.log(string,boolean,carro)*/