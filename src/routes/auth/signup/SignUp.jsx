import {Button, Form, Input, Typography} from 'antd';
import {useSingUpMutation} from "../../../redux/api/auth-api.jsx";
import {useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {MdAlternateEmail} from "react-icons/md";
import {RiLockPasswordLine} from "react-icons/ri";
import { SlUser } from "react-icons/sl";

const {Text, Title} = Typography;

const SignUp = () => {
  const [signUp, {data, isSuccess, isLoading}] = useSingUpMutation()
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const capitalPasswordValidation = {
    pattern: /(?=.*[A-Z])/,
    message: "Password must contain at least one capital letter"
  }
  const symbolPasswordValidation = {
    pattern: /(?=.*[!@#$%^&*()_+\-=[\]{}:';"\\|,.<>\/?])/,
    message: "Password must contain at least one symbol"
  }
  const numberPasswordValidation = {
    pattern: /(?=.*\d)/,
    message: "Password must contain at least one number"
  }

  console.log("register", data)

  const onFinish = (values) => {
    console.log('Success:', values);
    signUp(values)
  };

  useEffect(() => {
    if (isSuccess) {
      // dispatch(signUp(data))
      navigate("/auth/verify-otp")
    }
  }, [isSuccess]);
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

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
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
          <Form.Item
              name="first_name"
              rules={[
                {
                  required: true,
                  message: 'Please input your firstname!',
                },
              ]}
          >
            <Input style={{fontSize: "16px", border: "1px solid #9BA3AF", padding: "6px 14px 6px 6px", color: "#56b0bb"}}
                   prefix={<SlUser className='text-gray-400 text-[20px] mx-2'/>}
                   placeholder="Firstname"/>
          </Form.Item>

          <Form.Item
              name="last_name"
              rules={[
                {
                  required: true,
                  message: 'Please input your lastname!',
                },
              ]}
          >
            <Input style={{fontSize: "16px", border: "1px solid #9BA3AF", padding: "6px 14px 6px 6px", color: "#56b0bb"}}
                   prefix={<SlUser className='text-gray-400 text-[20px] mx-2'/>}
                   placeholder="Lastname"/>
          </Form.Item>

          <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
          >
            <Input style={{fontSize: "16px", border: "1px solid #9BA3AF", padding: "6px 14px 6px 6px", color: "#56b0bb"}}
                   prefix={<SlUser className='text-gray-400 text-[20px] mx-2'/>}
                   placeholder="Username"/>
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
            <Input style={{fontSize: "16px", border: "1px solid #9BA3AF", padding: "6px 14px 6px 6px", color: "#56b0bb"}}
                   prefix={<MdAlternateEmail className='text-gray-400 text-[20px] mx-2'/>} type="email"
                   placeholder="Email Address"/>
          </Form.Item>

          <Form.Item
              name="password"
              rules={[
                {
                  min: 8,
                  message: "Password must be at least 8 characters!",
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
            <Input.Password style={{fontSize: "16px", border: "1px solid #9BA3AF", padding: "6px 14px 6px 6px", color: "#56b0bb"}}
                            prefix={<RiLockPasswordLine className='text-gray-400 text-[20px] mx-2'/>} type="password"
                            placeholder="Password"/>
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
