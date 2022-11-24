import React, {useState} from 'react';
import theme from '../../utils/theme';
import {
  ButtonAdd,
  ButtonText,
  CryptoAddFormContainer,
  Input,
  Title,
} from './styles';

import {useDispatch, useSelector} from 'react-redux';
import {addNewCrypto} from '../../store/actions';
import {AppDispatch, RootState} from '../../store';
import {Alert} from 'react-native';
import {CryptoProps} from '../../interfaces';

const CryptoAddForm = ({navigation}) => {
  const [input, setInput] = useState('');

  const disabled = input.length === 0;

  const findCrypto = () => {
    const res = cryptos.find((e: CryptoProps) => {
      return e.symbol.toLowerCase() === input.toLowerCase();
    });
    return res;
  };

  const dispatch = useDispatch<AppDispatch>();
  const cryptos = useSelector((state: RootState) => state.cryptos.cryptos);

  const handleAdd = () => {
    if (findCrypto()) {
      Alert.alert('This crypto currently already exists in your account');
    } else {
      dispatch(addNewCrypto(input));
      setInput('');
      navigation.navigate('Home');
    }
  };

  return (
    <CryptoAddFormContainer>
      <Title>Add a cryptocurrency</Title>
      <Input
        placeholder="Use a name or ticker symbol..."
        placeholderTextColor={theme.colors.neutral}
        onChangeText={setInput}
        value={input}
        isActive={input.length > 0}
      />
      <ButtonAdd onPress={handleAdd} disabled={disabled}>
        <ButtonText disabled={disabled}>Add</ButtonText>
      </ButtonAdd>
    </CryptoAddFormContainer>
  );
};

export default CryptoAddForm;
