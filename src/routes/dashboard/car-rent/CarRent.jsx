import {FaCar, FaBuilding, FaTags, FaCalendarAlt, FaPalette, FaDollarSign, FaGasPump, FaCogs, FaChair,} from "react-icons/fa";
import {Button, Steps} from "antd";
import {useState} from "react";
import CarFormStep1 from "../../../components/create-car/CarFormStep1.jsx";
import CarFormStep2 from "../../../components/create-car/CarFormStep2.jsx";

const steps = [
  {
    title: 'First',
    content: (carData, setCarData) => <CarFormStep1 carData={carData} setCarData={setCarData} />,
  },
  {
    title: 'Second',
    content: (carData, setCarData) => <CarFormStep2 carData={carData} setCarData={setCarData}/>,
  },
];

const CarRent = () => {
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

  console.log(carData)

  const [current, setCurrent] = useState(0);
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

  return (
      <div className="flex justify-between items-start w-full gap-5 p-2">
        <div className="w-[70%]">
          <Steps current={current} items={items}/>
          <div>{steps[current].content(carData, setCarData)}</div>
          <div className="text-end">
            {current > 0 && (
                <Button
                    style={{
                      margin: '0 8px',
                    }}
                    onClick={() => prev()}
                >
                  Previous
                </Button>
            )}
            {current < steps.length - 1 && (
                <Button type="primary" onClick={() => next()}>
                  Next
                </Button>
            )}
            {current === steps.length - 1 && (
                <Button type="primary" onClick={() => message.success('Processing complete!')}>
                  Done
                </Button>
            )}
          </div>
        </div>
        <div className="w-[30%]">
          <div className="flex-1 px-4">
            <h1 className="mb-6 text-xl font-semibold text-gray-700">
              All Information
            </h1>
            <ul className="font-base space-y-4 text-gray-600">
              <li className="flex items-center gap-2">
                <FaCar/>
                <span className="font-bold">Model:</span> GT-R Nismo
              </li>
              <li className="flex items-center gap-2">
                <FaBuilding/>
                <span className="font-bold">Company:</span> Nissan
              </li>
              <li className="flex items-center gap-2">
                <FaTags/>
                <span className="font-bold">Category:</span> Sport Car
              </li>
              <li className="flex items-center gap-2">
                <FaCalendarAlt/>
                <span className="font-bold">Year:</span> 2024
              </li>
              <li className="flex items-center gap-2">
                <FaPalette/>
                <span className="font-bold">Primary Color:</span>
                <span className="flex h-6 w-6 rounded bg-[#2a2a2a]"></span>
              </li>
              <li className="flex items-center gap-2">
                <FaPalette/>
                <span className="font-bold">Available Colors:</span>
                <span className="flex h-6 w-6 rounded bg-[#2a2a2a]"></span>
                <span className="flex h-6 w-6 rounded bg-[#c31919]"></span>
                <span className="flex h-6 w-6 rounded bg-[#193ec3]"></span>
              </li>
              <li className="flex items-center gap-2">
                <FaDollarSign/>
                <span className="font-bold">Purchase Price:</span> $221,000
              </li>
              <li className="flex items-center gap-2">
                <FaDollarSign/>
                <span className="font-bold">Rent Price:</span> $195.00/day
              </li>
              <li className="flex items-center gap-2">
                <FaDollarSign/>
                <span className="font-bold">Discount Price:</span> $155.00/day
              </li>
              <li className="flex items-center gap-2">
                <FaGasPump/>
                <span className="font-bold">Fuel Type:</span> Petrol
              </li>
              <li className="flex items-center gap-2">
                <FaCogs/>
                <span className="font-bold">Transmission Type:</span> Manual
              </li>
              <li className="flex items-center gap-2">
                <FaChair/>
                <span className="font-bold">Number of Seats:</span> 2 seats
              </li>
              <li className="flex items-center gap-2">
                <FaGasPump/>
                <span className="font-bold">Fuel Tank Capacity:</span> 75L
              </li>
            </ul>
          </div>
        </div>
      </div>
  )
}
export default CarRent
