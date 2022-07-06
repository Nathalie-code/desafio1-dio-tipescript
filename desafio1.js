/* Como podemos rodar isso em um arquivo .ts sem causar erros? 

let employee = {};
employee.code = 10;
employee.name = "John"; */


//resposta sugerida

const pessoa: {code: number, nome: string} = {
    code: 10,
    nome: 'john'
}