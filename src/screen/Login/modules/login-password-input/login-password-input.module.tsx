import {Stack} from '@mobily/stacks';
import {memo, useState} from 'react';
import {useFormContext, useController} from 'react-hook-form';
import {TextInput} from 'react-native';

import {LoginForm} from '../../hooks';

import {Text} from '@/atoms';

export const LoginPasswordInputModule = memo(() => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const {control} = useFormContext<LoginForm>();
  const {
    field: {onChange, value},
    fieldState,
  } = useController({control, name: 'PassWord'});

  return (
    <Stack space={4}>
      <TextInput
        placeholder="비밀번호를 입력하세요."
        value={value}
        secureTextEntry
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChangeText={onChange}
        placeholderTextColor="#AAAAAA"
        style={{
          width: '100%',
          textAlign: 'center',
          backgroundColor: 'white',
          borderRadius: 20,
          paddingHorizontal: 40,
          paddingVertical: 16,
          fontSize: 12,
          borderColor: isFocused ? '#E58634' : 'white',
          borderWidth: 1,
        }}
      />
      <Text>{fieldState.error?.message}</Text>
    </Stack>
  );
});
