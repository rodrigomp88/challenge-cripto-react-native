import {API_URL} from '@env';
import {AppDispatch} from './';

export const ADD_CRYPTO = 'ADD_CRYPTO';
export const DELETE_CRYPTO = 'DELETE_CRYPTO';

export const addNewCrypto = (query: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const res = await fetch(`${API_URL}/${query}/metrics`);
      const data = await res.json();
      dispatch({
        type: ADD_CRYPTO,
        payload: data.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteCrypto = id => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: DELETE_CRYPTO,
      payload: id,
    });
  };
};
