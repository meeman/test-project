
/*** Validation With Formik & Yup ***/

import React, { useContext, useRef } from 'react'
import { Input, Button, Col, Row , Form, Checkbox } from 'antd'
import {
  ExclamationCircleOutlined,
  UserOutlined,
  LockOutlined,
  KeyOutlined 
} from '@ant-design/icons';
import { Link } from 'react-router-dom'
import useFormInput from './hooks/useFormInput'
import { UserContext } from './context/user-context'
import { Formik , Field } from 'formik'



export default function LoginPage() {
  const username = useFormInput('')
  const password = useFormInput('')

  const { userData } = useContext(UserContext)

  const formRef = useRef()
  const handleSubmit = () => {
    if (formRef.current) {
      formRef.current.handleSubmit()
    }
  }


  const validateUsername = value => {
    let error
    let correct = userData.some(user => user.username === value)
    if (!value) {
      error = "Required"
    } else if (!correct){
        error = "Invalid Username"
      } 
    return error
  }

  const validatePassword = value => {
    let error 
    let correct = userData.some(user => user.password === value)
    if (!value) {
      error = "Required"
    } else if (!correct){
        error = "Invalid Password"
      }
    return error
  }


  return (
    <div className="bg">
      <Row className="authCard">
        <Col className="imageSide" xs={0} sm={0} md={0} lg={10} xl={10}>
          <div className="isContainer" >
            <h2 className="isTitle">
              WELCOME BACK!
            </h2>
            <p className="isPassage">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
          </div>
        </Col>
        <Col className="formSide" xs={24} sm={24} md={24} lg={14} xl={14}>
          <LockOutlined className="logo1" />
          <Formik
            initialValues={{
              username: '',
              password: ''
            }}
            onSubmit={() => {
              username.onReset()
              password.onReset()
              window.location.href='/home'
            }}
            innerRef={formRef}
          >
            {() => (
              <Form style={{marginBottom: 0}}>
                <Field name="username" component={UsernameInputComponent} validate={validateUsername} placeholder="Username" />
                <Field name="password" component={PasswordInputComponent} validate={validatePassword} placeholder="Password" />
                <Form.Item>
                  <Button type="primary" onClick={handleSubmit} className="fsButton">
                    Log In
                  </Button>
                  Or <Link className="fsOther" to="/signup">Sign Up!</Link>
                </Form.Item>
              </Form>
            )}
          </Formik>  
        </Col>
      </Row>
    </div>
  )
}


const UsernameInputComponent = ({
  field,
  form: {touched, errors},
  ...props
}) => {
  return (
    <Form.Item >
      <Input 
        type="text" 
        {...field} 
        {...props} 
        addonBefore={<UserOutlined className='inputIcon'/>}
      />
        {touched.username && errors.username &&
        <div className="feedbackMessage"><ExclamationCircleOutlined className="feedbackIcon"/>{errors.username}</div>}
    </Form.Item>
  )
}

const PasswordInputComponent = ({
  field,
  form: {touched, errors},
  ...props
}) => {
  return (
    <Form.Item style={{marginTop: -10}}>
      <Input
       type="text" 
       {...field} 
       {...props} 
       addonBefore={<KeyOutlined className='inputIcon'/>}
       />
      {touched.password && errors.password &&
        <div className="feedbackMessage"><ExclamationCircleOutlined className="feedbackIcon"/>{errors.password}</div>}
    </Form.Item>
  )
}
