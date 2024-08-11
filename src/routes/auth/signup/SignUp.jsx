import {Button, Form, Input, InputNumber, message, Typography} from 'antd';
import {useSignUpMutation} from "../../../redux/api/auth-api.jsx";
import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {MdAlternateEmail} from "react-icons/md";
import {RiLockPasswordLine} from "react-icons/ri";
import { SlUser } from "react-icons/sl";
import {
  capitalPasswordValidation,
  numberPasswordValidation,
  symbolPasswordValidation
} from "../../../utils/VerifyPassword.js";

const {Text, Title} = Typography;

const SignUp = () => {
  const [signUp, {data, isSuccess, isLoading}] = useSignUpMutation()
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const onFinish = (values) => {
    console.log('Success:', values);
    signUp(values)
    setEmail(values.email)
  };

  useEffect(() => {
    if (data) {
      if (data?.statusCode && data?.statusCode === 201) {
        message.success(data?.message)
        navigate(`/auth/verify-otp?email=${btoa(email)}`)
      } else {
        message.error(data?.message)
      }
    }
  }, [data]);
  return (
      <div className="w-full m-auto flex justify-center items-center flex-col">
        <Title>Sign Up</Title>
        <Form
            className="w-full"
            name="basic"
            labelCol={{
              span: 8,
            }}
            style={{
              maxWidth: 450,
            }}
            initialValues={{
              remember: true,
            }}
            layout="vertical"
            onFinish={onFinish}
            autoComplete="on"
        >
         <div className="flex items-center gap-3">
           <Form.Item
               name="firstName"
               rules={[
                 {
                   required: true,
                   message: 'Please input your firstname!',
                 },
               ]}
           >
             <Input style={{fontSize: "16px", border: "1px solid #9BA3AF", padding: "8px 14px 8px 6px", color: "#56b0bb"}}
                    prefix={<SlUser className='text-gray-400 text-[20px] mx-2'/>}
                    placeholder="Firstname" autoComplete="firstname"/>
           </Form.Item>

           <Form.Item
               name="lastName"
               rules={[
                 {
                   required: true,
                   message: 'Please input your lastname!',
                 },
               ]}
           >
             <Input style={{fontSize: "16px", border: "1px solid #9BA3AF", padding: "8px 14px 8px 6px", color: "#56b0bb"}}
                    prefix={<SlUser className='text-gray-400 text-[20px] mx-2'/>}
                    placeholder="Lastname" autoComplete="lastname"/>
           </Form.Item>
         </div>

          <Form.Item
              name="age"
              rules={[
                {
                  required: true,
                  message: 'Please input your age!',
                },
              ]}
          >
            <InputNumber style={{width: "100%", fontSize: "16px", border: "1px solid #9BA3AF", padding: "6px 14px 6px 6px", color: "#56b0bb !important"}}
                   prefix={<SlUser className='text-gray-400 text-[20px] mx-2'/>}
                   placeholder="Age" autoComplete="age"/>
          </Form.Item>

          <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input your email!',
                },
              ]}
          >
            <Input style={{fontSize: "16px", border: "1px solid #9BA3AF", padding: "8px 14px 8px 6px", color: "#56b0bb"}}
                   prefix={<MdAlternateEmail className='text-gray-400 text-[20px] mx-2'/>} type="email"
                   placeholder="Email Address" autoComplete="email"/>
          </Form.Item>

          <Form.Item
              name="password"
              rules={[
                {
                  max: 6,
                  message: "Password must be at most 6 characters!",
                },
                {
                  required: true,
                  message: 'Please input your password!',
                },
                  symbolPasswordValidation,
                  capitalPasswordValidation,
                  numberPasswordValidation,
              ]}
          >
            <Input.Password style={{fontSize: "16px", border: "1px solid #9BA3AF", padding: "8px 14px 8px 6px", color: "#56b0bb"}}
                            prefix={<RiLockPasswordLine className='text-gray-400 text-[20px] mx-2'/>} type="password"
                            placeholder="Password" autoComplete="password"/>
          </Form.Item>

          <Form.Item className='w-full'>
            <Button loading={isLoading} disabled={isLoading}
                    className="w-full py-6 bg-[#56b0bb] border-[#56b0bb] text-white text-xl font-semibold leading-3 hover:!bg-[#499CA6] hover:!text-white hover:!border-[#499ca6]"
                    htmlType="submit">
              Sign Up
            </Button>
          </Form.Item>
        </Form>
        <Text>Already have an account? <Link className="!text-[#499CA6]" to="/auth/signin">Sign In</Link></Text>
      </div>
  )
}
export default SignUp
