import {useGetProfileQuery} from "../../../redux/api/user-api.jsx";
import {Image} from "antd";
import userAvatar from "../../../images/User-avatar.png";

const Profile = () => {
  const {data} = useGetProfileQuery()

  return (
      <div className="w-full flex justify-center items-center flex-col mx-auto gap-4">
        <div className="max-w-[200px] border rounded-full p-4 my-5">
          {
            data?.payload?.avatar ? <Image src={data?.payload?.avatar} alt="User avatar" /> :
                <Image className="rounded-full" src={userAvatar} alt="User avatar" />
          }
        </div>
        <div className="w-full flex justify-around items-center gap-4">
          <div>
            <p className="py-2"><b>Name:</b> {data?.payload.first_name} {data?.payload.last_name}</p>
            <p className="capitapze"><b>Role:</b> {data?.payload.role}</p>
          </div>
          <div>
            <p className="py-2"><b>Registered:</b> {new Date(data?.payload.createdAt).toLocaleDateString('uz-UZ', {timeZone: 'Asia/Tashkent'})}</p>
            <p><b>Email:</b> {data?.payload.email}</p>
          </div>
        </div>
      </div>
  )
}
export default Profile
