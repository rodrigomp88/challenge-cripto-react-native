import React, {useState} from 'react';
import theme from '../../utils/theme';
import {
  ButtonAdd,
  ButtonText,
  CryptoAddFormContainer,
  Input,
  Title,
} from './styles';

const CryptoAddForm = () => {
  const [input, setInput] = useState('');
  const inputNull = input.length === 0;

  return (
    <CryptoAddFormContainer>
      <Title>Add a cryptocurrency</Title>
      <Input
        placeholder="Use a name or ticker symbol..."
        placeholderTextColor={theme.colors.neutral}
        value={input}
        onChangeText={setInput}
        isActive={input.length > 0}
      />
      <ButtonAdd onPress={() => {}} disabled={inputNull}>
        <ButtonText disabled={inputNull}>Add</ButtonText>
      </ButtonAdd>
    </CryptoAddFormContainer>
  );
};

export default CryptoAddForm;
