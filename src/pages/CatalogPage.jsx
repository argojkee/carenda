import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getCars, getTotal, loadMoreCars } from "../redux/cars/carsOperations";
import {
  getAllCars,
  getTotalLength,
  getIsFirstLoading,
  getIsMoreLoading,
} from "../redux/cars/carsSelectors";
import { useEffect, useState } from "react";
import FilterForm from "../components/FilterForm/FilterForm";
import Container from "../components/Container/Container";
import CarsList from "../components/CarsList/CarsList";
import { CatalogPageStyles } from "./pagestyles/CatalogPageStyles.styled";

import { PiSpinnerGap } from "react-icons/pi";

const CatalogPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const cars = useSelector(getAllCars);
  const dispatch = useDispatch();
  const [filteredCars, setFilteredCars] = useState(null);
  const totalCars = useSelector(getTotalLength);
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);
  const firstLoading = useSelector(getIsFirstLoading);
  const isLoadingMore = useSelector(getIsMoreLoading);

  const onLoadMoreClick = async () => {
    const params = Object.fromEntries(searchParams);
    await dispatch(loadMoreCars({ page: page + 1, total: totalCars }));
    setPage(page + 1);
    params.page = page + 1;
    setSearchParams({ ...params });
  };

  useEffect(() => {
    dispatch(getTotal());

    if (searchParams.get("page")) {
      dispatch(getCars(Number(searchParams.get("page")) * 12));
    } else {
      dispatch(getCars(12));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
  return (
    <CatalogPageStyles>
      <Container>
        <FilterForm filterCars={setFilteredCars} />
        {firstLoading ? (
          <div className="main-spinner-container">
            <PiSpinnerGap className="spinner" size={40} />
          </div>
        ) : (
          <>
            <CarsList cars={filteredCars ? filteredCars : cars} />
            {totalCars > page * 12 && (
              <button className="load-more-btn" onClick={onLoadMoreClick}>
                {isLoadingMore ? (
                  <PiSpinnerGap className="spinner" size={16} />
                ) : (
                  "Load more"
                )}
              </button>
            )}
          </>
        )}
      </Container>
    </CatalogPageStyles>
  );
};

export default CatalogPage;
