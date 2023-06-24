import { useSelector } from "react-redux";
import { RootState } from "../store";

const CarValue = () => {
  const totalValue = useSelector(
    ({ cars: { data, searchTerm } }: RootState) => {
      return data
        .filter(({ name }) =>
          name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .reduce((acc, curr) => {
          return acc + curr.cost;
        }, 0);
    }
  );
  return <div className="car-value">Total Value: ${totalValue}</div>;
};

export default CarValue;
