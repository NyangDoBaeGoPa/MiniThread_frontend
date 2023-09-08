import {StacksProvider} from '@mobily/stacks';
import {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

import {RootNavigator} from './screen';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Upload: {photos: string[]};
};

export const App = () => {
  useEffect(() => {
    try {
      setTimeout(() => {
        SplashScreen.hide();
      }, 500); //스플래시 활성화 시간 2초
    } catch (e: any) {
      console.log(e.message);
    }
  });

  return (
    <StacksProvider spacing={1}>
      <RootNavigator />
    </StacksProvider>
  );
};
