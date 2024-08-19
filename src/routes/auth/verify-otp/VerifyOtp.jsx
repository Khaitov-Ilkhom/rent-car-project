import {useEffect, useState} from 'react'
import {Button, Input, message, Typography} from "antd";
import {useSignUpMutation, useVerifyOtpMutation} from "../../../redux/api/auth-api.jsx";
import {Link, useNavigate, useSearchParams} from "react-router-dom";

const {Text, Title} = Typography;

const VerifyOtp = () => {
  const [signUp, {isSuccess: resendSuccess}] = useSignUpMutation()
  const [verifyOtp, {data, isSuccess, isError}] = useVerifyOtpMutation()
  const [timeLeft, setTimeLeft] = useState(119);
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [userData, setUserData] = useState({email: "", password: "", first_name: ""})
  const onChange = (text) => {
    verifyOtp({email: userData.email, otp: text})
  };
  useEffect(() => {
    const email = atob(searchParams.get("email"))
    const password = atob(searchParams.get("password"))
    const first_name = atob(searchParams.get("first_name"))
    setUserData({
      email,
      first_name,
      password
    })
  }, [searchParams]);

  useEffect(() => {
    if (isSuccess) {
      message.success(data?.message)
      navigate('/auth/signin')
    }
    if (isError) {
      message.error(data?.message)
    }
  }, [isSuccess, isError])

  const resendCode = () => {
    signUp({email: userData.email, password: userData.password, first_name: userData.first_name})
  }

  useEffect(() => {
    if (timeLeft === 0) {
      return;
    }
    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeLeft]);
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;
  };
  const sharedProps = {
    onChange,
  };
  return (
      <div className="w-full m-auto flex justify-center items-center flex-col">
        <div className='flex flex-col items-center  leading-none'>
          <Link to={'/auth'}><Title className="pb-2">Verification</Title></Link>
          <Text className="pb-3 leading-none mb-3">Enter the code sent to <i
              className="font-semibold">{userData?.email}</i></Text>
        </div>
        <div>
          <Input.OTP length={6} {...sharedProps} />
        </div>
        <div>
          <Text className="flex w-full justify-center py-2 text-center text-slate-600">
            You can send code again in {formatTime(timeLeft)}
          </Text>
        </div>
        <div>
          <Button disabled={formatTime(timeLeft)} onClick={resendCode}>Resend code</Button>
        </div>
      </div>
  )
}
export default VerifyOtp
