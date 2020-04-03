
/*** Validation Without Formik & Yup ***/

import React from 'react'
import useForm from "./hooks/useForm"
import LoginValidate from './validationRules/LoginValidationRules'
import { Input, Button, Col, Row, Form  } from 'antd'
import {
  ExclamationCircleOutlined,
  LockOutlined, 
  UserOutlined,
  KeyOutlined 
} from '@ant-design/icons'
import { Link } from 'react-router-dom'
import Background from '../loginbg.jpg'


export default function LoginPage2() {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(login, LoginValidate);

  function login() {
    window.location.href='/home'
  }


  return (
    <div className="bg" style={{ backgroundImage: `url(${Background}) no-repeat top`  }}>
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
          <LockOutlined className="logo1"/>
          <Form onFinish={handleSubmit} >
            <Form.Item style={{marginTop: -10}}>
              <Input 
                name="username"
                addonBefore={<UserOutlined className='inputIcon'/>} 
                placeholder="Username" 
                className={`input ${errors.username && 'feedbackMessage'}`}
                onChange={handleChange} 
                value={values.username || ''} 
              />
              {errors.username && (
                <p className="feedbackMessage"><ExclamationCircleOutlined className="feedbackIcon"/>{errors.username}</p>
              )}
            </Form.Item>
            <Form.Item style={{marginTop: -10}}>
              <Input
                name="password"
                addonBefore={<KeyOutlined className='inputIcon'/>}
                type="password"
                placeholder="Password"
                className={`input ${errors.password && 'feedbackMessage'}`}
                onChange={handleChange} 
                value={values.password || ''} 
              />
              {errors.password && (
                <p className="feedbackMessage"><ExclamationCircleOutlined className="feedbackIcon"/>{errors.password}</p>
              )}
            </Form.Item>
            <Form.Item>
              <Button type="primary" onClick={handleSubmit} className="fsButton">
                Log In
              </Button>
              Or <Link className="fsOther" to="/signup">Sign Up!</Link>
            </Form.Item>
          </Form>
        </Col>
        
      </Row>
    </div>  
  )
}
