import {render} from 'react-dom'
import React, {useState} from 'react'
import './index.css'

function useIncrement (initial, step) {
    const [count, setCount] = useState(initial)
    const increment = () => {
        setCount(c => c + step)
    }
    return [count, increment];
}

function Compteur () {
   const [count, increment] = useIncrement(0, 2)

   return <div>
        <button onClick={increment}>Incrémenter {count}</button>
   </div>
}

render(
    <div>
        <Compteur />
    </div>,
    document.getElementById('app')
)
