import Cars from "../../components/cars/Cars";
import useSearchParamsHook from "../../params-hook/useSearchParamsHook.jsx";
import { useSearchCarsQuery } from "../../redux/api/car-api.jsx";
import Header from "../../components/header/Header.jsx";


const Search = () => {
  const {getParam} = useSearchParamsHook();
  const {data} = useSearchCarsQuery({q:getParam("q")})

  return (
      <div>
        <Header/>
        <div className=" pt-[150px]">
          <Cars data={data} loading={false} className="grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3" title="Search cars" />
        </div>
      </div>
  )
}

export default Search