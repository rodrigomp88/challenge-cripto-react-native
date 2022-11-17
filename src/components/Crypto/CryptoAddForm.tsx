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
import {addNewCrypto} from '../../redux/actions';
import {AppDispatch, RootState} from '../../redux';
// import {useNavigation} from '@react-navigation/native';
import {Alert} from 'react-native';

const CryptoAddForm = ({navigation}) => {
  const [input, setInput] = useState('');
  // const {navigate} = useNavigation();

  const disabled = input.length === 0;

  const dispatch = useDispatch<AppDispatch>();
  const cryptos = useSelector((state: RootState) => state.cryptos.cryptos);

  const findDuplicate = () => {
    const res = cryptos.find(e => {
      return e.symbol.toLowerCase() === input.toLowerCase();
    });
    return res;
  };

  const handleAdd = () => {
    if (findDuplicate()) {
      Alert.alert('This crypto is already in your list');
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
