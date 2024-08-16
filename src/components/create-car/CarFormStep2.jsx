import {Form, Upload, InputNumber, Tag, Select} from "antd";
import {UploadOutlined} from "@ant-design/icons";
import {useForm} from "antd/es/form/Form";

const options = [
  { value: "black", label: "Black" },
  { value: "white", label: "White" },
  { value: "silver", label: "Silver" },
  { value: "gray", label: "Gray" },
  { value: "red", label: "Red" },
  { value: "blue", label: "Blue" },
  { value: "orange", label: "Orange" },
  { value: "brown", label: "Brown" },
  { value: "gold", label: "Gold" },
  { value: "beige", label: "Beige" },
  { value: "teal", label: "Teal" },
];

const CarFormStep2 = ({carData, setCarData}) => {
  const tagRender = (props) => {
    const { label, value, closable, onClose } = props;
    const onPreventMouseDown = (event) => {
      event.preventDefault();
      event.stopPropagation();
    };
    return (
        <Tag
            color={value}
            onMouseDown={onPreventMouseDown}
            closable={closable}
            onClose={onClose}
            style={{
              marginInlineEnd: 4,
            }}
        >
          {label}
        </Tag>
    );
  };

  const handleUploadFiles = ({file, fileList}) => {
    if (file.status !== 'uploading') {
      const formData = new FormData();

      for (let i = 0; i < fileList.length; i++) {
        formData.append('files', fileList[i].originFileObj)
      }

      fetch("http://13.51.206.62:8000/api/upload/multiple", {
        method: "POST",
        body: formData
      }).then(res => res.json())
          .then(data => {
            setCarData({...carData, images: data?.payload});
          })

    }
  }
  const handleUploadFile = ({file}) => {
    if (file.status !== 'uploading') {
      const formData = new FormData();
      formData.append('file', file)
      fetch("http://13.51.206.62:8000/api/upload/single", {
        method: "POST",
        body: formData
      }).then(res => res.json())
          .then(data => {
            setCarData({...carData, thumbnail: data?.payload});
          })

    }
  }
  const [form] = useForm()

  const changeFormData = () => {
    const values = form.getFieldsValue();
    setCarData({...carData, ...values, images: carData.images, thumbnail: carData.thumbnail});
  }

  return (
      <Form
          form={form}
          onValuesChange={changeFormData}
          layout="vertical"
          className="flex flex-col py-4"
          initialValues={carData}
      >
        <Form.Item
            label="Car Images"
            name="images"
            rules={[{required: true, message: "Please upload car images"}]}
        >
          <Upload listType="picture-card" multiple beforeUpload={() => false} onChange={handleUploadFiles}>
            <div>
              <UploadOutlined/>
              <div className="mt-2">Upload</div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item
            label="Thumbnail Image"
            name="thumbnail"
            rules={[{required: true, message: "Please upload a thumbnail image"}]}
        >
          <Upload className="w-[80px] " listType="picture-card" beforeUpload={() => false} onChange={handleUploadFile}>
            <div>
              <UploadOutlined/>
              <div className="mt-2">Upload</div>
            </div>
          </Upload>
        </Form.Item>

        <div className="flex items-center gap-4">
          <Form.Item
              className="flex-1"
              label="Primary Color"
              name="color"
              rules={[
                {required: true, message: "Please enter the primary color"},
              ]}
          >
            <Select
                className="text-[16px] border rounded border-slate-400 hover:border-slate-500 w-full"
                placeholder="Select color"
                style={{
                  width: "100%",
                }}
                options={options}
            />
          </Form.Item>

          <Form.Item
              className="flex-1 line-clamp-1"
              label="Available Colors (If HEX, use #hashtag)"
              name="colors"
              rules={[{required: true, message: "Please enter available colors"}]}
          >
            <Select
                className="text-[16px] border rounded border-slate-400 hover:border-slate-500 w-full"
                mode="tags"
                style={{
                  width: "100%",
                }}
                placeholder="Select Colors"
                options={options}
                tagRender={tagRender}
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
  );
};

export default CarFormStep2;
