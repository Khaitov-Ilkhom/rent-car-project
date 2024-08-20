import {useDeletedUserMutation, useGetAllUsersQuery} from "../../../redux/api/user-api.jsx";
import {Button, Image, Modal, Table} from "antd";
import userAvatar from "../../../images/User-avatar.png"
import {useState} from "react";

const Profile = () => {
  const {data} = useGetAllUsersQuery()
  const [deleteUser] = useDeletedUserMutation()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userId, setUserId] = useState(null);
  const showModal = (users) => {
    setUserId(users._id)
    setIsModalOpen(true);
  };
  const handleOk = () => {
    deleteUser(userId)
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
      render: () => <Image.PreviewGroup>
        <Image key={userAvatar} width={30} src={userAvatar}/>
      </Image.PreviewGroup>,
    },
    {
      title: "Actions",
      key: "actions",
      render: (users) => <div className="flex items-center gap-2 ">
        <Button danger onClick={() => showModal(users)}>Delete</Button>
      </div>
    }
  ]

  return (
      <div>
        <div className="mt-4">
          <Table pagination={{pageSize: 5}} columns={columns}
                 dataSource={data?.payload.map(users => ({key: users._id, ...users}))}/>
        </div>
        <Modal
            centered
            title="Deleted User"
            maskClosable={false}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
        >
          <span>Are you sure you want to delete this user</span>
        </Modal>
      </div>
  )
}
export default Profile
