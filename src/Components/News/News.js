import React from "react"
import {Link} from "react-router-dom"
import {Container, Jumbotron} from "react-bootstrap"

const News = () => {
  return (<Container>
    <Jumbotron className='text-center'>
      <h1>Здесь будут новости...</h1>
      <p className='pt-3'>
        <Link
          className='btn btn-outline-primary'
          to='/'
        >Вернуться в каталог</Link>
      </p>
    </Jumbotron>
  </Container>)
}
export default News
