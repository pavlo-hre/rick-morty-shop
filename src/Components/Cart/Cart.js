import React from "react"
import {Button, Container, Jumbotron, Table} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus, faMinus, faTrash} from '@fortawesome/free-solid-svg-icons'
import {connect} from "react-redux"
import {
  incCart,
  decCart,
  removeFromCart
} from "Redux/Actions/cart"
import {Link} from "react-router-dom"
import {getOrders} from "../../Redux/Selectors/selectors";


const Cart = props => {
  if (!props.orders.length) {
    return (<Container>
      <Jumbotron className='text-center'>
        <h1>Cart is empty!</h1>
        <p className='pt-3'>
          <Link
            className='btn btn-outline-primary'
            to='/'
          >Back to catalog</Link>
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
          <th style={{width: '60%'}}>Product</th>
          <th style={{width: '5%'}}>Price</th>
          <th style={{width: '10%'}}>Count</th>
          <th style={{width: '5%'}}>Sum</th>
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
                  disabled={el.inCart === 1 && true}
                >
                  <FontAwesomeIcon icon={faMinus}/>
                </Button>
                <span>{el.inCart}</span>
                <Button
                  variant='secondary'
                  onClick={() => props.incCart(el)}
                >
                  <FontAwesomeIcon icon={faPlus}/>
                </Button>
              </td>
              <td>{el.inCart * el.price}</td>
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
          <td colSpan={3}>Total</td>
          <td>
            {/*{propsorders.reduce((acc, el) => acc + el.inCart, 0)}*/}
          </td>
          {/*<td>{props.cartData.total}</td>*/}
        </tr>
        </tfoot>
      </Table>
      <div className='d-flex justify-content-end'>
        <Button
          variant="success"
          className='px-5'
        >Pay</Button></div>
    </Container>
  )
}
const mapStateToProps = state => ({
  orders: getOrders(state)
})

export default connect(mapStateToProps, {
  incCart,
  decCart,
  removeFromCart
})(Cart)
