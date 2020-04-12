import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import ProductList from "./ProductList"
import ProductDetails from "./ProductDetails";
import {Container} from "react-bootstrap";
import Menu from "./Menu/Menu";


const App = () => {
  return (
    <Router>
      <Container fluid className='px-0 bg-light'>
        <Menu/>
        <Switch>
          <Route path='/' exact component={ProductList}/>
          <Route path='/catalog/:name' component={ProductDetails}/>
          <Route path='/news' component={ProductDetails}/>
        </Switch>
      </Container>
    </Router>

  );
}

export default App;
