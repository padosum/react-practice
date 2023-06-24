import { useDispatch, useSelector } from "react-redux";
import { RootState, changeSearchTerm } from "../store";

const CarSearch = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: RootState) => state.cars.searchTerm);

  const handleSearchTermChange = (e: React.ChangeEvent) => {
    const element = e.target as HTMLInputElement;
    dispatch(changeSearchTerm(element.value));
  };

  return (
    <div className="list-header">
      <h3 className="title is-3">My Cars</h3>
      <div className="search field is-horizontal">
        <label htmlFor="search" className="label">
          Search
        </label>
        <input
          id="search"
          className="input"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </div>
    </div>
  );
};

export default CarSearch;
