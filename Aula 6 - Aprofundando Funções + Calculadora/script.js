// Aula 6 - Aprofundando em função

// Funções Declarativas - é o tipo mais comum como nos exemplos já vistos.
// É obrigatório declarar o nome da função

/*function nomeDaFuncao() {
    Instrução;
}

nomeDaFuncao();*/

// Expressões de Funções
// São funções atribuidas à expressões. A nomeação das funções por expressão
// é opcional:

// Ex1:
/*var funcao = function ano() {
    console.log('Estamos em 2022')
}
funcao();// informamos o nome da variável p/ chamar a função*/

//Ex2:
/*var funcao = function() {
    console.log('Estamos em 2022')
}
funcao();*/

// Arrow Function - são funções de expressão de sintaxe curta. Arrow functions
// sempre serão anônimas, e portanto não podem ser nomeadas.
// Deve ser declaradas com parâmetros "()", seguido de "=>" e depois chaves "{}"

//Ex:
/*var funcao =()=>{
    console.log('Isso é uma Arrow Function')
}

funcao();*/