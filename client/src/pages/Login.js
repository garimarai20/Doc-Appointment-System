import React from 'react'
import { Form, Input } from 'antd'
import "../styles/LoginStyles.css";
import { Link } from 'react-router-dom';

const Login = () => {
  //formhandler
  const onFinishHandler= (values) =>{
    console.log(values);
};
  return (
    <div className="form-container">
            <Form layout="vertical" onFinish={onFinishHandler} className='register-form'>
                <h2 className='text-center'>LOGIN FORM</h2>
                <Form.Item label="Email" name="email">
                   <Input type="email" required/> 
                </Form.Item>
                <Form.Item label="Password" name="password">
                   <Input type="password" required/> 
                </Form.Item>
                <Link to="/register" className='m-4'>Not a user? REGISTER HERE</Link>
                <button className="btn btn-primary" type ="submit" p-2>LOGIN</button>
            </Form>
        </div>
  )
}

export default Login