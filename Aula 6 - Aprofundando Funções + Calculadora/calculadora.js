// Criando Calculadora
// Métodos necessários:
// 1) Number() - para converter valores em números;
// 2) Prompt() - para registrar entrada de usuários;
// 3) Alert() - para mostrar mensagem ao usuário;
// 4) Template Strings - para usar strings junto com expressões;

function calculadora(){
    const operacao = (prompt('Escolha uma operação:\n 1- Soma(+):\n 2- Subtração(-):\n 3- multiplicação(*):\n 4- divisão real(/):\n 5- divisão inteira(%)\n 6- potenciação(**):\n'));
    console.log(operacao);


    let n1 = Number(prompt('Insira o primeiro valor: '))
    let n2 = Number(prompt('Insira o segundo valor: '))
    let resultado;

    // Verificador de Parâmetros
    if (!n1 || !n2) {
        alert('Erro! Parâmetros inválidos!')
        calculadora();
    }

    function soma(){
        resultado = n1 + n2;
        alert(`A soma entre ${n1} e ${n2} é igual a ${resultado}`)
        novaOperacao();
    }
    function subtracao(){
        resultado = n1 - n2;
        alert(` A subtração entre ${n1} e ${n2} é igual a ${resultado}`)
        novaOperacao();
    }
    function multiplicacao(){
        resultado = n1 * n2;
        alert(`A multiplicação entre ${n1} e ${n2} é igual a ${resultado}`)
        novaOperacao();
    }
    function divisaoReal(){
        resultado = n1 / n2;
        alert(`A divisão entre ${n1} e ${n2} é igual a ${resultado}`)
        novaOperacao();
    }
    function divisaoInteira(){
        resultado = n1 % n2;
        alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`)
        novaOperacao();
    }
    function potenciacao(){
        resultado = n1 ** n2;
        alert(`${n1} elevado a ${n2} é igual a ${resultado}`)
        novaOperacao();
    }

    // 
    function novaOperacao(){
        let opcao = prompt('Deseja fazer uma nova operação?\n')

        if(opcao == 's') {
            calculadora();
        } else if(opcao == 'n') {
            alert('Até mais!')
        } else {
            alert("Ops! :-(\nDigite uma opção válida! s/n")
            novaOperacao();
        }
    }

    // Verificador de operação
    if(operacao == '+') {
        soma();
    } else if(operacao == '-') {
        subtracao();
    } else if(operacao == '*') {
        multiplicacao();
    } else if(operacao == '/') {
        divisaoReal();
    } else if(operacao == '%') {
        divisaoInteira();
    } else if(operacao == '**') {
        potenciacao();
    }
}

calculadora();