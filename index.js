//variables
let mainMenu;

//functions
function showMenu() {
    do {
        mainMenu = prompt(`Digite o número da operação desejada:
        1- Adição
        2- Subtração
        3- Multiplicação
        4- Divisão
        5- Sair do programa`
        );
        showResults();
    } while (mainMenu !== "5");
};

function addition() {
    const augend = parseFloat(prompt('Digite o número da primeira parcela:'));
    const addend = parseFloat(prompt('Digite o número da segunda parcela:'));
    const sum = augend + addend;
    return sum;
};

function subtraction() {
    const minuend = parseFloat(prompt('Digite o número do minuendo:'));
    const subtrahend = parseFloat(prompt('Digite o número do subtraendo:'));
    const difference = minuend - subtrahend;
    return difference;
};

function multiplication() {
    const multiplicand = parseFloat(prompt('Digite o número do multiplicando:'));
    const multiplier = parseFloat(prompt('Digite o número do multiplicador:'));
    const product = multiplicand * multiplier;
    return product;
};

function division() {
    const dividend = parseFloat(prompt('Digite o número do dividendo:'));
    const divisor = parseFloat(prompt('Digite o número do divisor:'));
    const quotient = dividend / divisor;
    return quotient;
}

function showResults() {
    switch (mainMenu) {
        case "1":
            const savedAdditionResults = addition();
            alert(`A soma das parcelas é ${savedAdditionResults}`);
            break;
        case "2":
            const savedSubtractionResults = subtraction();
            alert(`A diferença entre o minuendo e o subtraendo é ${savedSubtractionResults}`);
            break;
        case "3":
            const savedMultiplicationResults = multiplication();
            alert(`O produto do multiplicando pelo multiplicador é ${savedMultiplicationResults}`);
            break;
        case "4":
            const savedDivisionResults = division();
            alert(`O quociente do dividendo e divisor é ${savedDivisionResults}`);
            break;
        case "5":
            alert("Saindo...");
            break;
        default:
            alert("Digite apenas o número de uma das opções!");
    };
};
