import {useEffect, useState} from 'react';
import {CryptoProps} from '../interfaces';
import {API_URL} from '@env';

const useFetchCollection = () => {
  const [coins, setCoins] = useState<CryptoProps[]>([]);

  const loadCryptosData = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setCoins(data.data);
  };

  useEffect(() => {
    loadCryptosData();
  }, []);

  return {coins};
};

export default useFetchCollection;
