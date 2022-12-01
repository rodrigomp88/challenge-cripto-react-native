import {API_URL} from '@env';
import {CryptoProps} from '../interfaces';
import {AppDispatch} from './';

export const ADD_CRYPTO = 'ADD_CRYPTO';
export const DELETE_CRYPTO = 'DELETE_CRYPTO';
export const UPDATE_CRYPTO = 'UPDATE_CRYPTO';

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

export const deleteCrypto = (id: any) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: DELETE_CRYPTO,
      payload: id,
    });
  };
};

export const updateCrypto = (cryptos: CryptoProps[]) => {
  return async (dispatch: AppDispatch) => {
    try {
      const cryptosUpdate: CryptoProps[] = [];
      const cryptoList: string[] = cryptos.map(c => {
        return c.symbol;
      });

      for (let i = 0; i < cryptos.length; i++) {
        const res = await fetch(`${API_URL}/${cryptoList[i]}/metrics`);
        const data = await res.json();
        cryptosUpdate.push(data.data);
      }
      dispatch({
        type: UPDATE_CRYPTO,
        payload: cryptosUpdate,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
