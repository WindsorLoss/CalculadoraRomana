export function calculaResultado(input) {
    const algarismos = input.split(' ').filter(e => e !== '+' && e !== '-')
    const numeros = retornaNumero(algarismos) 

    if(numeros){

        const operadores = input.split(' ').filter(e => e === '+' || e === '-')
    
        let sm = numeros[0]
    
        for(let i = 0; i < operadores.length; i++) {
    
            if(operadores[i] === '+') sm += numeros[i + 1]
            else sm -= numeros[i + 1]
        }
    
        return retornaRomano(sm)
    } else return alert('Um valor inserido não condiz com a estrutura de algarismos romanos. Tente novamente.')
}

function retornaNumero(valores){
    
    let numbers = []
    
    for(let i = 0; i < valores.length; i++) {
        
        let currentValue = 0

        for(let j = 0; j < valores[i].length; j++){
            
            const itemAtual = valores[i][j]
            const itemAnterior = valores[i][j - 1]
            const itemSeguinte = valores[i][j + 1]

            if(itemAtual === 'M') {

                if(itemAnterior !== 'C'){

                    if(itemAnterior !== 'D' && itemAnterior !== 'L' && itemAnterior !== 'X' && itemAnterior !== 'V' && itemAnterior !== 'I') {
                        currentValue += 1000
                    } else return NaN

                } else if(itemAnterior === 'C') {
                    currentValue += 900 - 100
                }
            }

            if(itemAtual === 'D') {

                if(itemAnterior !== 'C'){

                    if(itemAnterior !== 'D' && itemAnterior !== 'L' && itemAnterior !== 'X' && itemAnterior !== 'V' && itemAnterior !== 'I') {
                        currentValue += 500
                    } else return NaN

                } else if(itemAnterior === 'C') {
                    currentValue += 400 - 100
                }
            }

            if(itemAtual === 'C') {

                if(itemAnterior !== 'X'){

                    if(itemAnterior !== 'L' && itemAnterior !== 'V' && itemAnterior !== 'I') {
                        currentValue += 100
                    } else return NaN

                } else if(itemAnterior === 'X') {
                    currentValue += 90 - 10
                }
            }

            if(itemAtual === 'L') {

                if(itemAnterior !== 'X'){

                    if(itemAnterior !== 'L' && itemAnterior !== 'V' && itemAnterior !== 'I') {
                        currentValue += 50
                    } else return NaN

                } else if(itemAnterior === 'X') {
                    currentValue += 40 - 10
                }
            }

            if(itemAtual === 'X') {

                if(itemAnterior !== 'I'){

                    if(itemAnterior !== 'V') {
                        currentValue += 10
                    } else return NaN

                } else if(itemAnterior === 'I') {
                    currentValue += 9 - 1
                }
            }

            if(itemAtual === 'V') {

                if(itemAnterior !== 'I'){
                    if(itemAnterior !== 'I' && itemAnterior !== 'V'){
                        currentValue += 5
                    } else return NaN
                
                } else if(itemAnterior === 'I') {
                    currentValue += 4 - 1
                }
            }

            if(itemAtual === 'I') {
                
                if(itemAnterior === 'I' && (itemSeguinte === 'X' || itemSeguinte === 'V' || itemSeguinte === 'L' || itemSeguinte === 'C' || itemSeguinte === 'D' || itemSeguinte === 'M')){
                    return NaN
                } else currentValue += 1
            }

        }

        numbers.push(currentValue)
    }

    return numbers
}

function retornaRomano(num) {

  
    let numString = num > 0 ? num.toString() : (num * (-1)).toString()
    let tamanho = numString.length
    let smRomana = ''

    if((num < -3999) || (num > 3999))
        return alert(`O resultado não pode ser escrito em romano. o Resultado é: ${num}`)

    else
    {

        if(tamanho == 4)
        {
            smRomana += 'M'.repeat(numString[0])
    
            // CASA DAS CENTENAS
    
            if (numString[1] >= 1 && numString[1] <= 3)    
                smRomana += 'C'.repeat(numString[1])
    
            if (numString[1] == 4)
                smRomana += 'CD'
    
            if (numString[1] == 5)
                smRomana += 'D'
    
            if (numString[1] > 5 && numString[1] < 9)
                smRomana += 'D' + 'C'.repeat(numString[1] - 5)
    
            if (numString[1] == 9)
                smRomana += 'CM'
    
            // CASA DAS DEZENAS
    
            if (numString[2] >= 1 && numString[2] <= 3)    
                smRomana += 'X'.repeat(numString[2])
    
            if (numString[2] == 4)
                smRomana += 'XL'
    
            if (numString[2] == 5)
                smRomana += 'L'
    
            if (numString[2] > 5 && numString[2] < 9)
                smRomana += 'L' + 'X'.repeat(numString[2] - 5)
    
            if (numString[2] == 9)
                smRomana += 'XC'
    
            // CASA DAS UNIDADES
    
            if (numString[3] >= 1 && numString[3] <= 3)    
                smRomana += 'I'.repeat(numString[3])
    
            if (numString[3] == 4)
                smRomana += 'IV'
    
            if (numString[3] == 5)
                smRomana += 'V'
    
            if (numString[3] > 5 && numString[3] < 9)
                smRomana += 'V' + 'I'.repeat(numString[3] - 5)
    
            if (numString[3] == 9)
                smRomana += 'IX'    
        }
    
    /* ----------------------------------------------------------------------------------------------------------- */
    
        else if (tamanho == 3)
        {
            // CASA DAS CENTENAS
    
            if (numString[0] >= 1 && numString[0] <= 3)    
                smRomana += 'C'.repeat(numString[0])
    
            if (numString[0] == 4)
                smRomana += 'CD'
    
            if (numString[0] == 5)
                smRomana += 'D'
    
            if (numString[0] > 5 && numString[0] < 9)
                smRomana += 'D' + 'C'.repeat(numString[0] - 5)
    
            if (numString[0] == 9)
                smRomana += 'CM'
    
            // CASA DAS DEZENAS
    
            if (numString[1] >= 1 && numString[1] <= 3)    
                smRomana += 'X'.repeat(numString[1])
    
            if (numString[1] == 4)
                smRomana += 'XL'
    
            if (numString[1] == 5)
                smRomana += 'L'
    
            if (numString[1] > 5 && numString[1] < 9)
                smRomana += 'L' + 'X'.repeat(numString[1] - 5)
    
            if (numString[1] == 9)
                smRomana += 'XC'
    
            // CASA DAS UNIDADES
    
            if (numString[2] >= 1 && numString[2] <= 3)    
                smRomana += 'I'.repeat(numString[2])
    
            if (numString[2] == 4)
                smRomana += 'IV'
    
            if (numString[2] == 5)
                smRomana += 'V'
    
            if (numString[2] > 5 && numString[2] < 9)
                smRomana += 'V' + 'I'.repeat(numString[2] - 5)
    
            if (numString[2] == 9)
                smRomana += 'IX'    
        }
    
    /*-----------------------------------------------------------------------------------------------------*/ 
    
        else if (tamanho == 2)
        {
            if (numString[0] >= 1 && numString[0] <= 3)    
                smRomana += 'X'.repeat(numString[0])
    
            if (numString[0] == 4)
                smRomana += 'XL'
    
            if (numString[0] == 5)
                smRomana += 'L'
    
            if (numString[0] > 5 && numString[0] < 9)
                smRomana += 'L' + 'X'.repeat(numString[0] - 5)
    
            if (numString[0] == 9)
                smRomana += 'XC'
    
            // CASA DAS UNIDADES
    
            if (numString[1] >= 1 && numString[1] <= 3)    
                smRomana += 'I'.repeat(numString[1])
    
            if (numString[1] == 4)
                smRomana += 'IV'
    
            if (numString[1] == 5)
                smRomana += 'V'
    
            if (numString[1] > 5 && numString[1] < 9)
                smRomana += 'V' + 'I'.repeat(numString[1] - 5)
    
            if (numString[1] == 9)
                smRomana += 'IX'
        }
    
    /* ------------------------------------------------------------------------------------------------------------------------- */
    
        else
        {
            // CASA DAS UNIDADES
    
            if (numString[0] >= 1 && numString[0] <= 3)    
                smRomana += 'I'.repeat(numString[0])
    
            if (numString[0] == 4)
                smRomana += 'IV'
    
            if (numString[0] == 5)
                smRomana += 'V'
    
            if (numString[0] > 5 && numString[0] < 9)
                smRomana += 'V' + 'I'.repeat(numString[0] - 5)
    
            if (numString[0] == 9)
                smRomana += 'IX'
        }

    }

    return num > 0 ? smRomana : `- ${smRomana}`
    

}