import CategorySidebar from "../../components/category-sidebar/CategorySidebar.jsx";
import Cars from "../../components/cars/Cars"
import { Container } from "../../utils/Index.jsx"
import { useGetAllCarQuery } from "../../redux/api/car-api.jsx";
import { useSearchParams } from "react-router-dom";


const Categories = () => {
  const [searchParams] = useSearchParams();
  const {data, isLoading} = useGetAllCarQuery({categories: searchParams.getAll("categories")});

  return (
      <div className="my-14">

        <Container>
          <div className="flex gap-5 items-start pt-[100px]">
            <CategorySidebar defaultCategoryId={searchParams.get("categoryId")}/>
            <Cars data={data} loading={isLoading} className="grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3" title="Sport cars"/>
          </div>
        </Container>
      </div>
  )
}

export default Categories