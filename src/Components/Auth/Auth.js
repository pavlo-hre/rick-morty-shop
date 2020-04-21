import React from "react"
import {Alert, Button, Container, Form} from "react-bootstrap"
import {Formik} from 'formik'
import * as Yup from 'yup'
import {auth} from "Redux/Actions/auth"
import {connect} from "react-redux"

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(7, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
});

const AuthForm = props => {
  return (
    <Container>
      <Formik
        initialValues={{
          userName: '',
          password: '',
          email: '',
        }}
        validationSchema={schema}
        onSubmit={({email, password, userName}) => {
          props.auth(email, password, userName, props.isLogin)
        }}
      >
        {({
            handleSubmit,
            handleChange,
            values,
            errors,
          }) => (
          <Form noValidate onSubmit={handleSubmit}>
            {props.isLogin
              ?
              null
              :
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="userName"
                  value={values.userName}
                  onChange={handleChange}
                  isInvalid={!!errors.userName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.userName}
                </Form.Control.Feedback>
              </Form.Group>
            }
            <Form.Group>
              <Form.Label>Login</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={values.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                name="password"
                value={values.password}
                onChange={handleChange}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>
            {props.errorMessage
              ?
              <Alert variant="warning">
                {props.errorMessage}
              </Alert>
              : null
            }
            <Button
              type="submit"
              variant='success'
            >Log in</Button>
          </Form>
        )}
      </Formik>
    </Container>
  )
}
const mapStateToProps = state => ({
  errorMessage: state.auth.error
})

export default connect(mapStateToProps, {auth})(AuthForm)
