import {removeFromLiked} from "../../redux/slices/LikeSlice.jsx";
import {useDispatch, useSelector} from "react-redux";
import {FaHeart} from "react-icons/fa";
import {CarCardGasoline, CarCardManuals, CarCardPeople} from "../../images/svgs.jsx";
import {Link} from "react-router-dom";
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";

const LikedCars = () => {
  const dispatch = useDispatch()
  const { likedCars } = useSelector((state) => state.like);

  const removedLikedCar = (id) => {
    dispatch(removeFromLiked(id))
  }

  return (
      <div>
        <Header/>
        <div className="w-full grid grid-cols-4 gap-4 py-[140px] mx-[50px]">
          {
            likedCars.map(car => (
                <div key={car._id} className="rounded-[10px] bg-white p-6 shadow-lg transition hover:shadow-2xl">
                  <div className="flex w-full items-start justify-between">
                    <div className="flex flex-col gap-1">
                      <span className="text-xl font-bold">{car.name}</span>
                      <span className="text-sm font-bold text-[#90a3bf]">{car.model}</span>
                    </div>
                    <button onClick={() => removedLikedCar(car._id)}
                            className="shadow-form w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
                      <FaHeart className="text-red-500" size={30}/>
                    </button>
                  </div>

                  <div className="flex max-w-[300px] h-[190px] w-full items-center justify-center">
                    <img
                        className="object-contain mix-blend-multiply"
                        src={car.images[0]}
                        alt="Car"
                    />
                  </div>

                  <div className="flex items-center justify-between">
        <span className="flex items-center gap-1">
          <CarCardGasoline/>
          <span className="text-sm font-medium text-[#90a3bf]">
             {car.capacity_fuel}L
          </span>
        </span>
                    <span className="flex items-center gap-1">
          <CarCardManuals/>
          <span className="text-sm font-medium text-[#90a3bf] capitalize">
            {car.transmission}
          </span>
        </span>
                    <span className="flex items-center gap-1">
          <CarCardPeople/>
          <span className="text-sm font-medium text-[#90a3bf]">
            {car.seats} People
          </span>
        </span>
                  </div>

                  <div className="mt-6 flex w-full items-center justify-between">
                    <div className="flex items-end gap-1">
                      <span className="text-xl font-bold text-[#1a202c]">${car.rent_price}</span>
                      <span className="text-xl font-bold text-[#1a202c]">/</span>
                      <span className="text-sm font-bold text-[#90a3bf]">day</span>
                    </div>
                    <Link
                        to={`/car-details/${car._id}`}
                        className="mt-2 flex max-w-max rounded bg-gray-600 px-5 py-[10px] text-center text-base font-semibold leading-normal text-white"
                    >
                      Rent Now
                    </Link>
                  </div>
                </div>
            ))
          }
        </div>
        <Footer/>
      </div>
  )
}
export default LikedCars
