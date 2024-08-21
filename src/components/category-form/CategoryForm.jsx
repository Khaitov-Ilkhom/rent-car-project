import {Button, Form, Input, message, Upload} from "antd";
import {UploadOutlined} from "@ant-design/icons";
import {useCreateCategoryMutation} from "../../redux/api/categories.jsx";
import {useEffect, useState} from "react";
import {useForm} from "antd/es/form/Form";
import {useDeleteUploadFileMutation} from "../../redux/api/file-api.jsx";

const CategoryForm = ({setIsModal}) => {
  const [form] = useForm()
  const [categoryImage, setCategoryImage] = useState('');
  const [createCategory, {data: categoryData, isSuccess, isError}] = useCreateCategoryMutation()
  const [deleteFile] = useDeleteUploadFileMutation()

  const onFinish = (values) => {
    createCategory({name: values.name, image: categoryImage, status: "active"})
  };
  const deletedFile = (data) => {
    deleteFile({name: data?.name})
  }
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
            setCategoryImage(data?.payload)
          })

    }
  }

  useEffect(() => {
    if (isSuccess) {
      message.success(categoryData?.message);
      setIsModal(false)
      form.resetFields()
    }
    if (isError) {
      message.error("Error creating category");
    }
  }, [isSuccess, isError]);

  return (
      <div>
        <Form
            form={form}
            className="w-full"
            layout="vertical"
            wrapperCol={{
              span: 24,
            }}

            onFinish={onFinish}
            autoComplete="off"
        >
          <Form.Item
              label="Category name"
              name="name"
              rules={[
                {
                  min: 4,
                  required: true,
                  message: 'Please input category name!',
                },
              ]}
          >
            <Input className="text-[16px] border rounded border-slate-400 hover:border-slate-500"
                   placeholder="Enter car category"/>
          </Form.Item>

          <Form.Item
              label="Category image"
              name="image"
              rules={[{required: true, message: "Please upload a category image"}]}
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
                span: 24,
              }}
          >
            <Button
                className="w-full bg-gray-500 text-white hover:!bg-white hover:!text-gray-500 hover:!border-gray-500"
                htmlType="submit">
              Create new category
            </Button>
          </Form.Item>
        </Form>
      </div>
  )
}
export default CategoryForm
