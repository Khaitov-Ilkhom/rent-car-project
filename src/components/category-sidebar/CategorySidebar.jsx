import {useState} from "react";
import {Checkbox, Slider} from "antd";
import {Loading} from "../../utils/Index.jsx";
import {useGetCategoriesQuery} from "../../redux/api/categories.jsx";
import Header from "../header/Header.jsx";

const CategorySidebar = ({defaultCategoryId}) => {
  const {data, isLoading} = useGetCategoriesQuery();
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);

  const onChangeCarType = (value) => {
    console.log("Types: ", value);
  };

  const onChangeCarPerson = (value) => {
    // console.log("Persons: ", value);
  };

  const onChangeSliderPrice = (value) => {
    setMinPrice(value[0]);
    setMaxPrice(value[1]);
    // console.log("onChange: ", minPrice, maxPrice);
  };

  const onChangeCompleteSliderPrice = (value) => {
    setMinPrice(value[0]);
    setMaxPrice(value[1]);
    // console.log("onChangeComplete: ", minPrice, maxPrice);
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
      <div>
        <Header/>
        <div className="flex w-[320px] shrink-0 flex-col gap-14 rounded-[10px] bg-white p-5 shadow-lg">
          <div className="flex flex-col gap-7">
        <span className="text-xs font-semibold capitalize text-[#90a3bf]">
          TYPE
        </span>
            {
              isLoading ? <Loading/> :
                  <Checkbox.Group
                      defaultValue={defaultCategoryId}
                      className="flex flex-col gap-2 font-semibold capitalize text-[#596780]"
                      options={data?.payload.map(category => ({label: category.name, value: category._id}))}
                      onChange={onChangeCarType}
                  />
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
      </div>
  );
};

export default CategorySidebar;
