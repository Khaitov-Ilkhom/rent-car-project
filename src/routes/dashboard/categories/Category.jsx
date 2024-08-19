import {useGetCategoriesQuery} from "../../../redux/api/categories.jsx";
import {Button, Image, Table} from "antd";

const Category = () => {
  const {data} = useGetCategoriesQuery()
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
        <Image key={image} width={60} src={image}/>
      </Image.PreviewGroup>,
    },
    {
      title: "Actions",
      key: "actions",
      render: (car) => <div className="flex items-center gap-2 ">
        <Button onClick={() => updateCar(car)}>Edit</Button>
        <Button danger onClick={() => showModal(car)}>Delete</Button>
      </div>
    }
  ]

  return (
      <div>
        <div className="mt-4">
          <Table pagination={{pageSize: 4}} columns={columns}
                 dataSource={data?.payload.map(car => ({key: car._id, ...car}))}/>
        </div>
      </div>
  )
}
export default Category