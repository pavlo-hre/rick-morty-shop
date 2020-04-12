import React, {useEffect, useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import ProductList from "./ProductList"
import ProductDetails from "./ProductDetails";
import {Container} from "react-bootstrap";
import Menu from "./Menu/Menu";
import axios from "axios";


const App = () => {
  const [data, setData] = useState([])
  const [cart, setCart] =useState([])
  useEffect(() => {
    axios.get(`https://rick-morty-3c452.firebaseio.com/heroes.json`)
      .then(res => res.data['-M4hkpNGoQXhJjS4ymkS'].map(el=>({...el, inCart: 0})))
      .then(res => setData(res))
      .catch(e => console.log(e.message))
  }, [])
  const onAddToCart = (i) => {
    const cartData = [...cart, {...data.find(el=>el.id === i), inCart: 1}]
    setCart(cartData)
    console.log(cartData)
  }
  return (
    <Router>
      <Container fluid className='px-0 bg-light'>
        <Menu/>
        <Switch>
          <Route path='/' exact>
            <ProductList data={data} onClick={onAddToCart}/>
          </Route>
          <Route path='/catalog/:name' component={ProductDetails}/>
          <Route path='/news' component={ProductDetails}/>
        </Switch>
      </Container>
    </Router>

  );
}

export default App;
