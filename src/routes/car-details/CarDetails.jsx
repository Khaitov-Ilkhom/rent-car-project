import {useParams} from "react-router-dom";
import {useGetCarQuery} from "../../redux/api/car-api.jsx";
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import {useGetCategoriesQuery} from "../../redux/api/categories-api.jsx";
import {Carousel, Image} from "antd";
import {useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addToLiked} from "../../redux/slices/LikeSlice.jsx";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";

const CarDetails = () => {
  const {id} = useParams()
  const {data} = useGetCarQuery(id)
  const {categories} = useGetCategoriesQuery();
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);
  const { likedCars } = useSelector((state) => state.like);
  const dispatch = useDispatch();

  const isProductLiked = (carId) => {
    return likedCars?.some(car => car._id === carId)
  };
  const handleLike = (car) => {
    dispatch(addToLiked(car));
  }

  return (
      <div className="flex w-full flex-col">
        <Header/>
        <div className="container mt-[120px] flex flex-col items-center justify-center gap-8">
          <div className="flex w-full max-w-[1020px] flex-col gap-5">
            <div className="flex justify-between gap-5">
              <div className="flex items-center gap-6 p-[20px]">
                <div className="flex flex-col gap-3 ">
                  {data?.payload?.images?.map((image, index) => (
                      <div onClick={() => carousel.current.goTo(index)}
                           className={currentIndex === index ? "image_card_active" : "image_card"} key={index}>
                        <img src={image} className="scale-75 max-w-[100px]" alt="image"/>
                      </div>
                  ))}
                </div>
                <div className="rounded-3xl w-[400px]  bg-gray-300">
                  <Carousel afterChange={(current) => setCurrentIndex(current)} ref={carousel} arrows autoplay
                            autoplaySpeed={3000} infinite={true} fade>
                    {data?.payload?.images?.map((image, index) => (
                        <div className="rounded-3xl overflow-hidden" key={index}>
                          <Image src={image} className="scale-75 transition-transform hover:scale-90" alt="image"/>
                        </div>
                    ))}
                  </Carousel>
                </div>
              </div>

              <div className="flex w-full flex-col justify-between gap-8 rounded-[10px] bg-white p-5 shadow-lg">
                <div className="flex flex-col gap-5">
                  <div className="flex w-full items-start justify-between">
                    <div className="flex flex-col gap-2">
                    <span className="text-[32px] font-bold text-[#1a202c]">
                      {data?.payload?.name}
                    </span>
                      <div className="flex items-center gap-2">
                      <span className="text-xl font-medium text-[#596780]">
                        {data?.payload?.model}
                      </span>
                      </div>
                    </div>
                    <button className="flex items-center gap-1" onClick={() => handleLike(data?.payload)}>
                      {
                        isProductLiked(data?.payload?._id) ? <AiFillHeart className="text-red-500 text-2xl"/> :
                            <AiOutlineHeart className="text-red-500 text-2xl"/>
                      }
                    </button>
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                        className="h-10 w-10 rounded border border-slate-300 shadow-md"
                        style={{backgroundColor: data?.payload?.color}}
                        title={data?.payload?.color}
                    ></button>
                    {data?.payload?.colors.map((color, index) => (
                        <button
                            key={index}
                            className="h-10 w-10 rounded border border-slate-300 shadow-md"
                            style={{backgroundColor: color}}
                            title={color}
                        ></button>
                    ))}
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between gap-4">
                    <span className="text-base font-normal text-[#90a3bf]">
                      Type Car
                    </span>
                      <span className="text-base font-semibold capitalize text-[#596780]">
                      {categories?.payload?.length > 0 ? (
                          categories.payload.map((category) => {
                            if (category._id === data?.payload?.category) {
                              return (
                                  <span key={category._id}>{category.name}</span>
                              );
                            }
                          })
                      ) : (
                          <span> </span>
                      )}
                    </span>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                    <span className="text-base font-normal text-[#90a3bf]">
                      Steering
                    </span>
                      <span className="text-base font-semibold capitalize text-[#596780]">
                      {data?.payload?.transmission}
                    </span>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                    <span className="text-base font-normal text-[#90a3bf]">
                      Capacity
                    </span>
                      <span className="text-base font-semibold text-[#596780]">
                      {data?.payload?.seats} Person
                    </span>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                    <span className="text-base font-normal text-[#90a3bf]">
                      Gasoline
                    </span>
                      <span className="text-base font-semibold text-[#596780]">
                      {data?.payload?.capacity_fuel} L
                    </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <div className="flex items-center">
                    <span className="text-[32px] font-bold text-[#1a202c]">
                      ${(data?.payload?.rent_price * (1 - data?.payload?.discount / 100)).toFixed(2)}
                      /
                    </span>
                      <span className="text-base font-bold text-[#90a3bf]">
                      days
                    </span>
                    </div>
                    <span className="text-base font-bold text-[#90a3bf]">
                    ${data?.payload?.price}
                  </span>
                  </div>

                  <button
                      className="flex items-center justify-center rounded-[10px] bg-gray-600 px-8 py-4 text-base font-bold text-white">
                    Rent Now
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5 rounded-lg bg-white p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#1a202c]">Description</h3>
              <p
                  className="text-xl font-normal text-[#596780]"
                  dangerouslySetInnerHTML={{__html: data?.payload?.description}}
              ></p>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
  );
};

export default CarDetails;




