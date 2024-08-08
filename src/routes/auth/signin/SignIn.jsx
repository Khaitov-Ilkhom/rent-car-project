import {useEffect} from 'react'
import {Button, Form, Input, Typography} from "antd";
import {useSingInMutation} from "../../../redux/api/auth-api.jsx";
import {useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {MdAlternateEmail} from "react-icons/md";
import {RiLockPasswordLine} from "react-icons/ri";

const {Text, Title} = Typography;


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
        <Title>Sign In</Title>
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
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input your email!',
                },
              ]}
          >
            <Input style={{fontSize: "16px", border: "1px solid #9BA3AF", padding: "8px 14px 8px 6px", color: "#56b0bb"}}
                   prefix={<MdAlternateEmail className='text-gray-400 text-[22px] mx-2'/>} type="email"
                   placeholder="Email Address"/>
          </Form.Item>

          <Form.Item
              className="pb-2"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
          >
            <Input.Password style={{fontSize: "16px", border: "1px solid #9BA3AF", padding: "8px 14px 8px 6px", color: "#56b0bb"}}
                            prefix={<RiLockPasswordLine className='text-gray-400 text-[22px] mx-2'/>} type="password"
                            placeholder="Password"/>
          </Form.Item>

          <Form.Item className='w-full'>
            <Button loading={isLoading} disabled={isLoading}
                    className="w-full py-6 bg-[#56b0bb] border-[#56b0bb] text-white text-xl font-semibold leading-3 hover:!bg-[#499CA6] hover:!text-white hover:!border-[#499ca6]"
                    htmlType="submit">
              Sign In
            </Button>
          </Form.Item>
        </Form>
        <Text>Dont you have account? <Link className="!text-[#499CA6]" to="/auth">Sign Up</Link></Text>
      </div>
  )
}
export default SignIn
