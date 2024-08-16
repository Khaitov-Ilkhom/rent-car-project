import {Form, Input, Select, InputNumber,} from "antd";
import {useForm} from "antd/es/form/Form";
import {useGetCategoriesQuery} from "../../redux/api/categories.jsx";

const {TextArea} = Input;
const {Option} = Select;

const CarFromStep1 = ({carData, setCarData}) => {
  const {data, isLoading} = useGetCategoriesQuery();
  const [form] = useForm()

  const changeFormData = () => {
    const values = form.getFieldsValue();
    setCarData({...carData, ...values, images: carData.images, thumbnail: carData.thumbnail});
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

            <Form.Item
                className="flex-1"
                label="Number of Seats"
                name="seats"
                rules={[
                  {required: true, message: "Please enter the number of seats"},
                ]}
            >
              <InputNumber
                  min={1}
                  placeholder="Enter number of seats"
                  className="text-[16px] border rounded border-slate-400 hover:border-slate-500 w-full"
              />
            </Form.Item>
          </div>

          <div className="flex items-center gap-4">
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

            <Form.Item
                className="flex-1"
                label="Fuel Type"
                name="fuel"
                rules={[{required: true, message: "Please select the fuel type"}]}
            >
              <Select className="text-[16px] py-[16px] border rounded border-slate-400 hover:border-slate-500"
                      placeholder="Select fuel type">
                <Option value="petrol">Petrol</Option>
                <Option value="diesel">Diesel</Option>
                <Option value="electric">Electric</Option>
                <Option value="hybrid">Hybrid</Option>
              </Select>
            </Form.Item>

            <Form.Item
                className="flex-1"
                label="Transmission Type"
                name="transmission"
                rules={[
                  {required: true, message: "Please select the transmission type"},
                ]}
            >
              <Select className="text-[16px] py-[16px] border rounded border-slate-400 hover:border-slate-500"
                      placeholder="Select transmission type">
                <Option value="manual">Manual</Option>
                <Option value="automatic">Automatic</Option>
              </Select>
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
              <InputNumber min={1980} max={new Date().getFullYear() + 1}
                           className="text-[16px] border rounded border-slate-400 hover:border-slate-500 w-full"
                           placeholder="Enter year 1980-2025"/>
            </Form.Item>

            <Form.Item
                className="flex-1"
                label="Capacity fuel (L)"
                name="capacity_fuel"
                rules={[
                  { required: true, message: "Please enter the usage" },
                ]}
            >
              <InputNumber
                  min={0}
                  placeholder="Enter fuel tank capacity"
                  className="w-full text-[16px] border rounded border-slate-400 hover:border-slate-500"
                  formatter={(value) => `${value} L`}
                  parser={(value) => value.replace(/\s?L|(,*)/g, "")}
              />
            </Form.Item>

            <Form.Item
                className="flex-1"
                label="Usage (L/km)"
                name="usage_per_km"
                rules={[
                  { required: true, message: "Please enter the usage" },
                ]}
            >
              <InputNumber
                  min={0}
                  placeholder="Enter fuel tank capacity"
                  className="w-full text-[16px] border rounded border-slate-400 hover:border-slate-500"
                  formatter={(value) => `${value} L`}
                  parser={(value) => value.replace(/\s?L|(,*)/g, "")}
              />
            </Form.Item>
          </div>


          <Form.Item
              label="Description"
              name="description"
              rules={[
                {required: true, message: "Please enter the car description"},
              ]}
          >
            <TextArea  className="text-[16px] border rounded border-slate-400 hover:border-slate-500" autoSize={{minRows: 3, maxRows: 4}}
                      placeholder="Enter car description"/>
          </Form.Item>
        </Form>
      </div>
  );
};

export default CarFromStep1;
