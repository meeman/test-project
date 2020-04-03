
/*** Validation Without Formik & Yup ***/

import React, { useContext } from 'react';
import useForm from "./hooks/useForm";
import SignupValidate from './validationRules/SignupValidationRules';
import { Input, Button, Col, Row, Form  } from 'antd'
import {
  ExclamationCircleOutlined,
  BulbOutlined, 
  UserOutlined,
  MailOutlined,
  KeyOutlined 
} from '@ant-design/icons';
import { Link } from 'react-router-dom'
import Background from '../loginbg2.jpg'
import { UserContext } from './context/user-context'
import _ from 'lodash'


export default function SignupForm() {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(Signup, SignupValidate);
  
  const { userData, dispatch } = useContext(UserContext)

  function Signup() {
    console.log(userData);
    dispatch({
      type: "ADD_USER",
      payload: { id: _.uniqueId(1), username: values.username, email: values.email, password: values.password }
    });
    window.location.href='/home'
  }

  
  return (
    <div className="bg" style={{ background: `url(${Background}) no-repeat top`  }}>
      <Row className="authCard">
        <Col className="formSide" xs={24} sm={24} md={24} lg={14} xl={14}>
          <BulbOutlined className="logo2"/>
          <Form onFinish={handleSubmit} >
            <Form.Item>
              <Input 
                name="email"
                addonBefore={<MailOutlined  className='inputIcon'/>} 
                placeholder="Email" 
                className={`input ${errors.email && 'feedbackMessage'}`}
                onChange={handleChange} 
                value={values.email || ''} 
              />
              {errors.email && (
                <p className="feedbackMessage"><ExclamationCircleOutlined className="feedbackIcon"/>{errors.email}</p>
              )}
            </Form.Item>
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
              <Button type="primary" htmlType="submit" className="fsButton">
                Sign Up
              </Button>
                Already Have An Account? <Link className="fsOther" to="/">Login</Link>
              </Form.Item>
          </Form>
        </Col>
        <Col className="imageSide2" xs={0} sm={0} md={0} lg={10} xl={10}>
          <div className="isContainer">
            <h2 className="isTitle">
              CREATE ACCOUNT
            </h2>
            <p className="isPassage" >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
          </div>
        </Col>
      </Row>
    </div>  
  )
}
