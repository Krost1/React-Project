let n = 0 

function numberFormat(n){
    return n.toString().padStart(2, '0')
}

function render() {
    const items = [
        'Tache 1',
        'Tache 2',
        'Tache 3'
    ]
    const lis = items.map((item, k) => <li key = {k}>{item}</li>)
    const tillte = <React.Fragment><h1 className="title" id={"title" + n}>
        {/* Nombre impaire */}
        {/* Bonjour les gens <span>{n % 2 ? numberFormat(n) : null}</span><br></br>*/}
        Bonjour les gens <span>{n}</span>
    </h1>
    <ul>{lis}</ul>
    </React.Fragment> 

    ReactDOM.render(tillte, document.querySelector('#app'));

}

render()

window.setInterval(() => {
    n++
    render()
}, 1000)