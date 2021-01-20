import React, { useReducer } from 'react';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';

export const CounterContext = React.createContext();

/**
 * component A
 * Component B -> Component D
 * Component C -> Component E -> Component F
 */

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

function App() {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <CounterContext.Provider value={{ countState: count, countDispatch: dispatch }}>

            <div className="App">
                Count - {count}
                <ComponentA />
                <ComponentB />
                <ComponentC />
            </div>
        </CounterContext.Provider>
    )
}

export default App;