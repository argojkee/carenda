import { MoreInfoCarStyles } from "./MoreInfoCarStyles.styled";
import { mileageFormating } from "../../helpers/mileageFormating";

const MoreInfoCar = ({ car }) => {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalPrice,
    address,
    rentalConditions,
    mileage,
  } = car;
  const addressArray = address.split(",");
  const country = addressArray[addressArray.length - 1];
  const town = addressArray[addressArray.length - 2];

  return (
    <MoreInfoCarStyles>
      <img src={img} alt={`${make} - ${model} - ${type}`} />
      <div className="main-info-container">
        <h2>
          {make} <span className="color-title">{model},</span> {year}
        </h2>
        <div className="more-info-container">
          <span>{town}</span>|<span>{country}</span>|<span>Id:{id}</span>|
          <span>Year: {year} </span> |<span>Type: {type}</span>{" "}
          <span>Fuel Consumption{fuelConsumption}</span>|
          <span>Engine Size: {engineSize}</span>
        </div>
      </div>
      <p className="description">{description}</p>
      <div className="access-func">
        <h3 className="access-title">Accessories and functionalities:</h3>
        <div className="access">
          {accessories.map((access, index, arr) => (
            <span key={access}>
              {index === arr.length - 1 ? access : `${access} | `}
            </span>
          ))}
          {functionalities.map((func, index, arr) => (
            <span key={func}>
              {index === arr.length - 1 ? func : `${func} | `}{" "}
            </span>
          ))}
        </div>
      </div>
      <div>
        <h3 className="rent-title">Rental Conditions </h3>
        <div className="rent-positions-container">
          {rentalConditions.split("\n").map((el, index) =>
            index === 0 ? (
              <p key={index} className="rent-position monserat">
                {el.split(" ")[0]} {el.split(" ")[1]}{" "}
                <span className="colorize">{el.split(" ")[2]}</span>
              </p>
            ) : (
              <p key={index} className="rent-position manrope">
                {el}
              </p>
            )
          )}
          <p className="rent-position monserat">
            Mileage:{" "}
            <span className="colorize">{mileageFormating(mileage)}</span>
          </p>
          <p className="rent-position monserat">
            Price: <span className="colorize">{rentalPrice}</span>
          </p>
        </div>
      </div>
      <a className="rent-btn" href="tel:++380730000000">
        Rental car
      </a>
    </MoreInfoCarStyles>
  );
};

export default MoreInfoCar;
