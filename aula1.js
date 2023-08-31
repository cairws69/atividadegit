import PromptSync from "prompt-sync"
import chalk from 'chalk'

const prompt = PromptSync()

console.log(chalk.inverse("Calculo de salario!!!\n"))

const sal = Number(prompt(chalk.blue("Salario antigo: ")))

let aumento = Number(prompt(chalk.yellow("Aumento em %: ")))

aumento = aumento/100

const salnovo = sal * (1+aumento)

console.log(chalk.cyan(`Salario antigo: ${sal}\n`))

console.log(chalk.red(`Salario novo: ${salnovo}\n`))



console.log(chalk.inverse("Calculo da idade!!!\n"))




function calculaIdade(anoAniver, mesAniver, diaAniver){
    const d = new Date
    const anoAtual = d.getFullYear()
    const mesAtual = d.getMonth() +1
    const diaAtual = d.getDate()
    let idade

    if(anoAtual - anoAniver < 0){
        console.log(chalk.bgRed("ERRO! Data de nascimento maior que a data atual!"))
    } else if (mesAniver > 12 || diaAniver > 31){
        console.log(chalk.bgRed("ERRO! Dia ou mês de Nascimento inválidos!"))
    } else if(mesAniver > mesAtual){
        idade = anoAtual - anoAniver -1
    } else if(mesAniver < mesAtual){
        idade = anoAtual - anoAniver 
    } else if(mesAniver == mesAtual){
        if(diaAtual < diaAniver){
            idade = anoAtual - anoAniver -1
        } else if (diaAtual > diaAniver){
            idade = anoAtual - anoAniver
        } else{
            idade = anoAtual - anoAniver
            console.log(chalk.bgYellow("Parabéns!! Hoje é o seu aniversário!!"))
        }
    }

    console.log(chalk.blueBright(`Você tem ${idade} anos!`))
}

const anoNasc = Number(prompt(chalk.magenta("Digite seu ano de nascimento: ")))
const mesNasc = Number(prompt(chalk.green("Digite seu mês de nascimento: ")))
const diaNasc = Number(prompt(chalk.red("Digite seu dia de nascimento: ")))

calculaIdade(anoNasc,mesNasc,diaNasc)


