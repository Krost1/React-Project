let n = 0 

function render() {
    const tillte = React.createElement('h1', {},
        'yo tout le monde',
        React.createElement('span', {}, n)
    )

    ReactDOM.render(tillte, document.querySelector('#app'));

}

render()

window.setInterval(() => {
    n++
    render()
}, 1000)

