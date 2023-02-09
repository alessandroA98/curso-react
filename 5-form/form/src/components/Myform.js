import { useState } from 'react'
import './Myform.css'

const Myform = ({ user }) => {
    // 6 - controlled inputs

    //3 - gerenciamento de dados
    const [name, setName] = useState(user ? user.name : 'seu nome')
    const [email, setEmail] = useState(user ? user.email : 'seu email')
    const [bio, setBio] = useState(user?user.bio : "preencher")
    const [role, setRole] = useState(user? user.role : "preencher")

    const handleName = (m) => {
        setName(m.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('enviando formulario')
        console.log(`${name}, ${email}, ${bio}, ${role}`)
        // - 7 limpar form  
        setName('')
        setEmail('')
        setBio('')
    }

    return (
        <div>
            {/* 5 - envio de form */}
            <form onSubmit={handleSubmit}>
                {/*1-criacao de form*/}
                <div>

                    <label htmlFor="name">Nome: </label>
                    <input type="text" name="name" placeholder='digite seu nome' onChange={handleName} value={name} />
                    <p>{name}</p>
                </div>
                {/* 2 - label envolvendo o input */}
                <label >
                    <span>E-mail</span>
                    {/* 4 - simplificacao de manipulacao */}
                    <input type="email" name='email' placeholder='digite o seu email' onChange={(e) => setEmail(e.target.value)} value={email} />
                </label>
                <p>{email}</p>

                {/* TEXTE AREA */}
                <label >
                    <span>Bio:</span>
                    <textarea name="bio" placeholder='descricao do usuario' onChange={(e) => setBio(e.target.value)} value={bio}> </textarea>
                </label>
                {/* 9- select */}
                <label>
                    <span>Funcao no sistema</span>
               <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                <option value="user">Usuário</option>
                <option value="editor">Editor</option>
                <option value="admin">Administrador</option>
               </select>
               
                </label>

                <input type="submit" value='Enviar' />
            </form>
        </div>
    )
}

export default Myform