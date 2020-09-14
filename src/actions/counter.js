import {
  DECREMENT_COUNTER,
  INCREMENT_COUNTER,
  SET_COUNTER,
} from "../constants/Counter";

export const setCounter = (value) => ({
  type: SET_COUNTER,
  value,
});

export const incrementCounter = () => ({
  type: INCREMENT_COUNTER,
});

export const decrementCounter = () => ({
  type: DECREMENT_COUNTER,
});
