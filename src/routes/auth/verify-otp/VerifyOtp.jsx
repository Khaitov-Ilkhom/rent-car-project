import {useEffect} from 'react'
import {ContentTitle} from "../../../utils/Index.jsx";
import {Button, Form, Input} from "antd";
import {useVerifyOtpMutation} from "../../../redux/api/auth-api.jsx";
import {useNavigate} from "react-router-dom";

const VerifyOtp = () => {
  const [verifyOtp, {data, isSuccess, isLoading}] = useVerifyOtpMutation()
  const navigate = useNavigate();
  console.log("VerifyOtp", data);

  const onFinish = (values) => {
    console.log('Success:', values);
    verifyOtp(values)
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/auth/signin")
    }
  }, [isSuccess]);

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
      <div className="w-full m-auto flex justify-center items-center flex-col">
        <ContentTitle>Verify Otp</ContentTitle>
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
              label="Verify OTP"
              name="verify-otp"
              rules={[
                {
                  required: true,
                  message: 'Please input your verify otp!',
                },
              ]}
          >
            <Input/>
          </Form.Item>

          <Form.Item className='w-full'>
            <Button loading={isLoading} disabled={isLoading} className="w-full" type="primary" htmlType="submit">
              Verify OTP
            </Button>
          </Form.Item>
        </Form>
      </div>
  )
}
export default VerifyOtp
