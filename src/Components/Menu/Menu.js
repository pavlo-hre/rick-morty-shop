import React, {useEffect} from "react"
import {
  Navbar,
  Nav,
  Container, Badge, Button
} from "react-bootstrap"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart, faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
import {NavLink} from "react-router-dom"
import {connect} from "react-redux"
import {logOut} from "Redux/Actions/auth"
import {getAuthData, getOrders} from "../../Redux/Selectors/selectors"

const Menu = props => {
  const {authData, modalHide, orders, logOut, modalOpen} = props
  useEffect(() => {
    if (authData.token) {
      modalHide()
    }
  }, [authData.token])

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className='mb-5 nav-menu '>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <h2 className='navbar-brand ml-2'>
          RICK AND MORTY SHOP
        </h2>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/" exact
                     className='btn btn-link text-white'>Каталог</NavLink>
            <NavLink to="/news"
                     className='btn btn-link text-white'>Новости</NavLink>
          </Nav>
        </Navbar.Collapse>

        <NavLink
          to='/cart'
          className='btn btn-link text-white cart-link mr-2'
        >
          <FontAwesomeIcon icon={faShoppingCart}/>
          {
            !!orders.length
            &&
            <Badge variant='danger'>{orders.length}</Badge>
          }
        </NavLink>

        {authData.token
          ?
          <>
            <Button
              className='mr-2'
              variant="outline-light">
              {authData.user}
            </Button>

            <Button
              variant={"outline-light"}
              onClick={logOut}
            >
              <FontAwesomeIcon icon={faSignOutAlt}/>
            </Button>
          </>
          :
          <Button
            variant="secondary"
            onClick={modalOpen}
          >
            Войти
          </Button>
        }
      </Container>
    </Navbar>
  )
}

const mapStateToProps = state => ({
  orders: getOrders(state),
  authData: getAuthData(state)
})

export default connect(mapStateToProps, {logOut})(Menu)
