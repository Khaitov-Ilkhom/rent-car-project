import {Button, Checkbox, Form, Input} from 'antd';
import {ContentTitle} from "../../../utils/Index.jsx";
import {useSingUpMutation} from "../../../redux/api/auth-api.jsx";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";


const SignUp = () => {
  const [signUp, {data, isSuccess, isLoading}] = useSingUpMutation()
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
        <ContentTitle>Sign Up</ContentTitle>
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
              label="First Name"
              name="first_name"
              rules={[
                {
                  required: true,
                  message: 'Please input your first name!',
                },
              ]}
          >
            <Input/>
          </Form.Item>

          <Form.Item
              label="Last Name"
              name="last_name"
              rules={[
                {
                  required: true,
                  message: 'Please input your last name!',
                },
              ]}
          >
            <Input/>
          </Form.Item>

          <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
          >
            <Input/>
          </Form.Item>

          <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input your email!',
                },
              ]}
          >
            <Input type="email"/>
          </Form.Item>

          <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
          >
            <Input.Password type="password"/>
          </Form.Item>

          <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                span: 16,
              }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item className='w-full'>
            <Button loading={isLoading} disabled={isLoading} className="w-full" type="primary" htmlType="submit">
              Sign Up
            </Button>
          </Form.Item>
        </Form>
      </div>
  )
}
export default SignUp
