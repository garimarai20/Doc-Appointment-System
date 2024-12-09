import React from 'react'
import{useState} from 'react'
import Layout from '../components/Layout'
import{ Col, Form,Input, Row, TimePicker } from 'antd'
import {useSelector, useDispatch} from 'react-redux'
import{useNavigate} from 'react-router-dom'
import {showLoading, hideLoading} from '../redux/features/alertSlice'
import axios from 'axios'

export const ApplyDoctor = () => {
    const {user} = useSelector(state => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    //handle form
    const handleFinish = async(values) =>{
        try {
            dispatch(showLoading())
            const res = await axios.post('/api/v1/user/apply-doctor',{...values, userId: user._id},{
                headers:{
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            });
            dispatch(hideLoading());
            if(res.data.success){
                message.success(res.data.success);
                navigate("/");
            }else{
                message.error(res.data.success);
            }
        } catch (error) {
            dispatch(hideLoading());
            console.log(error);
            message.error('Something went wrong');
        }
    };
  return (
    <Layout>
        <h1 className='text-center'>Apply as a Doctor</h1>
        <Form layout='vertical' onFinish={handleFinish} className='m-3'>
        <h4 className="" >Personal Details</h4>
            <Row gutter={20} >
                <Col xs={24} md={24} lg={8}>
                    <Form.Item label='First Name' name="firstName" required rules= {[{required:true}]}>
                        <Input type= "text" placeholder='Enter First name'/>
                    </Form.Item>
                    <Form.Item label='Last Name' name="lastName" required rules= {[{required:true}]}>
                        <Input type= "text" placeholder='Enter Last name'/>
                    </Form.Item>
                   
                </Col>
                <Col xs={24} md={24} lg={8}>
                    <Form.Item label='Contact Number' name="phone" required rules= {[{required:true}]}>
                        <Input type= "text" placeholder='Enter Contact number'/>
                    </Form.Item>
                    <Form.Item label='E-mail' name="email" required rules= {[{required:true}]}>
                        <Input type= "text" placeholder='Enter email'/>
                    </Form.Item>
                    
                </Col>
                <Col xs={24} md={24} lg={8}>
                    <Form.Item label='Address' name="address" required rules= {[{required:true}]}>
                        <Input type= "text" placeholder='Enter Address'/>
                    </Form.Item>
                    <Form.Item label='Website' name="website">
                        <Input type= "text" placeholder='Enter Website'/>
                    </Form.Item>
                    
                </Col>
                
            </Row>
            <h4 className="" >Professional Details</h4>
            <Row gutter={20} >
                <Col xs={24} md={24} lg={8}>
                    <Form.Item label='Specialization' name="specialization" required rules= {[{required:true}]}>
                        <Input type= "text" placeholder='Enter Specialization'/>
                    </Form.Item>
                    <Form.Item label='Experience' name="experience" required rules= {[{required:true}]}>
                        <Input type= "text" placeholder='Enter Experience'/>
                    </Form.Item>
                   
                </Col>
                <Col xs={24} md={24} lg={8}>
                    <Form.Item label='Fees Per consultation' name="consultationFees" required rules= {[{required:true}]}>
                        <Input type= "text" placeholder='Enter Consultation Fees'/>
                    </Form.Item>
                   
                </Col>
                <Col xs={24} md={24} lg={8}>
                    <Form.Item label='Timings' name="timings" required rules= {[{required:true}]}>
                        <TimePicker.RangePicker format ="HH:mm"/>
                    </Form.Item>
                    <Col xs={24} md={24} lg={8}>
                    <button className='btn btn-primary form-btn'type='submit'>Submit</button> </Col>
                </Col>
                <Col xs={24} md={24} lg={8}></Col>
                
               
            </Row>
        </Form>
    </Layout>
  )
}

export default ApplyDoctor