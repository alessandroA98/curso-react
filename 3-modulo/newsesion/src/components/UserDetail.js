//  function UserDetail({name, age, job}) {
    
//     return (
//         <div>
//             <h2>{name}</h2>
//             <p>Idade: {age} </p>
//             <p>Profissão: {job} </p>
//             {idade >= 18 ? (<p>Pode tirar habilitação</p>) : (<p>Não pode tirar habilitação</p>)}
//         </div>
//     )
// }

// export default UserDetail
import React from 'react'

function UserDetail({nomes}) {
    
    return (
        <div>
            {nomes.map((nome) => (
            <div key={nome.id}> {nome.name} - {nome.profissao} {nome.idade}
            {nome.idade > 18? ("pode tirar habilitaçãp") : ("não pode tirar habilitaçã0")}
             </div>
            ))}
        </div>
    )
}

export default UserDetail