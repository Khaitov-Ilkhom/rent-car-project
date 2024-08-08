import {useEffect} from 'react'
import {Input, Typography} from "antd";
import {useVerifyOtpMutation} from "../../../redux/api/auth-api.jsx";
import {Link, useNavigate} from "react-router-dom";

const {Text, Title} = Typography;

const VerifyOtp = () => {
  const navigate = useNavigate()
  const [verifyOtp, {data, isSuccess, isLoading, isError}] = useVerifyOtpMutation()
  console.log(data)

  const onChange = (text) => {
    verifyOtp(text)
  };
  useEffect(() => {
    if(isSuccess){
      navigate('/auth/signin')
    }
  },[isSuccess])
  useEffect(() => {
    if(isError){
      navigate('/auth')
    }
  },[isError])
  const sharedProps = {
    onChange,
  };
  return (
      <div className="w-full m-auto flex justify-center items-center flex-col">
        <div className='flex flex-col items-center  leading-none'>
          <Link to={'/auth'}><Title className="pb-2">Verification</Title></Link>
          <Text className="pb-3 leading-none mb-3">Enter the code sent to your email</Text>
        </div>
        <div>
          <Input.OTP length={6} {...sharedProps} />
        </div>
      </div>
  )
}
export default VerifyOtp
