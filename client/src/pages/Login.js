import React from 'react'
import { Form, Input, message } from 'antd'
import "../styles/LoginStyles.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

const Login = () => {
  //formhandler
  
    const navigate = useNavigate();
    //form handler
    const onFinishHandler = async (values) => {
      try {
        const res = await axios.post('/api/v1/user/login',values)
        if(res.data.success){
          localStorage.setItem("token", res.data.token);
          message.success('Logged In Successfully');
          navigate('/')
        } else{
          message.error(res.data.message)
        }
      } catch (error) {
        console.log(error);
        message.error('Something Went Wrong');
      }
    }

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