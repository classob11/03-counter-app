/* rafcp */
import React, {cloneElement, useState} from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({value}) => {


    const [couter, setCounter] = useState(value);


  
    const handleAdd = () =>{
        //setCounter(couter+1);
        setCounter(() => couter+1 );
    }

    const menosUno = () =>{
        //setCounter(couter+1);
        setCounter(() => couter-1 );
    }

    const reset = () =>{
        setCounter(value);
    }

    return (
    <>
        <h1>CounterApp</h1>
        <h2> { couter } </h2>

        <button onClick={handleAdd}> 
        +1 
        </button>
        <button onClick={reset}> 
        Reset
        </button>
        <button onClick={menosUno}> 
        -1 
        </button>
    </>
  )
}

CounterApp.propTypes = {
    value : PropTypes.number
}

export default CounterApp