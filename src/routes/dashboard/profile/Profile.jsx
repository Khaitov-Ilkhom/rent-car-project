import {useGetProfileQuery} from "../../../redux/api/user-api.jsx";

const Profile = () => {
  const {data} = useGetProfileQuery()
  console.log(data)

  return (
      <div>

      </div>
  )
}
export default Profile
