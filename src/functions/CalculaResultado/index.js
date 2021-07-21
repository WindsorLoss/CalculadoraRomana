export function CalculaResultado(valores, total) {
    return retornaNumero(valores)
}

function retornaNumero(valores){
    let numbers = []

    for(let i = 0; i < valores.length; i++) {

        let currentValue = 0

        for(let j = 0; j < valores[i].length; j++){

            if(valores[i][j] === 'M') {

                if(valores[i][j - 1] !== 'C'){

                    if(valores[i][j - 1] !== 'D' && valores[i][j - 1] !== 'L' && valores[i][j - 1] !== 'X' && valores[i][j - 1] !== 'V' && valores[i][j - 1] !== 'I') {
                        currentValue += 1000
                    } else return NaN

                } else if(valores[i][j - 1] === 'C') {
                    currentValue += 900
                }
            }

            if(valores[i][j] === 'D') {

                if(valores[i][j - 1] !== 'C'){

                    if(valores[i][j - 1] !== 'D' && valores[i][j - 1] !== 'L' && valores[i][j - 1] !== 'X' && valores[i][j - 1] !== 'V' && valores[i][j - 1] !== 'I') {
                        currentValue += 500
                    } else return NaN

                } else if(valores[i][j - 1] === 'C') {
                    currentValue += 400
                }
            }

            if(valores[i][j] === 'C') {

                if(valores[i][j - 1] !== 'X'){

                    if(valores[i][j - 1] !== 'L' && valores[i][j - 1] !== 'V' && valores[i][j - 1] !== 'I') {
                        currentValue += 100
                    } else return NaN

                } else if(valores[i][j - 1] === 'X') {
                    currentValue += 90
                }
            }

            if(valores[i][j] === 'L') {

                if(valores[i][j - 1] !== 'X'){

                    if(valores[i][j - 1] !== 'L' && valores[i][j - 1] !== 'V' && valores[i][j - 1] !== 'I') {
                        currentValue += 50
                    } else return NaN

                } else if(valores[i][j - 1] === 'X') {
                    currentValue += 40
                }
            }

            if(valores[i][j] === 'X') {

                if(valores[i][j - 1] !== 'I'){

                    if(valores[i][j - 1] !== 'V') {
                        currentValue += 10
                    } else return NaN

                } else if(valores[i][j - 1] === 'I') {
                    currentValue += 9
                }
            }

            if(valores[i][j] === 'V') {

                if(valores[i][j - 1] !== 'I' && valores[i][j - 1] !== 'V'){
                    currentValue += 5
                } else if(valores[i][j - 1] === 'I') {
                    currentValue += 4
                }
            }

            if(valores[i][j] === 'I') currentValue += 1

        }

        numbers.push(currentValue)
    }

    return numbers
}