import React, {useState} from "react"
import ReactCardFlip from "react-card-flip"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import {Badge, ListGroup} from "react-bootstrap"
import {Link} from "react-router-dom"

const CardItem = ({card, onAddHandler, isProductInCart}) => {
  const [isFlipped, changeFlipped] = useState(false)
  const onClickFlip = () => {
    changeFlipped(!isFlipped)
  }

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <Card bg="dark" className='mb-4 '>
        <Card.Img variant="top" src={card.image} onClick={onClickFlip}/>
        <Badge variant="danger">Price: {card.price}</Badge>
        <Card.Body
          className='d-flex justify-content-between flex-column text-center'>
          <Link
            to={`/product/${card.id}`}
          >
            <Card.Title className='text-white'>{card.name}</Card.Title>

            Status: <strong>{card.status}</strong><br/>
            Gender: <strong>{card.gender}</strong><br/>
            Species: <strong>{card.species}</strong>


          </Link>
          {isProductInCart
            ? <Link
              to='/cart'
              className='btn btn-warning'
            >В корзине</Link>
            :
            <Button
              variant="success"
              onClick={() => onAddHandler(card)}
            >Добавить в корзину</Button>
          }
        </Card.Body>
      </Card>
      <Card onClick={onClickFlip} text="white" bg="secondary"
            className={'mb-4 '}>
        <Card.Header><h3>{card.name}</h3></Card.Header>
        <ListGroup>
          <ListGroup.Item variant="light">Status: <strong>{card.status}</strong></ListGroup.Item>
          <ListGroup.Item variant="dark">Gender: <strong>{card.gender}</strong></ListGroup.Item>
          <ListGroup.Item
            variant="light">Species: <strong>{card.species}</strong></ListGroup.Item>
          <ListGroup.Item
            variant="dark">Location: <strong>{card.location}</strong></ListGroup.Item>
        </ListGroup>
      </Card>
    </ReactCardFlip>
  )
}

export default CardItem


