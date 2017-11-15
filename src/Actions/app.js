import axios from 'axios';
   
export function setAction(newValue) {
  return {
    type: 'SET_ACTION',
    newValue
  };
}

export function testSetAction() {
  return (dispatch) => {
    dispatch(setAction('loading'));

    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(() => dispatch(setAction('found')));
  };
}