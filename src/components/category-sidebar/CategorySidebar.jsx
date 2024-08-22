import { useState } from "react";
import { Checkbox, Slider } from "antd";
import { Loading } from "../../utils/Index.jsx";
import { useSearchParams } from "react-router-dom";
import { useGetCategoriesQuery } from "../../redux/api/categories-api.jsx";
import Header from "../header/Header.jsx";

const CategorySidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data, isLoading } = useGetCategoriesQuery();
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);

  const onChangeCarType = (values) => {
    setSearchParams({categories: values});
  };


  const onChangeCarPerson = (value) => {
  };

  const onChangeSliderPrice = (value) => {
    setMinPrice(value[0]);
    setMaxPrice(value[1]);
  };

  const onChangeCompleteSliderPrice = (value) => {
    setMinPrice(value[0]);
    setMaxPrice(value[1]);
  };

  const carPersonOptions = [
    {
      label: "2 Person",
      value: "2 Person",
    },
    {
      label: "4 Person",
      value: "4 Person",
    },
    {
      label: "6 Person",
      value: "6 Person",
    },
    {
      label: "8 or More",
      value: "8 or More",
    },
  ];

  return (
      <>
        <Header/>
        <div className="flex w-[320px] shrink-0 flex-col gap-14 rounded-[10px] bg-white p-5 shadow-lg">
          <div className="flex flex-col gap-7">
        <span className="text-xs font-semibold capitalize text-[#90a3bf]">
          TYPE
        </span>
            {
              isLoading ? <Loading/> :
                  <Checkbox.Group
                      defaultValue={searchParams.getAll("categories")}
                      className="flex flex-col gap-2 font-semibold capitalize text-[#596780]"

                      onChange={onChangeCarType}
                  >
                    <>
                      {
                        data?.payload.map(category =>
                            <Checkbox key={category._id} value={category._id}>{category.name}</Checkbox>
                        )
                      }
                    </>
                  </Checkbox.Group>
            }
          </div>

          <div className="flex flex-col gap-7">
        <span className="text-xs font-semibold capitalize text-[#90a3bf]">
          CAPACITY
        </span>
            <Checkbox.Group
                className="flex flex-col gap-2 font-semibold capitalize text-[#596780]"
                options={carPersonOptions}
                onChange={onChangeCarPerson}
            />
          </div>

          <div className="flex flex-col gap-7">
        <span className="text-xs font-semibold capitalize text-[#90a3bf]">
          PRICE
        </span>
            <Slider
                range
                step={10}
                defaultValue={[minPrice, maxPrice]}
                onChange={onChangeSliderPrice}
                onChangeComplete={onChangeCompleteSliderPrice}
            />
            <div className="flex flex-col">
              <span className="">Min: ${minPrice}</span>
              <span className="">Max: ${maxPrice}</span>
            </div>
          </div>
        </div>
      </>
  );
};

export default CategorySidebar;
