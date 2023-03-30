import React from "react";
import Counter from "../components/Counter";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "../modules/counter";
import { increaseAsync, decreaseAsync } from "../modules/counter";

const CounterContainer = () => {
  const number = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increaseAsync());
  };
  const onDecrease = () => {
    dispatch(decreaseAsync());
  };

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default CounterContainer;
