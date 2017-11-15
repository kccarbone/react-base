const defaultState = {
  current: 'clean'
};

export default function (state = defaultState, action) {
  
  switch (action.type) {
    case 'SET_ACTION':
      return { ...state, current: action.newValue };

    default:
  }

  return state;
}