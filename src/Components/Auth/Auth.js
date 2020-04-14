import React, {useState} from "react"
import {Button, Container, Form, Tab, Tabs} from "react-bootstrap"
import {Formik} from 'formik'
import * as Yup from 'yup'
import {auth} from "../../Redux/Actions/auth";
import {connect} from "react-redux";

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(7, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
});

const AuthFormTab = props => {
  return (
    <Tabs
      efaultActiveKey="Sign in" id="uncontrolled-tab-example"
    >
      <Tab eventKey="Sign in" title="Sign in">
        <AuthForm {...props} isLogin={true}/>
      </Tab>
      <Tab eventKey="Sign up" title="Sign up">
        <AuthForm {...props} isLogin={false}/>
      </Tab>
    </Tabs>
  );
}

const AuthForm = props => {
  return (
    <Container>
      <Formik
        initialValues={{
          password: '',
          email: '',
        }}
        validationSchema={schema}
        onSubmit={({email, password}) => {
          props.auth(email, password, props.isLogin)
        }}
      >
        {({
            handleSubmit,
            handleChange,
            values,
            touched,
            isValid,
            errors,
          }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group controlId="validationFormik01">
              <Form.Label>Login</Form.Label>
              <Form.Control
                type="email"
                placeholder="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="validationFormik02">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Check
                name="remember"
                label="Remember me"
                onChange={handleChange}
                id="validationFormik0"
              />
            </Form.Group>
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

export default connect(null, {auth})(AuthFormTab)
