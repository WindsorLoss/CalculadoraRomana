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
        
        console.log('sm', sm)
        if((sm < -3999) || (sm > 3999)){
            return alert(`O resultado não pode ser escrito em romano. o Resultado é: ${sm}`)
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

    const numString = num > 0 ? num.toString() : (num * (-1)).toString()
    const numStringReversa = numString.split('').reverse().join('')
    
    const unidade = unidadeRomana(numStringReversa[0])
    const dezena = dezenaRomana(numStringReversa[1])
    const centena = centenaRomana(numStringReversa[2])
    const milhar = milharRomana(numStringReversa[3])
    
    let total = `${milhar}${centena}${dezena}${unidade}`

    return num > 0 ? total : `- ${total}`

}

function unidadeRomana(unidade = 0){

    let smRomana = ''

    if (unidade >= 1 && unidade <= 3)    
        smRomana += 'I'.repeat(unidade)

    if (unidade == 4)
        smRomana += 'IV'

    if (unidade == 5)
        smRomana += 'V'

    if (unidade > 5 && unidade < 9)
        smRomana += 'V' + 'I'.repeat(unidade - 5)

    if (unidade == 9)
        smRomana += 'IX'

    return smRomana
}

function dezenaRomana(dezena = 0){

    let smRomana = ''

    if (dezena >= 1 && dezena <= 3)    
        smRomana += 'X'.repeat(dezena)

    if (dezena == 4)
        smRomana += 'XL'

    if (dezena == 5)
        smRomana += 'L'

    if (dezena > 5 && dezena < 9)
        smRomana += 'L' + 'X'.repeat(dezena - 5)

    if (dezena == 9)
        smRomana += 'XC'

    return smRomana
}

function centenaRomana(centena = 0){

    let smRomana = ''

    if (centena >= 1 && centena <= 3)    
        smRomana += 'C'.repeat(centena)

    if (centena == 4)
        smRomana += 'CD'

    if (centena == 5)
        smRomana += 'D'

    if (centena > 5 && centena < 9)
        smRomana += 'D' + 'C'.repeat(centena - 5)

    if (centena == 9)
        smRomana += 'CM'

    return smRomana
}

function milharRomana(milhar = 0){
    return 'M'.repeat(milhar)
}