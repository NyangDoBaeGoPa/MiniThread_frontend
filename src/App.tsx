import React, {useEffect} from 'react';
import {Box, StacksProvider} from '@mobily/stacks';
import SplashScreen from 'react-native-splash-screen';
import {LoginScreen} from './screen/Login/Login.screen';
import {UploadScreen} from './screen/Upload';
import {HomeScreen} from './screen/Home';

export default function App() {
  useEffect(() => {
    try {
      setTimeout(() => {
        SplashScreen.hide();
      }, 500); //스플래시 활성화 시간 2초
    } catch (e) {
      console.log(e.message);
    }
  });

  return (
    <StacksProvider spacing={1}>
      <UploadScreen />
    </StacksProvider>
  );
}
