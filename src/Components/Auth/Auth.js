import React from "react"
import {Alert, Button, Container, Form} from "react-bootstrap"
import {Formik} from 'formik'
import * as Yup from 'yup'
import {auth} from "Redux/Actions/auth"
import {connect} from "react-redux"
import {getAuthData} from "../../Redux/Selectors/selectors"

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Введите Ваш e-mail!')
    .required('Поле должно быть заполнено!'),
  password: Yup.string()
    .min(7, 'Минимальная длина пароля 7 символов!')
    .max(20, 'Максимальная длина пароля 20 символов!')
    .required('Поле должно быть заполнено!'),
})

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
            touched,
          }) => (
          <Form noValidate onSubmit={handleSubmit}>
            {props.isLogin
              ?
              null
              :
              <Form.Group>
                <Form.Label>Имя пользователя</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Введите ваше имя"
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
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                type="email"
                placeholder="Введите ваш email"
                name="email"
                value={values.email}
                onChange={handleChange}
                isInvalid={!!errors.email && touched.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Пароль</Form.Label>
              <Form.Control
                type="password"
                placeholder="Введите пароль"
                name="password"
                value={values.password}
                onChange={handleChange}
                isInvalid={!!errors.password && touched.password}
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
            >Войти</Button>
          </Form>
        )}
      </Formik>
    </Container>
  )
}
const mapStateToProps = state => ({
  errorMessage: getAuthData(state).error
})

export default connect(mapStateToProps, {auth})(AuthForm)
