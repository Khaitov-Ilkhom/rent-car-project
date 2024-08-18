import {Form, Input, Select} from "antd";
import {useForm} from "antd/es/form/Form";
import {useGetCategoriesQuery} from "../../redux/api/categories.jsx";

const {TextArea} = Input;
const {Option} = Select;

const CarFromStep1 = ({carData, setCarData}) => {
  const {data} = useGetCategoriesQuery();
  const [form] = useForm()

  const changeFormData = () => {
    const values = form.getFieldsValue();
    setCarData({...carData, ...values, images: carData.images, thumbnail: carData.thumbnail});
  }

  const currentYear = new Date().getFullYear();
  let years = [];
  for (let i = 1980; i <= currentYear; i++) {
    years.push(i);
  }
  return (
      <div className="mt-5">
        <Form
            form={form}
            onValuesChange={changeFormData}
            layout="vertical"
            className="flex flex-col !text-[16px]"
            initialValues={carData}
        >
          <div className="flex gap-4">
            <Form.Item
                className="flex-1"
                label="Car Name"
                name="name"
                rules={[{required: true, message: "Please enter the car name"}]}
            >
              <Input className="text-[16px] border rounded border-slate-400 hover:border-slate-500"
                     placeholder="Enter car name"/>
            </Form.Item>

            <Form.Item
                className="flex-1"
                label="Model"
                name="model"
                rules={[{required: true, message: "Please enter the model"}]}
            >
              <Input className="text-[16px] border rounded border-slate-400 hover:border-slate-500"
                     placeholder="Enter car model"/>
            </Form.Item>
          </div>

          <div className="flex items-center gap-4">
            <Form.Item
                className="flex-1"
                label="Year"
                name="year"
                rules={[
                  {
                    required: true,
                    message: "Please enter the manufacturing year",
                  },
                ]}
            >
              <Select
                  placeholder="Select a year"
                  className="text-[16px] py-[16px] border rounded border-slate-400 hover:border-slate-500 w-full"
              >
                {
                  years.map((year) => (
                      <Option key={year} value={year}>{year}</Option>
                  ))
                }
              </Select>
            </Form.Item>

            <Form.Item
                className="flex-1"
                label="Number of Seats"
                name="seats"
                rules={[
                  {required: true, message: "Please enter the number of seats"},
                ]}
            >
              <Select className="text-[16px] py-[16px] border rounded border-slate-400 hover:border-slate-500"
                      placeholder="Enter number of seats">
                <Option value={2}>2</Option>
                <Option value={5}>5</Option>
                <Option value={7}>7</Option>
                <Option value={9}>9</Option>
              </Select>
            </Form.Item>

            <Form.Item
                className="flex-1"
                label="Category"
                name="category"
                rules={[{required: true, message: "Please select a category"}]}
            >
              <Select className="text-[16px] py-[16px] border rounded border-slate-400 hover:border-slate-500 w-full"
                      placeholder="Select category">
                {
                  data?.payload?.map(category =>
                      <Option className="capitalize" key={category._id} value={category._id}>{category.name}</Option>
                  )
                }
              </Select>
            </Form.Item>
          </div>

          <Form.Item
              label="Description"
              name="description"
              rules={[
                {required: true, message: "Please enter the car description"},
              ]}
          >
            <TextArea className="text-[16px] border rounded border-slate-400 hover:border-slate-500"
                      autoSize={{minRows: 3, maxRows: 4}}
                      placeholder="Enter car description"/>
          </Form.Item>
        </Form>
      </div>
  );
};

export default CarFromStep1;
