import React, {useEffect} from 'react';
import {View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Sign from './pages/Sign';
//import {StacksProvider} from '@mobily/stacks';
import {HomeScreen} from './screen/Home/home.screen';
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
    <View>
      <HomeScreen />
    </View>
  );
}
