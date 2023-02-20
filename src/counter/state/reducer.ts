import { Action } from '@reduxjs/toolkit';

type CounterAction = Action & { payload: any };
const defaultState = { value: 0 };

export default function counterReducer(
  state = defaultState,
  action: CounterAction
) {
  switch (action.type) {
    case 'increment':
      return { ...state, value: state.value + 1 };
    case 'decrement':
      return { ...state, value: state.value - 1 };
    case 'incrementByAmount':
      return { ...state, value: state.value + action.payload };
    default:
      return state;
  }
}
