import React, { useContext } from 'react'
import { CounterContext } from './App'

function ComponentA() {
    const Counter = useContext(CounterContext);
    return (
        <div>
            Component A
            <button onClick={() => Counter.countDispatch('increment')}>Increment</button>
            <button onClick={() => Counter.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => Counter.countDispatch('reset')}> Reset</button>
        </div>
    )
}

export default ComponentA
