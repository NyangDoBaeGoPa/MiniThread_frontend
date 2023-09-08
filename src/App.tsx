import {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

import {RootNavigator} from './screen';

import {UIProvider} from '@/providers';

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
    <UIProvider>
      <RootNavigator />
    </UIProvider>
  );
};
