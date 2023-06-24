import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, removeCar } from "../store";
import type { Car } from "../types";

const CarList = () => {
  const dispatch: AppDispatch = useDispatch();

  const { cars, name } = useSelector(
    ({ form, cars: { data, searchTerm } }: RootState) => {
      return {
        cars: data.filter(car =>
          car.name.toLowerCase().includes(searchTerm.toLowerCase())
        ),
        name: form.name,
      };
    }
  );

  const handleCarDelete = (car: Car) => {
    dispatch(removeCar(car.id));
  };

  const renderedCars = cars.map(car => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

    return (
      <div key={car.id} className={`panel ${bold && "bold"}`}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => {
            handleCarDelete(car);
          }}
        >
          Delete
        </button>
      </div>
    );
  });
  return <div className="car-list">{renderedCars}</div>;
};

export default CarList;
