import { useState } from "react"

const ShowUserName = (name/*geralmente chamado de props. e na hr de retornar iria ficar {props.name} */) => {
    const [userName] = useState('alessandro')
    const name3 = "ale"
  return (
    <div>
        <h2>o nome do usuario metodo1 {name.name}</h2>
        <h2>o nome do usuario metodo2 {userName}</h2>
        <h2>o nome do usuario metodo3 {name3}</h2>
    </div>
  )
}

export default ShowUserName