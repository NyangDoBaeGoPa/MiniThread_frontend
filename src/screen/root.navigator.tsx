import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen} from './Home';
import {LoginScreen} from './Login';
import {UploadScreen} from './Upload';

type RootNavigatorProps = {};
type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Upload: {photos: string[]};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = ({}: RootNavigatorProps) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Upload" component={UploadScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
