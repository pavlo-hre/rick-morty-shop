import React from "react"
import {
  Navbar,
  Nav,
  Container, Badge, Button
} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

const Menu = props => {
  return (
    <Navbar bg="dark" expand="lg" className='mb-5 nav-menu '>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/" exact
                     className='btn btn-link text-white'>Catalog</NavLink>
            <NavLink to="/news"
                     className='btn btn-link text-white'>News</NavLink>
          </Nav>
          <Button
            variant={"secondary"}
            onClick={()=>props.modalOpen(true)}
          >
            Login
          </Button>
          <NavLink
            to='/cart'
            className='btn btn-link text-white cart-link'
          >
            Cart
            <Badge
              variant='danger'
            >{props.cartData}</Badge>
          </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
const mapStateToProps = state => ({
  cartData: state.product.cart.orders.length
})

export default connect(mapStateToProps)(Menu)
