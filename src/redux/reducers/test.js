'use strict';

const initialState = {
    number: 0,
    time: 0
};

const test = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
    return {time: state.time + 1, number: state.number + 1};
    case 'DECREMENT':
    return {time: state.time + 1, number: state.number - 1};
    case 'RESET':
    return {time: state.time + 1, number: 0};
    case 'ADD':
    return {time: state.time + 1, number: state.number + action.num};
    default:
      return state
  }
}

export default test
