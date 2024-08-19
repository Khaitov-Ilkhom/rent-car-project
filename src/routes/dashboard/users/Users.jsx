import {useGetAllUsersQuery} from "../../../redux/api/user-api.jsx";
import {Button, Image, Table} from "antd";

const Profile = () => {
  const {data} = useGetAllUsersQuery()
  const columns = [
    {
      title: "No",
      key: "id",
      render: (text, record, index) => index + 1
    },
    {
      title: "First Name",
      dataIndex: 'first_name',
      key: 'first name',
      render: (text) => <span className="capitalize">{text}</span>,
    },
    {
      title: "Last Name",
      dataIndex: 'last_name',
      key: 'last name',
      render: (text) => <span className="capitalize">{text}</span>,
    },
    {
      title: "Email",
      key: "email",
      dataIndex: "email",
      render: (email) => <span>{email}</span>
    },
    {
      title: "Role",
      dataIndex: 'role',
      key: 'role',
      render: (text) => <span className="capitalize">{text}</span>,
    },
    {
      title: "Created",
      key: "created",
      dataIndex: "createdAt",
      render: (createdAt) => <span>{new Date(createdAt).toLocaleDateString('uz-UZ', {timeZone: 'Asia/Tashkent'})}</span>
    },
    {
      title: "Avatar",
      key: "avatar",
      dataIndex: "avatar",
      render: (avatar) => <Image.PreviewGroup>
        <Image key={avatar} width={60} src={avatar}/>
      </Image.PreviewGroup>,
    },
    {
      title: "Actions",
      key: "actions",
      render: (car) => <div className="flex items-center gap-2 ">
        <Button danger onClick={() => showModal(car)}>Delete</Button>
      </div>
    }
  ]

  return (
      <div>
        <div className="mt-4">
          <Table pagination={{pageSize: 5}} columns={columns}
                 dataSource={data?.payload.map(car => ({key: car._id, ...car}))}/>
        </div>
      </div>
  )
}
export default Profile
