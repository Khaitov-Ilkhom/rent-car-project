import {Button, DatePicker, Form, Input, message, Select, Typography} from "antd";
import {useEffect, useState} from "react";
import {useCreateOrderMutation} from "../../redux/api/orders-api.jsx";
import {useGetProfileQuery} from "../../redux/api/user-api.jsx";
import moment from "moment";
import {capitalPasswordValidation} from "../../utils/VerifyPassword.js";

const {Title, Text} = Typography;
const {RangePicker} = DatePicker;

const OrderForm = ({oneDayPrice, carId}) => {
  const [total, setTotal] = useState(0);
  const [dateTo, setDateTo] = useState(null);
  const [dateFrom, setDateFrom] = useState(null);

  console.log(dateFrom)

  const [createdOrder, {data, isSuccess, isError, error}] = useCreateOrderMutation();
  const {data: userData} = useGetProfileQuery()

  const onFinish = (values) => {
    const licence_num = (values.licence_number).toUpperCase()
    createdOrder({
      user_id: userData?.payload?._id,
      car_id: carId,
      total_price: total,
      payment_status: "paid",
      payment_method: values.payment_method,
      fromDate: dateFrom,
      toDate: dateTo,
      driver_licence_number: licence_num
    })
  };

  const getDate = (dates, dateStrings) => {
    const date1 = moment(dateStrings[0]);
    const date2 = moment(dateStrings[1]);
    setDateTo(date2)
    setDateFrom(date1);
    if (date2 > date1) {
      const differenceInDays = date2.diff(date1, 'days');
      setTotal(differenceInDays * oneDayPrice)
    }
  }

  useEffect(() => {
    if (isSuccess) {
      message.success(data?.message)
    }
    if (isError) {
      message.error(error.data?.message)
    }
  }, [isSuccess, isError, data, error]);

  return (
      <div className="">
        <div className="text-center">
          <Title>Create Order</Title>
        </div>
        <Form
            className="w-[450px]"
            name="Create order"
            wrapperCol={{
              span: 24,
            }}
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
        >
          <Form.Item
              className="!mb-4"
              name="date_range"
              label="Date Range"
              rules={[{required: true, message: 'Please select the date range!'}]}
          >
            <RangePicker className="w-full py-[6px] border border-slate-400 hover:!border-slate-400"
                         onChange={getDate}/>
          </Form.Item>

          <Form.Item
              className="!mb-4"
              name="payment_method"
              label="Payment Method"
              rules={[{required: true, message: 'Please select the payment method!'}]}
          >
            <Select
                className="text-[16px] py-[16px] border rounded border-slate-400 hover:border-slate-500 w-full bg-white"
                placeholder="Select payment method">
              <Option value="cash">Cash</Option>
              <Option value="credit_card">Credit Card</Option>
              <Option value="bank_transfer">Bank Transfer</Option>
            </Select>
          </Form.Item>

          <Form.Item
              className="!mb-4"
              label="Driver license"
              name="licence_number"
              rules={[
                {
                  required: true,
                  message: 'Please input your driver\'s license!',
                },
                capitalPasswordValidation
              ]}
          >
            <Input className="text-[16px] border rounded border-slate-400 hover:border-slate-500"
                   placeholder="AA123456"/>
          </Form.Item>

          <div className="text-center mb-4">
            <Text className="text-xl"><strong>Car total:</strong> ${total}</Text>
          </div>

          <Form.Item>
            <Button
                className="w-full bg-gray-500 text-white hover:!bg-white hover:!text-gray-500 hover:!border-gray-500 py-5"
                htmlType="submit">
              Create order
            </Button>
          </Form.Item>
        </Form>
      </div>
  )
}
export default OrderForm