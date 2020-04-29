import React from "react"
import {Button, Container, Jumbotron, Table} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus, faMinus, faTrash} from '@fortawesome/free-solid-svg-icons'
import {connect} from "react-redux"
import {Link} from "react-router-dom"

import {
  incCart,
  decCart,
  removeFromCart,
  resetCart
} from "Redux/Actions/cart"
import {getOrders, getTotalCart} from "../../Redux/Selectors/selectors"


const Cart = props => {
  if (!props.orders.length) {
    return (<Container>
      <Jumbotron className='text-center'>
        <h1>Корзина пуста!</h1>
        <p className='pt-3'>
          <Link
            className='btn btn-outline-primary'
            to='/'
          >Вернуться в каталог</Link>
        </p>
      </Jumbotron>
    </Container>)
  }
  return (
    <Container>
      <Table size="sm" striped bordered hover variant="dark">
        <thead>
        <tr className='text-center'>
          <th style={{width: '5%'}}>#</th>
          <th style={{width: '60%'}}>Товар</th>
          <th style={{width: '5%'}}>Цена</th>
          <th style={{width: '10%'}}>Количество</th>
          <th style={{width: '5%'}}>Сумма</th>
          <th style={{width: '5%'}}></th>
        </tr>
        </thead>
        <tbody>
        {props.orders.map((el, i) => {
          return (
            <tr key={el.id}>
              <td>{i + 1}</td>
              <td>
                <Link
                  to={`/product/${el.id}`}
                  className='text-white'
                >
                  {el.name}
                </Link>
              </td>
              <td>{el.price}</td>
              <td
                className='d-flex justify-content-between align-items-center'>
                <Button
                  variant='secondary'
                  onClick={() => props.decCart(el)}
                  disabled={el.count === 1}
                >
                  <FontAwesomeIcon icon={faMinus}/>
                </Button>
                <span>{el.count}</span>
                <Button
                  variant='secondary'
                  onClick={() => props.incCart(el)}
                >
                  <FontAwesomeIcon icon={faPlus}/>
                </Button>
              </td>
              <td>{el.count * el.price}</td>
              <td className='text-center'>
                <Button
                  variant='danger'
                  onClick={() => props.removeFromCart(el)}
                >
                  <FontAwesomeIcon icon={faTrash}/>
                </Button>
              </td>
            </tr>
          )
        })
        }
        </tbody>
        <tfoot>
        <tr>
          <td colSpan={3}>Всего</td>
          <td>
            {props.orders.reduce((acc, el) => acc + el.count, 0)}
          </td>
          <td>{props.total}</td>
        </tr>
        </tfoot>
      </Table>
      <div className='d-flex justify-content-end'>
        <Button
          variant="danger"
          className='mr-2'
          onClick={props.resetCart}
        >
          Очистить корзину
        </Button>
        <Button
          variant="success"
        >
          Оформить заказ
        </Button>
      </div>
    </Container>
  )
}
const mapStateToProps = state => ({
  orders: getOrders(state),
  total: getTotalCart(state)
})

const mapDispatchToProps = {
  incCart,
  decCart,
  removeFromCart,
  resetCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
