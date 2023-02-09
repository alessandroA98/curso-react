import { useState } from 'react'

function ListRender() {
    const [list] = useState(["matheus", "pedro", "josias"])

    const [users, setUsers] = useState([
        { id: 1, name: "alessandro", age: 24 },
        { id: 2, name: "valdirene", age: 53 },
        { id: 3, name: "adiel", age: 27 }
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }

    return (
        <div>
            
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} - {user.age} </li>
                ))}
            </ul>
            <button onClick={deleteRandom}>
                delete
            </button>

        </div>
    )
}

export default ListRender