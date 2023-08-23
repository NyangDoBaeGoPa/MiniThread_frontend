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

  const canLogin = id && password;

  const handleIdInput = (newId: string) => {
    setId(newId);
  };

  const handlePasswordInput = (newPassword: string) => {
    setPassword(newPassword);
  };

  const handleFocusedInput = (input: FocusedInput | null) => {
    setFocusedInput(input);
  };

  const handleError = (message: string) => {
    setErrorMessage(message);
  };

  // Return all necessary data and functions
  return {
    id,
    password,
    focusedInput,
    canLogin,
    errorMessage,
    handleIdInput,
    handlePasswordInput,
    handleFocusedInput,
    handleError,
  };
};
