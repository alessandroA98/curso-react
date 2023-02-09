import React from 'react'

const CarDetails = ({ brand, km, color, ne }) => {
  return (
    <div>
        <h2>detalhes do carro</h2>
        <ul>
            <li>Marca: {brand}</li>
            <li>KM: {km}</li>
            <li>Cor: {color}</li>
        </ul>

    {ne && <p>este carro é novo </p> }
    {!ne && <p>este carro é usado </p> }
    </div>
  )
}

export default CarDetails