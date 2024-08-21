import {useDeletedUserMutation, useGetAllUsersQuery, usePromoteUserMutation} from "../../../redux/api/user-api.jsx";
import {Button, Image, message, Modal, Table} from "antd";
import userAvatar from "../../../images/User-avatar.png"
import {useEffect, useState} from "react";
import * as userData from "antd";

const Profile = () => {
  const {data} = useGetAllUsersQuery()
  const [promotedUser, {data: promoteData, isSuccess: promoteSuccess, isError: promoteError}] = usePromoteUserMutation()
  const [deleteUser, {data: deleteData, isSuccess, isError}] = useDeletedUserMutation()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userId, setUserId] = useState(null);
  const [promUser, setPromUser] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
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

  const promoteUser = (user) => {
    setModalOpen(true)
    setPromUser(user)
  }
  const handleOkey = () => {
    if (promUser.role !== "admin") {
      promotedUser(promUser._id)
    } else {
      message.error("This user is admin you cannot give him admin")
    }
  }
  const closeModal = () => {
    setModalOpen(false);
  }

  useEffect(() => {
    if (isSuccess) {
      message.success(deleteData?.message)
    }
    if (isError) {
      message.error("Error deleting user");
    }
  }, [isSuccess, isError]);
  useEffect(() => {
    if (promoteSuccess) {
      message.success(promoteData?.message)
      setModalOpen(false)
    }
    if (promoteError) {
      message.error(promoteData?.message)
    }
  }, [promoteSuccess, promoteError]);

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
        <Button disabled={users.role === "admin"} type="primary" onClick={() => promoteUser(users)}>Promote</Button>
        <Button danger onClick={() => showModal(users)}>Delete</Button>
      </div>
    }
  ]

  return (
      <div>
        <div className="mt-4">
          <Table pagination={{pageSize: 8}} columns={columns}
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
        <Modal
            centered
            title="Deleted User"
            maskClosable={false}
            open={modalOpen}
            onOk={handleOkey}
            onCancel={closeModal}
        >
          <span>Do you want to give the user the admin role?</span>
        </Modal>
      </div>
  )
}
export default Profile
