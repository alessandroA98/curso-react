import logo from './logo.svg';
import './App.css';
import img from './assets/img1.jpg'
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import CondicionalRender from './components/CondicionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import { useState } from 'react';
import Message from './components/Message';
import ChangeMessageStage from './components/ChangeMessageStage';
import UserDetail from './components/UserDetail';

function App() {

  const cars = [
    { id: 1, marca: 'ferrari', km: 0, color: 'amarela', newCar: true },
    { id: 2, marca: 'ferrari', km: 55, color: 'verde', newCar: false },
    { id: 3, marca: 'fiat', km: 0, color: 'preto', newCar: true },
    { id: 4, marca: 'fiat', km: 55, color: 'marrom', newCar: false },
  ];
  function showMessage() {
    console.log('evento do component pai!')
  }

  const [message, setMessage] = useState('')

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  const nomes = [
    { name: 'alessandro', profissao: 'programador', idade: 23, id: 1 },
    { name: 'valdirene', profissao: 'domestica', idade: 53, id: 2 },
    { name: 'maneirinhoo', profissao: 'guarda', idade: 1, id: 3 },
    { name: 'lindinha', profissao: 'autonoma', idade: 3, id: 4 },
  ]

  return (
    <div className="App">
      <h1>react avancado</h1>
      <div>

        {/* img em public */}
        <img src="/2.jpg" width={200} height={200} alt="imagem com detalhes roxo" />
      </div>
      <div>

        {/* img em assets */}
        <img src={img} width={200} height={200} alt="imagem com detalhes roxo" />
      </div>
      <ManageData />
      <ListRender />
      <CondicionalRender />
      {/*props */}
      <ShowUserName name="matheus" />
      {/* destructing props*/}
      <CarDetails brand="hyunday" km={10000} color="preto" ne={false} />
      <CarDetails brand="hyu" km={0} color="preto" ne={true} />
      <CarDetails brand="day" km={10555} color="preto" ne={false} />
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.marca} km={car.km} color={car.color} ne={car.newCar} />
      ))}
      <Fragment propFragment='test' />
      {/* Children */}
      <Container myValue='testing'>
        <p>e este é o conteudo</p>
      </Container>
      {/*Executar uma funcao */}
      <ExecuteFunction myFunction={showMessage} />
      { /* state lift */}
      <Message msg={message} />
      <ChangeMessageStage handleMessage={handleMessage} />
      {/* Desafio */}
      <UserDetail nomes={nomes}/>
      {/* {nomes.map(nome => {
      <UserDetail 
      key={nome.id}
      nomes={nome.name}
      profissao = {nome.profissao}
      idade={nome.idade}
      />
      })} */}

    </div>
  )
}

export default App;
