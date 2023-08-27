import React, {useEffect} from 'react';
import {Box, StacksProvider} from '@mobily/stacks';
import SplashScreen from 'react-native-splash-screen';
import {LoginScreen} from './screen/Login/Login.screen';
import {UploadScreen} from './screen/Upload';
import {HomeScreen} from './screen/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Upload: {photos: string[]};
};
const Stack = createNativeStackNavigator<RootStackParamList>();

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
    <NavigationContainer>
      <StacksProvider spacing={1}>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            options={{headerShown: false}}
            name="Login"
            component={LoginScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Upload"
            component={UploadScreen}
          />
        </Stack.Navigator>
      </StacksProvider>
    </NavigationContainer>
  );
}
