import {Box, Stack} from '@mobily/stacks';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {FormProvider} from 'react-hook-form';
import {ImageBackground} from 'react-native';

import {RootStackParamList} from '../root.navigator';

import {useLoginForm} from './hooks';
import {
  LoginIdInputModule,
  LoginLoginButtonModule,
  LoginPasswordInputModule,
} from './modules';

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
            <LoginLoginButtonModule />
          </Stack>
        </ImageBackground>
      </Box>
    </FormProvider>
  );
};
