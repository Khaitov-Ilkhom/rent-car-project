import {Form, Input, Select, DatePicker, InputNumber} from "antd";

const {TextArea} = Input;
const {Option} = Select;

const CarFromStep1 = () => {
  const onChangeYear = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
      <div className="mt-5">
        <Form layout="vertical" className="flex flex-col !text-[16px]">
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
                label="Category"
                name="category"
                rules={[{required: true, message: "Please select a category"}]}
            >
              <Select className="text-[16px] border rounded border-slate-400 hover:border-slate-500 w-full"
                      placeholder="Select category">
                <Option value="suv">SUV</Option>
                <Option value="sedan">Sedan</Option>
                <Option value="hatchback">Hatchback</Option>
                <Option value="coupe">Coupe</Option>
                <Option value="sport">Sport</Option>
                <Option value="pickup">Pickup</Option>
                <Option value="Minivan">Minivan</Option>
                <Option value="Crossover">Crossover</Option>
              </Select>
            </Form.Item>
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
              <DatePicker className="text-[16px] border rounded border-slate-400 hover:border-slate-500 w-full"
                          onChange={onChangeYear} picker="year"/>
            </Form.Item>

            <Form.Item
                className="flex-1"
                label="Number of Seats"
                name="seats"
                rules={[
                  { required: true, message: "Please enter the number of seats" },
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
                label="Fuel Type"
                name="fuel"
                rules={[{ required: true, message: "Please select the fuel type" }]}
            >
              <Select className="text-[16px] border rounded border-slate-400 hover:border-slate-500" placeholder="Select fuel type">
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
                  { required: true, message: "Please select the transmission type" },
                ]}
            >
              <Select className="text-[16px] border rounded border-slate-400 hover:border-slate-500" placeholder="Select transmission type">
                <Option value="manual">Manual</Option>
                <Option value="automatic">Automatic</Option>
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
            <TextArea className="text-[16px] border rounded border-slate-400 hover:border-slate-500" rows={4}
                      placeholder="Enter car description"/>
          </Form.Item>
        </Form>
      </div>
  );
};

export default CarFromStep1;
