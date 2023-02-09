import './App.css';
import Challeng from './components/Challeng';

function App() {
  const cars = [
    { id: 1, brand: 'fiat', cor: 'red' },
    { id: 2, brand: 'hyunday', cor: 'roxo' },
    { id: 3, brand: 'ferrari', cor: 'preto' },
    { id: 4, brand: 'fiat', cor: 'red' },
    { id: 5, brand: 'hyunday', cor: 'roxo' },
    { id: 6, brand: 'ferrari', cor: 'preto' },
  ]
  return (
    <div className="App">
      <h1 className='challenge'>Desafio carros</h1>
      {cars.map(car => (
        <Challeng cars={car.id} >
          <h2>Marca: {car.brand}</h2>
          <p>Cor:{car.cor}</p>
        </Challeng>

      ))}
    </div>
  );
}

export default App;
