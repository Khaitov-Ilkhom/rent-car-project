import {useGetProfileQuery, useUpdateUserMutation} from "../../../redux/api/user-api.jsx";
import {Button, Form, Image, message, Modal, Upload} from "antd";
import userAvatar from "../../../images/User-avatar.png";
import {useEffect, useState} from "react";
import {UploadOutlined} from "@ant-design/icons";
import {useDeleteUploadFileMutation} from "../../../redux/api/file-api.jsx";

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [avatar, setAvatar] = useState('');
  const [userID, setUserID] = useState(null);

  const {data} = useGetProfileQuery()
  const [deleteFile] = useDeleteUploadFileMutation()
  const [updateUser, {data: userData, isSuccess, isError}] = useUpdateUserMutation()

  useEffect(() => {
    if (isSuccess) {
      message.success(userData?.message)
    }
    if (isError) {
      message.error(userData?.message)
    }
  }, [isSuccess, isError]);

  const showModal = () => {
    setUserID(data?.payload?._id)
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const deletedFile = (data) => {
    deleteFile({name: data?.name})
  }

  const onFinish = (values) => {
    updateUser({avatar: avatar, id: userID})
    setIsModalOpen(false);
  };
  const handleUploadFile = ({file}) => {
    if (file.status !== 'uploading') {
      const formData = new FormData();
      formData.append('file', file)
      fetch("http://13.51.206.62:8000/api/upload/single", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
        body: formData
      }).then(res => res.json())
          .then(data => {
            setAvatar(data?.payload)
          })
    }
  }

  return (
      <div className="w-full flex justify-center items-center flex-col mx-auto gap-4">
        <div>
          <div className="max-w-[200px] border rounded-full p-2 my-5">
            {
              data?.payload?.avatar ? <Image className="rounded-full" src={data?.payload?.avatar} alt="User avatar"/> :
                  <Image className="rounded-full" src={userAvatar} alt="User avatar"/>
            }
          </div>
          <div className="w-full flex justify-center">
            <Button onClick={showModal}>Upload Avatar</Button>
          </div>
        </div>
        <div className="w-full flex justify-around items-center gap-4">
          <div>
            <p className="py-2"><b>Name:</b> {data?.payload.first_name} {data?.payload.last_name}</p>
            <p className="capitalize"><b>Role:</b> {data?.payload.role}</p>
          </div>
          <div>
            <p className="py-2">
              <b>Registered:</b> {new Date(data?.payload.createdAt).toLocaleDateString('uz-UZ', {timeZone: 'Asia/Tashkent'})}
            </p>
            <p><b>Email:</b> {data?.payload.email}</p>
          </div>
        </div>
        <Modal
            centered
            title="Upload avatar"
            maskClosable={false}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={false}
            className="max-w-[350px]"
        >
          <Form
              onFinish={onFinish}
              layout="vertical"
              className="w-full flex justify-center items-center flex-col py-4"
          >
            <Form.Item
                label="Avatar"
                name="avatar"
                rules={[{required: true, message: "Please upload a avatar"}]}
            >
              <Upload listType="picture-card" maxCount={1} beforeUpload={() => false} onChange={handleUploadFile}
                      onRemove={(data) => deletedFile(data)}>
                <div>
                  <UploadOutlined/>
                  <div className="mt-2">Upload</div>
                </div>
              </Upload>
            </Form.Item>

            <Form.Item
                wrapperCol={{
                  span: 16,
                }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
  )
}
export default Profile
