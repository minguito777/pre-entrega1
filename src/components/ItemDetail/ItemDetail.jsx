import React, {useContext, useState} from 'react';
import {useNavigate} from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import { ItemCount } from '../ItemCount/ItemCount'
import {CartContext} from '../context/CartContext'
import './itemDetail.css'

export const ItemDetail = ({ id, description, price,des, image, category, stock }) => {
 


  const navigate = useNavigate()

  const volverHaciaAtras = () =>{
    navigate(-1)
  }



  

  const {addToCart} = useContext(CartContext)



  const [counter, setCounter] = useState(0)

  const sumarAlCarrito = () =>{
        const newItem = {
          id,
          description,
          image,
          price,
          des,
          category,
          counter
        }
        
        addToCart(newItem)
  }



  return (
    <div className='item'>
      <Card style={{ width: '25rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{id}</Card.Title>
          <Card.Title>{description}</Card.Title>
          <Card.Title>{price}</Card.Title>
          <p>{des} </p>
          <Card.Title>Categoria: {category}</Card.Title>
          <ItemCount max={stock} modify={setCounter} cantidad={counter}/>
          <Button onClick={sumarAlCarrito}>Agregar al carrito</Button>
        </Card.Body>
        <Button onClick={volverHaciaAtras} className='btn btn-primary'>Volver atras</Button>
      </Card>
    </div>
  )
}