import { render } from 'react-dom'
import React, { useMemo, useEffect, useState, useCallback } from 'react'

function wait(duration) {
    const t = Date.now()
    while(true){
        if(Date.now() - t > duration){
            return true
        }
    }
}

const Button = React.memo(function ({onClick}) {
    console.log('render')
    return <button onClick={onClick}> Mon button</button>
})

function App(){
   const [count, setCount] = useState(0)

   const handleClick = useMemo(function () {
    return function () {
        alert('Bonjour')
    }
   }, []) 

   const handleClick2 = useCallback(() =>{
    alert('Bonjour' + count)
   }, [count])


   return (
    <div>
        <Button onClick={handleClick2}/>
        <button onClick={() => setCount(c => c+1)}>Incrémentation {count}</button>
    </div>
   )
}


render(
    <App />,
    document.getElementById('app')
);