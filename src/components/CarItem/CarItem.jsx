import { CarItemStyles } from "./CarItemStyles";
import { ReactComponent as HeartSvg } from "../../icons/heart.svg";
import {
  addFavoriteCar,
  deleteFavoriteCar,
} from "../../redux/favorites/favoritesSlice";
import { useDispatch, useSelector } from "react-redux";
import { getFavoritesCars } from "../../redux/favorites/favoritesSelectors";
import { Modal } from "../Modal/Modal";
import MoreInfoCar from "../MoreInfoCar/MoreInfoCar";
import { useState } from "react";

const CarItem = ({ car }) => {
  const dispatch = useDispatch();
  const favoritesCars = useSelector(getFavoritesCars);
  const [isShowModal, setIsShowModal] = useState(false);
  const isFavorite = favoritesCars?.some(
    (favoriteCar) => favoriteCar.id === car.id
  );

  const onToggleFavoriteClick = () => {
    dispatch(isFavorite ? deleteFavoriteCar(car) : addFavoriteCar(car));
  };

  const {
    year,
    make,
    model,
    type,
    img,

    functionalities,
    rentalPrice,
    rentalCompany,
    address,

    mileage,
  } = car;

  const addressArray = address.split(",");
  const country = addressArray[addressArray.length - 1];
  const town = addressArray[addressArray.length - 2];

  return (
    <>
      <CarItemStyles>
        <div className="img-container">
          <img src={img} alt={`${make} - ${model} - ${type}`} />
          <button className="favorite-btn" onClick={onToggleFavoriteClick}>
            <HeartSvg
              fill={isFavorite ? "rgba(52, 112, 255, 1)" : "transparent"}
              stroke={isFavorite ? "rgba(52, 112, 255, 1)" : "white"}
            />
          </button>
        </div>
        <div className="info-container">
          <div className="title-container">
            <h2>
              {make} <span>{model},</span> {year}
            </h2>
            <p>{rentalPrice}</p>
          </div>

          <div className="more-info-container">
            <span>{town}</span>|<span>{country}</span>|
            <span>{rentalCompany}</span>|<span>Premium </span>
            <span>{type}</span>|<span>{model}</span>|<span>{mileage}</span>|
            <span>{functionalities[0]}</span>
          </div>
        </div>
        <button className="learn-more-btn" onClick={() => setIsShowModal(true)}>
          Learn more
        </button>
      </CarItemStyles>

      {isShowModal && (
        <Modal
          closeModal={() => setIsShowModal(false)}
          children={<MoreInfoCar car={car} />}
        />
      )}
    </>
  );
};

export default CarItem;
