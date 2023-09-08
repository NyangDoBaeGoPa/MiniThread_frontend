import {Box, Stack} from '@mobily/stacks';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {FormProvider} from 'react-hook-form';
import {ImageBackground, Pressable, Text, Alert} from 'react-native';

import {RootStackParamList} from '../root.navigator';

import {useLoginForm} from './hooks';
import {useLoginScreenData} from './login.hook';
import {LoginIdInputModule, LoginPasswordInputModule} from './modules';

type LoginScreenProps = {};

export type LoginScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

export type LoginScreenNavigationRouteProps = RouteProp<
  RootStackParamList,
  'Login'
>;

export const LoginScreen = ({}: LoginScreenProps) => {
  const navigation = useNavigation<LoginScreenNavigationProps>();
  const route = useRoute<LoginScreenNavigationRouteProps>();

  const methods = useLoginForm();

  const {
    id,
    password,
    focusedInput,
    canLogin,
    errorMessage,
    handleIdInput,
    handlePasswordInput,
    handleFocusedInput,
    handleError,
  } = useLoginScreenData();

  const handleLogin = () => {
    Alert.alert('로그인 성공', '환영합니다');
    navigation.navigate('Home');
  };

  return (
    <FormProvider {...methods}>
      <Box>
        <ImageBackground
          source={{
            uri: 'https://res.cloudinary.com/dahw1d9li/image/upload/v1692434627/backgroundscreen_dv5tcz.png',
          }}
          style={{width: '100%', height: '100%'}}>
          <Stack
            paddingX={55}
            space={20}
            style={{height: '100%', justifyContent: 'center'}}>
            <LoginIdInputModule />
            <LoginPasswordInputModule />
            <Box alignX="center" direction="row">
              <Pressable
                onPress={handleLogin}
                style={{
                  backgroundColor: canLogin ? '#E58634' : '#C4C4C4',
                  paddingHorizontal: 36,
                  paddingTop: 8,
                  paddingBottom: 8,
                  alignItems: 'center',
                  borderRadius: 20,
                  justifyContent: 'center',
                  opacity: canLogin ? 1 : 0.5,
                }}
                disabled={!canLogin}>
                <Text
                  style={{color: 'white', textAlign: 'center', fontSize: 15}}>
                  로그인
                </Text>
              </Pressable>
            </Box>
            {errorMessage ? (
              <Text style={{color: 'red'}}>{errorMessage}</Text>
            ) : null}
          </Stack>
        </ImageBackground>
      </Box>
    </FormProvider>
  );
};
