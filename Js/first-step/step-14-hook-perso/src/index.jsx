import { render } from 'react-dom'
import React, { useEffect, useState } from 'react'
import { func } from 'prop-types'

function useIncrement(initialValue = 0, step = 1) {
    const [count, setCount] = useState(initialValue)

    const increment = function () {
        setCount(c => c + step)
    }

    return [
        count,
        increment
    ]
}

function useAutoIncrement(initialValue = 0, step = 1) {
    const [count, increment] = useIncrement(initialValue, step)
    useEffect(function () {
        const timer = window.setInterval(function () {
            increment()
        }, 1000)

        return function () {
            clearInterval(timer)
        }
    }, [])
    return count
}

function useToggle(initialValue = true) {
    const [value, setValue] = useState(initialValue)

    const toggle = function () {
        setValue(v => !v)
    }
    return [value, toggle]
}

function Compteur() {
    const count = useAutoIncrement(0, 10)

    return <button>Incrémenter {count}</button>
}

function App() {
    const [compteurVisible, toggleCompteur] = useToggle(true)

    return (
        <div>
            <input type='checkbox' onChange={toggleCompteur} checked={compteurVisible} />
            <br />
            {compteurVisible && <Compteur />}
        </div>
    )
}

render(
    <div>
        <App />
    </div>,
    document.getElementById('app')
)
