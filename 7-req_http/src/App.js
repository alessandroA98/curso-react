import { useState, useEffect } from 'react'
import './App.css';

const url = "http://localhost:3000/products"

function App() {
  const [products, setProducts] = useState([])
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  //1- resgatando dados
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url)

      const data = await res.json()

      setProducts(data)

    }
    fetchData()
  }, [])

  // 2 - adicao de produtos
  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name,
      price,
    }
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(product),
    })
  }


  return (
    <div className="App">
      <h2>Lista de produtos</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - R$: {product.price}
          </li>
        ))}
      </ul>
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label >Nome:
            <input type='text' value={name} name='name' onChange={(e) => setName(e.target.value)}></input>
          </label>

          <label >Preço:
            <input type='number' value={price} name='price' onChange={(e) => setPrice(e.target.value)}></input>
          </label>

          <input type="submit" value="Criar"/>
        </form>
      </div>

    </div>
  );
}

export default App;
