import { Form, Input, Upload, InputNumber, ColorPicker } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const CarFormStep2 = () => {
  return (
      <Form layout="vertical" className="flex flex-col py-4">
        <Form.Item
            label="Car Images"
            name="images"
            rules={[{ required: true, message: "Please upload car images" }]}
        >
          <Upload listType="picture-card" multiple beforeUpload={() => false}>
            <div>
              <UploadOutlined />
              <div className="mt-2">Upload</div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item
            label="Thumbnail Image"
            name="thumbnail"
            rules={[{ required: true, message: "Please upload a thumbnail image" }]}
        >
          <Upload className="w-[80px] " listType="picture-card" beforeUpload={() => false}>
            <div>
              <UploadOutlined />
              <div className="mt-2">Upload</div>
            </div>
          </Upload>
        </Form.Item>

        <div className="flex items-center gap-4">
          <Form.Item
              className="flex-1 items-start"
              label="Primary Color"
              name="color"
              rules={[
                { required: true, message: "Please enter the primary color" },
              ]}
          >
            <ColorPicker className="text-[16px] border rounded border-slate-400 hover:border-slate-500 w-full py-1" defaultValue="#1677ff" showText />
          </Form.Item>

          <Form.Item
              className="flex-1"
              label="Fuel Tank Capacity (Liters)"
              name="capacity_fuel"
              rules={[
                { required: true, message: "Please enter the fuel tank capacity" },
              ]}
          >
            <InputNumber
                min={0}
                placeholder="Enter fuel tank capacity"
                className="text-[16px] border rounded border-slate-400 hover:border-slate-500 w-full"
            />
          </Form.Item>

          <Form.Item
              className="flex-1"
              label="Available Colors (HEX Code)"
              name="colors"
              rules={[{ required: true, message: "Please enter available colors" }]}
          >
            <Input className="text-[16px] border rounded border-slate-400 hover:border-slate-500" placeholder="Enter available colors (comma separated)" />
          </Form.Item>
        </div>

        <div className="flex items-center gap-4">
          <Form.Item
              className="flex-1"
              label="Purchase Price"
              name="price"
              rules={[
                { required: true, message: "Please enter the purchase price" },
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
              rules={[{ required: true, message: "Please enter the rent price" }]}
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
              name="discount_rent_price"
              rules={[{ required: false }]}
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
  );
};

export default CarFormStep2;
