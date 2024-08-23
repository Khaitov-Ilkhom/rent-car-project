import {useGetAllOrdersQuery} from "../../../redux/api/orders-api.jsx";
import {Button, Image, Table} from "antd";

const Orders = () => {
  const {data} = useGetAllOrdersQuery()
  const columns = [
    {
      title: "No",
      key: "id",
      render: (text, record, index) => index + 1
    },
    {
      title: "User",
      dataIndex: ["user_id", "first_name"],
      key: 'user',
      render: (first_name) => <span className="capitalize">{first_name}</span>
    },
    {
      title: "Car name",
      key: "car",
      dataIndex: ["car_id", "name"],
      render: (name) => <span className="capitalize">{name}</span>,
    },
    {
      title: "Total price",
      key: "total_price",
      dataIndex: "total_price",
      render: (text) => <span className="capitalize">${text}</span>,
    },
    {
      title: "From date",
      key: "from_date",
      dataIndex: "fromDate",
      render: (text) => <span className="capitalize">{text}</span>,
    },
    {
      title: "To date",
      key: "to_date",
      dataIndex: "toDate",
      render: (text) => <span className="capitalize">{text}</span>,
    },
    {
      title: "Car image",
      key: "car_image",
      dataIndex: ["car_id", "thumbnail"],
      render: (thumbnail) => <Image.PreviewGroup>
        <Image key={thumbnail} width={70} src={thumbnail}/>
      </Image.PreviewGroup>,
    },
    {
      title: "Actions",
      key: "actions",
      render: () => <div className="flex items-center gap-2 ">
        <Button className="!border-gray-300 hover:!text-gray-500">Edit</Button>
        <Button danger>Delete</Button>
      </div>
    }
  ]
  return (
      <div className="p-6">
        <div>
          <Table pagination={{pageSize: 6}} columns={columns}
                 dataSource={data?.payload.map(order => ({key: order._id, ...order}))}/>
        </div>
      </div>
  )
}
export default Orders
