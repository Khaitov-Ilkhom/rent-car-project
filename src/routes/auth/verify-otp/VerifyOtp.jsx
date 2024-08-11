import {useEffect, useState} from 'react'
import {Input, message, Typography} from "antd";
import {useVerifyOtpMutation} from "../../../redux/api/auth-api.jsx";
import {Link, useNavigate, useSearchParams} from "react-router-dom";

const {Text, Title} = Typography;

const VerifyOtp = () => {
  const [timeLeft, setTimeLeft] = useState(119);
  const navigate = useNavigate()
  const [verifyOtp, {data, isSuccess, isLoading, isError}] = useVerifyOtpMutation()
  const [searchParams, setSearchParams] = useSearchParams()
  const [email, setEmail] = useState('')
  const onChange = (text) => {
    verifyOtp({email, otp: text})
  };
  useEffect(() => {
    const email = atob(searchParams.get("email"))
    setEmail(email)
  }, [searchParams]);

  useEffect(() => {
    if(data){
      if(data?.statusCode && data?.statusCode === 200){
        message.success(data?.message)
        navigate('/auth/signin')
      }
    }
  },[data])

  useEffect(() => {
    if(isError){
      navigate('/auth')
    }
  },[isError])

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
          <Text className="pb-3 leading-none mb-3">Enter the code sent to <i className="font-semibold">{email}</i></Text>
        </div>
        <div>
          <Input.OTP length={6} {...sharedProps} />
        </div>
        <div>
          <Text className="flex w-full justify-center py-2 text-center text-slate-600">
            You can send code again in {formatTime(timeLeft)}
          </Text>
        </div>
      </div>
  )
}
export default VerifyOtp
