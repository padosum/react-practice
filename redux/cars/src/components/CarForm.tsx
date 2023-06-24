import { useDispatch, useSelector } from "react-redux";
import {
  AppDispatch,
  RootState,
  addCar,
  changeCost,
  changeName,
} from "../store";
import { ChangeEvent, FormEvent } from "react";

const CarForm = () => {
  const dispatch: AppDispatch = useDispatch();
  const { name, cost } = useSelector((state: RootState) => {
    return {
      name: state.form.name,
      cost: state.form.cost,
    };
  });

  const handleNameChange = (e: ChangeEvent) => {
    const element = e.target as HTMLInputElement;
    dispatch(changeName(element.value));
  };

  const handleCostChange = (e: ChangeEvent) => {
    const element = e.target as HTMLInputElement;
    const carCost = parseInt(element.value) || 0;
    dispatch(changeCost(carCost));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    dispatch(addCar({ name, cost }));
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label htmlFor="name" className="label">
              Name
            </label>
            <input
              id="name"
              className="input is-expanded"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="field">
            <label htmlFor="cost" className="label">
              Cost
            </label>
            <input
              id="cost"
              className="input is-expanded"
              value={cost}
              onChange={handleCostChange}
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-link">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CarForm;
