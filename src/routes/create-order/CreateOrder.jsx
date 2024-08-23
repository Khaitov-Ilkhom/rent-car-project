import {useParams} from "react-router-dom";
import OrderForm from "../../components/order-form/OrderForm.jsx";
import Header from "../../components/header/Header.jsx";
import {useGetCarQuery} from "../../redux/api/car-api.jsx";

const CreateOrder = () => {
  const {id} = useParams();
  const {data} = useGetCarQuery(id)
  const oneDayPrice = data?.payload?.rent_price

  return (
      <div className="w-full flex flex-col min-h-screen">
        <Header/>
        <div className='flex flex-grow justify-center items-center'>
          <OrderForm oneDayPrice={oneDayPrice} carId={id} />
        </div>
      </div>
  )
}
export default CreateOrder
