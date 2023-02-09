const Events = () => {
const handleMyEvent = (e) =>{
    console.log(e)
}
const renderSomething = (x) => {
    if(x){
        return <h1>renderizar isso</h1>
    } else {
        return <h1> renderizar aquilo</h1>
    }
}
    return (
        <div>
            <div>
                <button onClick={handleMyEvent} >
                    clique aqui
                </button>
            </div>
            <div>
                <button onClick={() => console.log('clicou')}>clique aqui tambem</button>
                <button onClick={() =>{
                    if(true){
                        console.log('isso nao deveria existir')
                    }
                }}>clique aqui, por favor!</button>
                {renderSomething(true)}
                {renderSomething(false)}
            </div>
        </div>
    )
}

export default Events