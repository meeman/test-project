import React, { useContext, useRef } from 'react'
import { Input, Button, Col, Row, Form  } from 'antd'
import {
  ExclamationCircleOutlined  ,
  BulbOutlined, 
  UserOutlined,
  MailOutlined,
  KeyOutlined 
} from '@ant-design/icons';
import { Link } from 'react-router-dom'
import Background from '../loginbg2.jpg'
import useFormInput from './hooks/useFormInput'
import { UserContext } from './context/user-context'
import _ from 'lodash'
import { Formik , Field } from 'formik'
import * as Yup from 'yup'



const SignupSchema = Yup.object().shape({
  email: Yup
    .string()
    .email('Email is invalid')
    .required('Email is required'),
  username: Yup
    .string()
    .max(20)
    .required('Username is required'),
  password: Yup
    .string()
    .min(6, "Password is too short - should be 6 chars minimum.")
    .matches(/(?=.*[0-9])/, "Password must contain a number.")
    // .matches(/[A-Z]{2}\d{4}$/i, 'First two letters must be alphabets and it will end with 4 numbers')
    .required('Password is required'),
  // confirmPassword: Yup
  //   .string()
  //   .oneOf([Yup.ref('password'), null], 'Password must match')
  //   .required('Confirm password is required')
})

export default function SignupView() {
  const email = useFormInput('')
  const username = useFormInput('')
  const password = useFormInput('')

  const { dispatch } = useContext(UserContext)

  const formRef = useRef()
  const handleSubmit = () => {
    if (formRef.current) {
      formRef.current.handleSubmit()
    }
    dispatch({
      type: "ADD_USER",
      payload: { id: _.uniqueId(1), username: username.value, email: email.value, password: password.value }
    })
    
  }


  return (
    <div className="bg" style={{ background: `url(${Background}) no-repeat top`  }}>
      <Row className="authCard">
        <Col className="formSide" xs={24} sm={24} md={24} lg={14} xl={14}>
          <BulbOutlined className="logo2"/>
          <Formik
            initialValues={{
              email: '',
              username: '',
              password: '',
              // confirmPassword: ''
            }}
            validationSchema={SignupSchema}
            onSubmit={ fields => {
              // console.log(userData)
              // alert('SUCCESS!\n\n' + JSON.stringify(fields))
              username.onReset()
              email.onReset()
              password.onReset()
              window.location.href='/home'
            }}
            innerRef={formRef}
          >
            {() => (
              <div>
                <Form >
                  <Field name="email" component={EmailInputComponent} placeholder="Email" />
                  <Field name="username" component={UsernameInputComponent} placeholder="Username" />
                  <Field name="password" component={PasswordInputComponent} placeholder="Password" />
                  {/* <Field name="confirmPassword" component={CPasswordInputComponent} placeholder="Confirm Password" /> */}
                  <Form.Item>
                  <Button type="primary" onClick={handleSubmit} className="fsButton">
                    Sign Up
                  </Button>
                  Already have an account? <Link className="fsOther" to="/">Login</Link>
                  </Form.Item>
                </Form>
              </div>
            )}
          </Formik>  
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
                   

const EmailInputComponent = ({
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
        addonBefore={<MailOutlined  className='inputIcon'/>} 
      />
      {touched.email && errors.email &&
        <div className="feedbackMessage"><ExclamationCircleOutlined className="feedbackIcon"/>{errors.email}</div>}
    </Form.Item>
  )
}

const UsernameInputComponent = ({
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


// const CPasswordInputComponent = ({
//   field,
//   form: {touched, errors},
//   ...props
// }) => {
//   return (
//     <Form.Item style={{marginTop: -10}}>
//       <Input type="text" {...field} {...props} />
//       {touched.confirmPassword && errors.confirmPassword &&
//         <div className="error"><ExclamationOutlined   />{errors.confirmPassword}</div>}
//     </Form.Item>
//   )
// }


