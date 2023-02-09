import { useState } from 'react'
import './App.css';
import Mycomponents from './components/Mycomponents';
import Title from './components/Title';

function App() {
  const [redTitle, setRedTitle] = useState(false)
  return (
    <div className="App">
      <Mycomponents />
      <button onClick={() => redTitle? setRedTitle(false):setRedTitle(true)} >clique aqui para alterar o state e consequentemente a cor do css</button>
     <h2 className={redTitle ? 'red-title': 'title'} >ola</h2>
     <Title />
    </div>
  );
}

export default App;
