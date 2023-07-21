//Fazer um menu de exercícios utilizando exemplos dado em aula (6 exercícios dentro de funções, e incluir nome ou algo de sua preferência para criar um objeto e manipulá-lo)
import promptSync from "prompt-sync"
import { exercicio} from "./moduloExercicio1.js"
//let resposta;
  //  console.log(/teste") solo para testar que da error si lo hago dentro de la estructura do while
    
let prompt = promptSync;
let resposta;
do {
    console.log("Bem vindo ao menu de exercicios, escolha um exercicio")
    let resposta = prompt("Digite um numero de 1 a 6, para seledcionar um exercicio, ou 'sair' para finalizar: ")
    switch (resposta){
        case "1":
        //chamar exercicio  1
        console.log("voce escolheu o exercicio 1")
        exercicio()

        break;

        case "2":
            //chamar exercicio 2
            console.log("voce escoleu o exercicio 2")

        default:
            console.log("voce nao escolheu nenhum exercicio")

    }
    
} while (resposta == sair);