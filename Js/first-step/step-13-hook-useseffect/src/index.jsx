import {render} from 'react-dom'
import React, {useState, useEffect} from 'react'


function useIncrement (initial, step) {
    const [count, setCount] = useState(initial)
    const increment = () => {
        setCount(c => c + step)
    }
    return [count, increment];
}


function Compteur () {
   const [count, increment] = useIncrement(0, 2)

    useEffect(() =>{
        const timer =  window.setInterval(()=> {
            console.log('hello')
            increment()
        },1000)
        return function () {
            clearInterval(timer)
        }
    }, [])

    useEffect(() => {
        document.title = "Compteur" +count
    }, [count])

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

window.setTimeout(() => {
    render(
        <div>Bonjour</div>,
        document.getElementById('app')
    )
    
}, 2000)
