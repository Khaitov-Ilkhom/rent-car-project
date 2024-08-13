import Cars from "../../components/cars/Cars.jsx";
import Hero from "../../components/hero/Hero.jsx";
import Categories from "../../components/categories/Categories.jsx";
import {useGetAllCarQuery} from "../../redux/api/car-api.jsx";
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";

const Home = () => {
  const {data, isLoading} = useGetAllCarQuery();
  return (
      <div>
        <Header/>
        <Hero/>
        <Categories/>
        <div className="my-24">
          <Cars data={data} loading={isLoading} title="Popular cars"
                className="grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4" link="/categories" slice={4}/>
        </div>
        <div className='my-24'>
          <Cars data={data} loading={isLoading} title="Recommended cars"
                className="grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4" link="/categories"/>
        </div>
        <Footer/>
      </div>
  )
}
export default Home
