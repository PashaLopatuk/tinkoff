import {useEffect, useState} from 'react';
import {IContact} from '../components/screens/payments/Contacts/types';
import {ICurrency} from '../types/ICurrency';
import {Alert} from 'react-native';
import {API_CURRENCY_URL} from '../consts';

export const useCurrencies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currencies, setCurrencies] = useState<ICurrency[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_CURRENCY_URL}&base_currency=RUB`);
        const result = await response.json();

        console.log({
          name: 'USD',
          value: (1 / result.data.USD).toFixed(2),
        });

        setCurrencies([
          {
            name: 'USD',
            value: (1 / result.data.USD).toFixed(2),
          },
          {
            name: 'EUR',
            value: (1 / result.data.EUR).toFixed(2),
          },
          {
            name: 'GBP',
            value: (1 / result.data.GBP).toFixed(2),
          },
        ]);
      } catch (error: any) {
        Alert.alert('Error fetch currencies', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    isLoading,
    currencies,
  };
};
