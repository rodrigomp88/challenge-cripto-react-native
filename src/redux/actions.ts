import {API_URL} from '@env';
import {AppDispatch} from './';

export const ADD_CRYPTO = 'ADD_CRYPTO';

export const addNewCrypto = (symbol: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const res = await fetch(`${API_URL}/${symbol}/metrics`);
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
