import {useState} from 'react'

function ManageData() {
const someData =10;

const [number, setNumber] = useState(10)
    return (
    <div>
        <p>valor:{someData}</p>
        
        <button onClick={() => setNumber(15)} >{number}</button>




    </div>
  )
}

export default ManageData