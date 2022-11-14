import {useEffect, useState} from 'react';
import {CryptoProps} from '../interfaces';
import {API_URL} from '@env';

const useFetchCollection = () => {
  const [coins, setCoins] = useState<CryptoProps[]>([]);
  const [loading, setLoading] = useState(false);

  const loadCryptosData = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setCoins(data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    loadCryptosData();
  }, []);

  return {coins, loading};
};

export default useFetchCollection;
