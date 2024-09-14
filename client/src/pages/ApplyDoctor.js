import React from 'react'
import Layout from '../components/Layout'
import{ Col, Form,Input, Row } from 'antd'


export const ApplyDoctor = () => {
    //handle form
    const handleFinish = (values) =>{
        console.log(values)
    }
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
        </Form>
    </Layout>
  )
}

export default ApplyDoctor