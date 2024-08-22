import {Button, Modal, Steps, message} from "antd";
import {useEffect, useState} from "react";
import CarFormStep1 from "../../../components/create-car/CarFormStep1.jsx";
import CarFormStep2 from "../../../components/create-car/CarFormStep2.jsx";
import CarFormStep3 from "../../../components/create-car/CarFormStep3.jsx";
import {useCreateCarMutation} from "../../../redux/api/car-api.jsx";
import AllCarsTable from "../../../components/all-car-table/AllCarsTable.jsx";

const steps = [
  {
    title: 'First',
    content: (carData, setCarData) => <CarFormStep1 carData={carData} setCarData={setCarData}/>,
  },
  {
    title: 'Second',
    content: (carData, setCarData) => <CarFormStep2 carData={carData} setCarData={setCarData}/>,
  },
  {
    title: 'Last',
    content: (carData, setCarData) => <CarFormStep3 carData={carData} setCarData={setCarData}/>,
  },
];

const CarRent = () => {
  const [createCar, {data, isSuccess, isError}] = useCreateCarMutation()
  const [isModal, setIsModal] = useState(false);
  const [carData, setCarData] = useState({
    name: null,
    images: [],
    description: null,
    price: null,
    status: 'active',
    rent_price: null,
    color: null,
    colors: [],
    model: null,
    category: null,
    year: null,
    fuel: null,
    transmission: null,
    seats: null,
    thumbnail: null,
    discount: null,
    capacity_fuel: null,
    usage_per_km: null,
  });
  const [current, setCurrent] = useState(0);

  const showModal = () => {
    setIsModal(true);
  };
  const handleCancel = () => {
    setIsModal(false);

  };
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const createdCar = () => {
    createCar(carData)
  }

  useEffect(() => {
    if (isSuccess) {
      message.success(data?.message);
      setIsModal(false)
    }
    if (isError) {
      message.error('Error creating Car');
    }
  }, [isSuccess, isError]);
  return (
      <div className="p-6">
        <div className="w-full m-auto border-b">
          <Button className="mb-2 text-white bg-gray-600 hover:!text-gray-600 hover:!bg-white !border-gray-600 transition duration-500" onClick={showModal}>Create new car</Button>
        </div>
        <div>
          <AllCarsTable/>
        </div>
        <Modal className="!w-[800px]" centered title="Create car" open={isModal} onCancel={handleCancel}
               maskClosable={false} footer={false}>
          <div className="w-full">
            <Steps percent={((current + 1) / steps.length) * 100} current={current} items={items}/>
            <div>{steps[current].content(carData, setCarData)}</div>
            <div className="text-end">
              {current > 0 && (
                  <Button
                      className="text-gray-600 bg-white hover:!text-white hover:!bg-gray-600 !border-[#556275] transition duration-700 mx-[8px]"
                      onClick={() => prev()}
                  >
                    Previous
                  </Button>
              )}
              {current < steps.length - 1 && (
                  <Button className="bg-[#556275] text-white hover:!bg-white !border-[#556275] hover:!text-[#556275] transition duration-200" onClick={() => next()}>
                    Next
                  </Button>
              )}
              {current === steps.length - 1 && (
                  <Button className="bg-[#556275] text-white hover:!bg-white !border-[#556275] hover:!text-[#556275] transition duration-200" onClick={createdCar}>
                    Done
                  </Button>
              )}
            </div>
          </div>
        </Modal>
      </div>
  )
}
export default CarRent