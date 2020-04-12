import React, {useState} from "react"
import ReactCardFlip from "react-card-flip";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const CardItem = ({card}) => {
  const [isFlipped, changeFlipped] = useState(false)
  const onClickFlip = () => {
    changeFlipped(!isFlipped)
  }

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <Card onClick={onClickFlip} className={'mb-4'}>
        <Card.Img variant="top" src={card.image}/>
        <Card.Body>
          <Card.Title>{card.name}</Card.Title>
          <Button variant="info">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card onClick={onClickFlip}>
        <Card.Img variant="top" src={card.image}/>
        <Card.Body>
          <Card.Title>{card.name}</Card.Title>
          <Button variant="info">Go somewhere</Button>
        </Card.Body>
      </Card>
    </ReactCardFlip>
  )
}


