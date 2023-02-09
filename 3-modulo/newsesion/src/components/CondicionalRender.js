import { useState } from "react"

function CondicionalRender() {
    const [x] = useState(true);

    const [name, setName] = useState("alessandro")

    return (
        <div>
            <h3>isso sera exibido</h3>
            {x && <h3>se x for true, sim</h3>}
        <button onClick={() => name == "alessandro"? setName("joao"): setName('alessandro')} >alterar nome</button>

            {name === "joao" ? 
            (
                <div> o nome é joao </div>
            ) 
            : 
            (
                <div>
nome nao encontrado
                </div>
            )
            }
        </div>
    )
}
export default CondicionalRender;