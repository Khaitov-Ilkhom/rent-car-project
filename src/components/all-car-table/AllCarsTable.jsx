import {Button, Image, Modal, Table} from "antd";
import {useState} from "react";
import {useDeleteCarMutation, useGetAllCarQuery} from "../../redux/api/car-api.jsx";

const AllCarsTable = () => {
  const {data} = useGetAllCarQuery();
  const [deletedCar] = useDeleteCarMutation()

  const [carId, setCarId] = useState(null);
  const showModal = (car) => {
    setCarId(car._id)
    setIsModalOpen(true);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOk = () => {
    deletedCar(carId)
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
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <span className="capitalize">{text}</span>,
    },
    {
      title: "Model",
      dataIndex: 'model',
      key: 'model',
      render: (text) => <span className="capitalize">{text}</span>
    },
    {
      title: "Price",
      key: "price",
      dataIndex: "price",
      render: (text) => <span className="capitalize">${text}</span>,
    },
    {
      title: "Rent price",
      key: "rent_price",
      dataIndex: "rent_price",
      render: (text) => <span className="capitalize">${text}</span>,
    },
    {
      title: "Year",
      key: "year",
      dataIndex: "year",
      render: (text) => <span className="capitalize">{text}</span>,
    },
    {
      title: "Fuel",
      key: "fuel",
      dataIndex: "fuel",
      render: (text) => <span className="capitalize">{text}</span>,
    },
    {
      title: "Seats",
      key: "seats",
      dataIndex: "seats",
      render: (text) => <span className="capitalize">{text}</span>,
    },
    {
      title: "Image",
      key: "thumbnail",
      dataIndex: "thumbnail",
      render: (thumbnail) => <Image.PreviewGroup>
        <Image key={thumbnail} width={70} src={thumbnail}/>
      </Image.PreviewGroup>,
    },
    {
      title: "Actions",
      key: "actions",
      render: (car) => <div className="flex items-center gap-2 ">
        <Button className="!border-gray-300 hover:!text-gray-500">Edit</Button>
        <Button danger onClick={() => showModal(car)}>Delete</Button>
      </div>
    }
  ]
  return (
      <div>
        <div className="mt-4">
          <Table pagination={{pageSize: 6}} columns={columns}
                 dataSource={data?.payload.map(car => ({key: car._id, ...car}))}/>
        </div>
        <Modal
            centered
            title="Deleted car"
            maskClosable={false}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
        >
          <span>Are you sure you want to delete this car</span>
        </Modal>
      </div>
  )
}
export default AllCarsTable
