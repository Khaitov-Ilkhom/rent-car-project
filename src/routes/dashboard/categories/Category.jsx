import {useDeletedCategoryMutation, useGetCategoriesQuery} from "../../../redux/api/categories-api.jsx";
import {Button, Image, message, Modal, Table} from "antd";
import {useEffect, useState} from "react";
import CategoryForm from "../../../components/category-form/CategoryForm.jsx";

const Category = () => {
  const [carData, setCarData] = useState(null);
  const [isModal, setIsModal] = useState(false);
  const [modal, setModal] = useState(false);
  const [carId, setCarId] = useState(null);
  const {data} = useGetCategoriesQuery()
  const [deleteCategory, {data: deleteCar, isSuccess, isError}] = useDeletedCategoryMutation()
  const columns = [
    {
      title: "No",
      key: "id",
      render: (text, record, index) => index + 1
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <span className="capitalize">{text}</span>,
    },
    {
      title: "Created",
      key: "created",
      dataIndex: "createdAt",
      render: (createdAt) => <span>{new Date(createdAt).toLocaleDateString('uz-UZ', {timeZone: 'Asia/Tashkent'})}</span>
    },
    {
      title: "Updated",
      key: "updated",
      dataIndex: "updatedAt",
      render: (updatedAt) => <span>{new Date(updatedAt).toLocaleDateString('uz-UZ', {timeZone: 'Asia/Tashkent'})}</span>
    },
    {
      title: "Image",
      key: "image",
      dataIndex: "image",
      render: (image) => <Image.PreviewGroup>
        <Image key={image} className="!w-[60px] !h-[40px] object-contain" src={image}/>
      </Image.PreviewGroup>,
    },
    {
      title: "Actions",
      key: "actions",
      render: (car) => <div className="flex items-center gap-2 ">
        <Button onClick={() => setCarData(car)}>Edit</Button>
        <Button danger onClick={() => openModal(car)}>Delete</Button>
      </div>
    }
  ]

  const showModal = () => {
    setIsModal(true)
    setCarData(null)
  }
  const handleCancel = () => {
    setIsModal(false);
    setCarData(null);
  };

  // delete category
  const openModal = (car) => {
    setCarId(car._id)
    setModal(true)
  }
  const closeModal = () => {
    setModal(false)
  }
  const handleOk = () => {
    deleteCategory(carId)
  }

  useEffect(() => {
    if (isSuccess) {
      message.success(deleteCar?.message);
      setModal(false)
    }
    if (isError) {
      message.error(deleteCar?.message);
    }
  }, [isSuccess, isError]);

  return (
      <div>
        <div className="w-full m-auto border-b">
          <Button className="mb-2" onClick={() => showModal()}>Create new category</Button>
        </div>
        <div className="mt-4">
          <Table pagination={{pageSize: 4}} columns={columns}
                 dataSource={data?.payload.map(car => ({key: car._id, ...car}))}/>
        </div>
        <Modal
            centered
            title="Create category"
            open={isModal || Boolean(carData)}
            onCancel={handleCancel}
            maskClosable={false}
            footer={false}
            forceRender={true}
        >
          <CategoryForm carData={carData} setCarData={setCarData}  setIsModal={setIsModal} modal={modal}/>
        </Modal>
        <Modal
            centered
            title="Deleted category"
            open={modal}
            onCancel={closeModal}
            onOk={handleOk}
            maskClosable={false}
        >
          <span>Are you sure you want to delete this category</span>
        </Modal>
      </div>
  )
}
export default Category