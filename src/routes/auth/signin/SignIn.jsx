import {useEffect} from 'react'
import {Button, Form, Input, message, Typography} from "antd";
import {useSignInMutation} from "../../../redux/api/auth-api.jsx";
import {useDispatch} from "react-redux";
import {signIn as saveToken} from "../../../redux/slices/Auth-slice.jsx";
import {Link, useNavigate} from "react-router-dom";
import {MdAlternateEmail} from "react-icons/md";
import {RiLockPasswordLine} from "react-icons/ri";
import {capitalPasswordValidation, numberPasswordValidation, symbolPasswordValidation} from "../../../utils/VerifyPassword.js";

const {Text, Title} = Typography;


const SignIn = () => {
  const [signIn, {data, isSuccess, isLoading}] = useSignInMutation()
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = (values) => {
    signIn(values)
  };

  useEffect(() => {
    if (data) {
      if (data?.accessToken) {
        message.success("Sign in Successfully")
        navigate("/")
        dispatch(saveToken({token: data.accessToken}))
      } else {
        message.error(data?.message)
      }
    }
  }, [data]);

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
            autoComplete="on"
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
                   placeholder="Email Address" autoComplete="email"/>
          </Form.Item>

          <Form.Item
              className="pb-2"
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
                            prefix={<RiLockPasswordLine className='text-gray-400 text-[22px] mx-2'/>} type="password"
                            placeholder="Password" autoComplete="password"/>
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
