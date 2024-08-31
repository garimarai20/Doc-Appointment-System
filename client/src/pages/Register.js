import React from 'react';
import { Form, Input , message} from 'antd';
import axios from 'axios' ;
import {useDispatch} from "react-redux";
import { showLoading, hideLoading } from '../redux/features/alertSlice';
import "../styles/RegisterStyles.css";
import { Link , useNavigate} from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    //formhandler
    const onFinishHandler= async(values) =>{
        try {
            dispatch(showLoading());
            const res = await axios.post('/api/v1/user/register', values);
            dispatch(hideLoading());
            if(res.data.success){
                message.success('Registered Successfully !');
                navigate('/login');
            } else{
                message.error(res.data.message);
            }
        } catch (error) {
            dispatch(hideLoading());
            console.log(error);
            message.error('Something went Wrong');
            
        }
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