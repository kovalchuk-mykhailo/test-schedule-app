import {
  DECREMENT_COUNTER,
  INCREMENT_COUNTER,
  SET_COUNTER,
} from "../constants/Counter";

const initialState = {
  counter: 0,
};

export const counterBookedReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COUNTER: {
      return {
        ...state,
        counter: action.value,
      };
    }

    case INCREMENT_COUNTER: {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }

    case DECREMENT_COUNTER: {
      return {
        ...state,
        counter: state.counter - 1,
      };
    }

    default:
      return state;
  }
};
