import {Form, Select, InputNumber} from "antd";
import {useForm} from "antd/es/form/Form";

const {Option} = Select;

const CarFromStep1 = ({carData, setCarData}) => {
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
          <div className='flex items-center gap-4'>
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
                label="Capacity fuel (L)"
                name="capacity_fuel"
                rules={[
                  {required: true, message: "Please enter the usage"},
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
                  {required: true, message: "Please enter the usage"},
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

          <div className="flex items-center gap-4">
            <Form.Item
                className="flex-1"
                label="Purchase Price"
                name="price"
                rules={[
                  {required: true, message: "Please enter the purchase price"},
                ]}
            >
              <InputNumber
                  min={0}
                  formatter={(value) => `$ ${value}`}
                  parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                  placeholder="Enter purchase price"
                  className="text-[16px] border rounded border-slate-400 hover:border-slate-500 w-full"
              />
            </Form.Item>

            <Form.Item
                className="flex-1"
                label="Rent Price"
                name="rent_price"
                rules={[{required: true, message: "Please enter the rent price"}]}
            >
              <InputNumber
                  min={0}
                  formatter={(value) => `$ ${value}`}
                  parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                  placeholder="Enter rent price"
                  className="text-[16px] border rounded border-slate-400 hover:border-slate-500 w-full"
              />
            </Form.Item>

            <Form.Item
                className="flex-1"
                label="Discount Rent Price"
                name="discount"
                rules={[{required: false}]}
            >
              <InputNumber
                  min={0}
                  formatter={(value) => `$ ${value}`}
                  parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                  placeholder="Enter discount rent price (optional)"
                  className="text-[16px] border rounded border-slate-400 hover:border-slate-500 w-full"
              />
            </Form.Item>
          </div>
        </Form>
      </div>
  );
};

export default CarFromStep1;
