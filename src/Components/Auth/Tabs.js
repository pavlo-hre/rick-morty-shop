import React from "react"
import {Tab, Tabs} from "react-bootstrap"
import AuthForm from './Auth'


const AuthFormTab = () => {
  return (
    <Tabs
      efaultActiveKey="Sign in" id="uncontrolled-tab-example"
    >
      <Tab eventKey="Sign in" title="Вход">
        <AuthForm isLogin={true}/>
      </Tab>
      <Tab eventKey="Sign up" title="Регистрация">
        <AuthForm isLogin={false}/>
      </Tab>
    </Tabs>
  );
}

export default AuthFormTab
