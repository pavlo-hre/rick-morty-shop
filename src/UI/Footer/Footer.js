import React from "react"
import {Container} from "react-bootstrap"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCopyright} from '@fortawesome/free-solid-svg-icons'

const Footer = () => (
  <footer
    className='py-4'>
    <Container className='d-flex justify-content-center'>
      <div>
             <FontAwesomeIcon icon={faCopyright}/>
             <span> 2020 Pavel Grebeniuk</span>
      </div>
    </Container>
  </footer>
)
export default Footer
