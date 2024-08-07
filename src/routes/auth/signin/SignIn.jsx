import React, {useEffect} from 'react'
import {ContentTitle} from "../../../utils/Index.jsx";
import {Button, Checkbox, Form, Input} from "antd";
import {useSingInMutation} from "../../../redux/api/auth-api.jsx";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const SignIn = () => {
  const [signIn, {data, isSuccess, isLoading}] = useSingInMutation()
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("login", data)

  const onFinish = (values) => {
    console.log('Success:', values);
    signIn(values)
  };

  useEffect(() => {
    if (isSuccess) {
      // dispatch(signIn(data))
      navigate("/")
    }
  }, [isSuccess]);
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
      <div className="w-full m-auto flex justify-center items-center flex-col">
        <ContentTitle>Sign In</ContentTitle>
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
              Sign In
            </Button>
          </Form.Item>
        </Form>
      </div>
  )
}
export default SignIn
