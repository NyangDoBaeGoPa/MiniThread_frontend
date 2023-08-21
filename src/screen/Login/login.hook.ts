import {useState} from 'react';

interface FocusedInput {
  id: boolean;
  password: boolean;
}

export const useLoginScreenData = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [focusedInput, setFocusedInput] = useState<FocusedInput | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleIdInput = (newId: string) => {
    setId(newId);
  };

  return {handleIdInput};
};
