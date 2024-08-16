import React from 'react'
import { Form, Input } from 'antd'
import "../styles/RegisterStyles.css";
import { Link } from 'react-router-dom';

const Register = () => {

    
    //formhandler
    const onFinishHandler= (values) =>{
        console.log(values);
    };

  return (
    <>
        <div className="form-container">
            <Form layout="vertical" onFinish={onFinishHandler} className='register-form'>
                <h2 className='text-center'>REGISTRATION FORM</h2>
                <Form.Item label="Name" name="name">
                   <Input type="text" required/> 
                </Form.Item>
                <Form.Item label="Email" name="email">
                   <Input type="email" required/> 
                </Form.Item>
                <Form.Item label="Password" name="password">
                   <Input type="password" required/> 
                </Form.Item>
                <Link to="/login" className='m-4'>Already a user? LOGIN HERE</Link>
                <button className="btn btn-primary" type ="submit" p-2>Register</button>
            </Form>
        </div>
    </>
  );
};

export default Register