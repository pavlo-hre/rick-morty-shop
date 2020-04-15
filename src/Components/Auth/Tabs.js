import React from "react"
import {Tab, Tabs} from "react-bootstrap"
import AuthForm from './Auth'


const AuthFormTab = () => {
  return (
    <Tabs
      efaultActiveKey="Sign in" id="uncontrolled-tab-example"
    >
      <Tab eventKey="Sign in" title="Sign in">
        <AuthForm isLogin={true}/>
      </Tab>
      <Tab eventKey="Sign up" title="Sign up">
        <AuthForm isLogin={false}/>
      </Tab>
    </Tabs>
  );
}

export default AuthFormTab
