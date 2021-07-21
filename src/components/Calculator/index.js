import { useEffect, useState } from 'react'
import { calculaResultado } from '../../functions/CalculaResultado'
import { Calculadora, Container } from './styles'

export function Calculator() {

    const [displayValue, setDisplayValue] = useState('')
    const [valueStringArr, setValueStringArr] = useState([])

    function handleButtonPress(value) {
        setDisplayValue(displayValue + value)
    }

    function clearDisplay() {
        setDisplayValue('')
    }

    function handleOperators(operator){
        setDisplayValue(displayValue + ` ${operator} `)
    }

    function handleEqual(){
        const resultado = calculaResultado(displayValue)
        setDisplayValue(resultado)

    }

    return (
        <Container>

            <Calculadora>
                    <div className='display'>
                        <p className={displayValue ? '' : 'placeholder'}>
                            {displayValue || "Digite um valor"}
                        </p>
                    </div>

                    <div className='wrapper'>

                        <div className='grid'>  
                            <button onClick={() => handleButtonPress('M')}>M</button>            
                            <button onClick={() => handleButtonPress('D')}>D</button>            
                            <button onClick={() => handleButtonPress('C')}>C</button>            
                            <button onClick={() => handleButtonPress('L')}>L</button>            
                            <button onClick={() => handleButtonPress('X')}>X</button>            
                            <button onClick={() => handleButtonPress('V')}>V</button>            
                            <button onClick={() => handleButtonPress('I')}>I</button>            
                            <button className='function' onClick={() => handleOperators('+')}>+</button>            
                            <button className='function' onClick={() => handleOperators('-')}>-</button>            
                        </div>

                        <div className='rest'>
                            <button className='function bigger' onClick={clearDisplay}>AC</button>            
                            <button className='function bigger' onClick={handleEqual}>=</button>  
                        </div>
                    </div>
            </Calculadora>

        </Container>
    )
}