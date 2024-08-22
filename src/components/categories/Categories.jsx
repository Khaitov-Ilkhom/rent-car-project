import { useGetCategoriesQuery } from "../../redux/api/categories-api.jsx";
import { Container, Loading } from "../../utils/Index.jsx";
import { Link } from "react-router-dom";

const Categories = () => {
  const {data, isLoading} = useGetCategoriesQuery();

  return (
      <div className="my-24">
        <Container>
          <h2 className="text-3xl font-bold mb-5">Categories</h2>
          {isLoading ? (
              <Loading />
          ) : (
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
                {data?.payload.map((category) => (
                    <Link to={`/categories?categories=${category._id}`} key={category._id} className="flex flex-col items-center gap-4">
                      <div className="rounded-full border border-slate-400 overflow-hidden p-1 w-[150px] h-[150px] bg-white shadow-lg transition hover:shadow-xl">
                        <img src={category.image} className="rounded-full object-contain select-none" alt="" />
                      </div>
                      <p className="text-center font-bold capitalize">{category.name}</p>
                    </Link>
                ))}
              </div>
          )}
        </Container>
      </div>
  )
}

export default Categories