import React from "react"
import {Button, Container, Form} from "react-bootstrap"
import {Field, reduxForm} from 'redux-form'


const AuthForm = props => {
  const {handleSubmit} = props
  return (
    <Container style={{height: 300}}>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor='email'>Login</Form.Label>
          <Field
            placeholder="Email adress"
            className='form-control'
            name='email'
            type='email'
            component='input'
            id='email'
          />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='password'>Password</Form.Label>
          <Field
            placeholder="Password"
            className='form-control'
            name='password'
            type='password'
            component='input'
            id='password'
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='checkMe' className='mr-2'>Remember
            me</Form.Label>
          <Field name='checkMe' type='checkbox' component='input' id='checkMe'/>
        </Form.Group>
        <Button variant="success" type="submit">
          Log in
        </Button>

      </Form>
    </Container>
  )
}
const ReduxAuthForm = reduxForm({
  form: "auth"
})(AuthForm)
export default ReduxAuthForm
