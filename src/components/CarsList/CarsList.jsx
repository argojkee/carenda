import { CarsListStyles } from "./CarsListStyles.styled";
import CarItem from "../CarItem/CarItem";

const CarsList = ({ cars }) => {
  return (
    <CarsListStyles>
      {cars?.map((car) => (
        <CarItem car={car} key={car.id} />
      ))}
    </CarsListStyles>
  );
};

export default CarsList;
