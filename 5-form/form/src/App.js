
import './App.css';
import Myform from './components/Myform';



function App() {
  return (
    <div className="App">
      <h3>Forms</h3>
      <Myform user={{ name: "matheus", email: 'mathes@email.com', bio: "sou um advogado", role:"admin" }} />
    </div>
  );
}

export default App;
