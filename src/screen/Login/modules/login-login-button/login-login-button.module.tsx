import {Box} from '@mobily/stacks';
import {useNavigation} from '@react-navigation/native';
import {memo} from 'react';
import {SubmitHandler, useFormContext} from 'react-hook-form';
import {Alert, Pressable} from 'react-native';

import {LoginScreenNavigationProps} from '../../Login.screen';
import {LoginForm} from '../../hooks';

import {Text} from '@/atoms';

type LoginLoginButtonModuleProps = {};

export const LoginLoginButtonModule = memo<LoginLoginButtonModuleProps>(() => {
  const navigation = useNavigation<LoginScreenNavigationProps>();

  // 아래의 로직을 custom hook 으로 분리하면 더 깔끔하겠죠?
  const {formState, handleSubmit} = useFormContext<LoginForm>();
  const {isDirty, isValid, errors} = formState;
  const isLoginPossible = isDirty && isValid;

  // SubmitHandler + formType 을 넣어줬기때문에 인수의 타입이 자동으로 잡히는 모습입니다.
  const showAlert: SubmitHandler<LoginForm> = ({ID, PassWord}) => {
    Alert.alert('로그인 성공', `ID : ${ID} Password : ${PassWord}`);
    navigation.replace('Home');
  };

  const handlePressLoginButton = () => {
    handleSubmit(showAlert)();
  };

  return (
    <Box alignX="center" direction="row">
      <Pressable
        onPress={handlePressLoginButton}
        style={{
          backgroundColor: isLoginPossible ? '#E58634' : '#C4C4C4',
          paddingHorizontal: 36,
          paddingTop: 8,
          paddingBottom: 8,
          alignItems: 'center',
          borderRadius: 20,
          justifyContent: 'center',
          opacity: isLoginPossible ? 1 : 0.5,
        }}
        disabled={!isLoginPossible}>
        <Text style={{color: 'white', textAlign: 'center', fontSize: 15}}>
          로그인
        </Text>
      </Pressable>
    </Box>
  );
});
