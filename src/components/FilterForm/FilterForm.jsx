import { constants } from "../../constants";
import { useState, useEffect } from "react";
import { FilterFormStyles } from "./FilterFormStyles.styled";
import { useSelector } from "react-redux";
import { getAllCars } from "../../redux/cars/carsSelectors";
import { ReactComponent as ArrowSvg } from "../../icons/arrow.svg";
import { useSearchParams } from "react-router-dom";
import { toastError } from "../../helpers/toastNotification";
import { mileageFormating, backToNumber } from "../../helpers/mileageFormating";

const FilterForm = ({ filterCars }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [brandSelected, setBrandSelected] = useState("");
  const cars = useSelector(getAllCars);
  const [minMaxRentPrice, setMinMaxRentPrice] = useState(null);
  const [priceSelected, setPriceSelected] = useState("");
  const [fromMileage, setFromMileage] = useState("");
  const [toMileage, setToMileage] = useState("");
  const [brandFocus, setBrandFocus] = useState(null);
  const [priceFocus, setPriceFocus] = useState(null);

  const onBrandChange = ({ target: { value } }) => {
    setBrandSelected(value);
    setBrandFocus(false);
  };

  const onPriceChange = ({ target: { value } }) => {
    setPriceSelected(value);
    setPriceFocus(false);
  };

  const onToMileageChange = ({ target: { value } }) => {
    if (value.length > 8) {
      return;
    }
    setToMileage(mileageFormating(backToNumber(value)));
  };

  const onFromMileageChange = ({ target: { value } }) => {
    if (value.length > 8) {
      return;
    }
    setFromMileage(mileageFormating(backToNumber(value)));
  };

  useEffect(() => {
    if (cars) {
      let filteredCars = [...cars];
      if (searchParams.get("brand")) {
        setBrandSelected(searchParams.get("brand"));
        filteredCars = cars?.filter(
          (car) =>
            searchParams.get("brand").toLowerCase() === car.make.toLowerCase()
        );
      }

      if (searchParams.get("price")) {
        setPriceSelected(searchParams.get("price"));
        filteredCars = filteredCars?.filter(
          (car) =>
            Number(car.rentalPrice.split("$")[1]) < searchParams.get("price")
        );
      }

      if (searchParams.get("from")) {
        setFromMileage(mileageFormating(searchParams.get("from")));
        filteredCars = filteredCars.filter(
          (car) => car.mileage > backToNumber(fromMileage)
        );
      }

      if (searchParams.get("to")) {
        setToMileage(mileageFormating(searchParams.get("to")));
        filteredCars = filteredCars.filter(
          (car) => car.mileage < backToNumber(toMileage)
        );
      }
      filterCars(filteredCars);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cars]);

  useEffect(() => {
    const getAndSetMinMaxRentPrice = () => {
      const minMax = cars?.reduce(
        (acc, car) => {
          const rentPrice = Number(car.rentalPrice.split("$")[1]);
          if (rentPrice < acc[0]) {
            acc[0] = rentPrice;
          }

          if (rentPrice > acc[1]) {
            acc[1] = rentPrice;
          }
          return acc;
        },
        [
          Number(cars[0].rentalPrice.split("$")[1]),
          Number(cars[0].rentalPrice.split("$")[1]),
        ]
      );
      const min = Math.ceil(minMax[0] / 10) * 10;
      const max = Math.ceil(minMax[1] / 10) * 10;

      const arr = [];
      for (let i = min; i <= max; i += 10) {
        arr.push(i);
      }

      setMinMaxRentPrice([...arr]);
    };

    if (cars) {
      getAndSetMinMaxRentPrice();
    }
  }, [cars]);

  const onSubmitPress = (e) => {
    e.preventDefault();
    const params = Object.fromEntries(searchParams);
    if (
      toMileage &&
      fromMileage &&
      backToNumber(toMileage) < backToNumber(fromMileage)
    ) {
      return toastError(`"From" value should be less than "To" value `);
    }

    if (
      (fromMileage && !backToNumber(fromMileage)) ||
      (toMileage && !backToNumber(toMileage))
    ) {
      return toastError("Please, enter valid value for mileage");
    }

    let filteredCars = cars;

    if (brandSelected) {
      filteredCars = filteredCars.filter(
        (car) => car.make.toLowerCase() === brandSelected.toLowerCase()
      );

      params.brand = brandSelected;
    } else {
      delete params.brand;
    }

    if (priceSelected) {
      filteredCars = filteredCars.filter(
        (car) => Number(car.rentalPrice.split("$")[1]) < priceSelected
      );

      params.price = priceSelected;
    } else {
      delete params.price;
    }

    if (backToNumber(toMileage) && backToNumber(toMileage) > 0) {
      setToMileage(toMileage);
      filteredCars = filteredCars.filter(
        (car) => car.mileage < backToNumber(toMileage)
      );
      params.to = backToNumber(toMileage);
    } else {
      delete params.to;
    }

    if (backToNumber(fromMileage) && backToNumber(fromMileage) > 0) {
      setFromMileage(fromMileage);
      filteredCars = filteredCars.filter(
        (car) => car.mileage > backToNumber(fromMileage)
      );
      params.from = backToNumber(fromMileage);
    } else {
      delete params.from;
    }

    setSearchParams({ ...params });

    filterCars(filteredCars);
  };
  const onResetClick = () => {
    setBrandSelected("");
    setPriceSelected("");
    setFromMileage("");
    setToMileage("");
    filterCars(cars);
    if (searchParams.get("page")) {
      setSearchParams({ page: searchParams.get("page") });
    } else {
      setSearchParams({});
    }
  };
  const isActiveReset =
    brandSelected || priceSelected || fromMileage || toMileage;

  return (
    <FilterFormStyles
      onSubmit={onSubmitPress}
      $priceFocus={priceFocus}
      $brandFocus={brandFocus}
    >
      <div className="label-container brand-container">
        <label htmlFor="brand">Car brand</label>
        <select
          onFocus={() => setBrandFocus(true)}
          onBlur={() => setBrandFocus(false)}
          id="brand"
          value={brandSelected}
          onChange={onBrandChange}
        >
          <option value="" className="first-option">
            Select brand
          </option>
          {constants.brands_list.map((brand) => (
            <option value={brand} key={brand}>
              {brand}
            </option>
          ))}
        </select>

        <ArrowSvg className="arrow-svg brand-svg" />
      </div>
      <div className="label-container price-container">
        <label htmlFor="rentPrice">Price/ 1hour</label>

        <select
          onFocus={() => setPriceFocus(true)}
          onBlur={() => setPriceFocus(false)}
          id="rentPrice"
          value={priceSelected}
          onChange={onPriceChange}
        >
          <option value="" className="first-option">
            To $
          </option>
          {minMaxRentPrice?.map((value) => (
            <option key={value} value={value}>
              {`To ${value}$`}
            </option>
          ))}
        </select>
        <div className="arrow-container">
          <ArrowSvg className="arrow-svg price-svg" />
        </div>
      </div>
      <div className="label-container">
        <p className="label-mileage">Car mileage/ km</p>
        <div className="input-mileage-container">
          <div className="input-container left">
            <label htmlFor="from-mileage">From</label>
            <input
              id="from-mileage"
              value={fromMileage}
              type="text"
              onChange={onFromMileageChange}
            />
          </div>

          <div className="input-container">
            <label htmlFor="to-mileage">To</label>
            <input
              id="to-mileage"
              onChange={onToMileageChange}
              value={toMileage}
              type="text"
            />
          </div>
        </div>
      </div>
      <div className="btn-container">
        <button
          className="reset-btn"
          disabled={!isActiveReset}
          onClick={onResetClick}
          type="button"
        >
          Reset
        </button>
        <button className="accept-btn" type="submit" disabled={!cars}>
          Search
        </button>
      </div>
    </FilterFormStyles>
  );
};

export default FilterForm;
