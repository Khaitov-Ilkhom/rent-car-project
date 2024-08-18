import { Container, Loading } from "../../utils/Index.jsx";
import { Link } from "react-router-dom";
import Card from "../renderCard/RenderCard.jsx";

const Cars = ({ data, loading, title, link, slice, className}) => {
  return (
      <div>
        <Container>
          <div>
            <div className="flex items-center justify-between">
              {title && <h2 className="text-3xl font-bold mb-5">{title}</h2>}
              {link && <Link to={link} className="text-blue-600">View All</Link>}
            </div>
            {loading ? (
                <Loading />
            ) : (
                <div className={`grid ${className}`}>
                  {data?.payload.slice(0, slice).reverse().map((car) => (
                      <Card key={car._id} car={car} />
                  ))}
                </div>
            )}
          </div>
        </Container>
      </div>
  );
};

export default Cars;
