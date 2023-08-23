import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ImageBackground, Pressable, Text, TextInput, Alert} from 'react-native';
import {Box, Stack} from '@mobily/stacks';
import {useLoginScreenData} from './login.hook';
import {StackNavigationProp} from '@react-navigation/stack';
import {HomeScreen} from '../Home';
import {RootStackParamList} from '../../App';
interface FocusedInput {
  id: boolean;
  password: boolean;
}

export const LoginScreen = () => {
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, 'Home'>>();
  // const route = useRoute();

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
    // login api
    Alert.alert('로그인 성공', '환영합니다');
    navigation.navigate('Home');
    /*  if (canLogin) {
      navigation.navigate('Main');
    } else {
      setErrorMessage('Invalid id or password');
    };    */
  };

  return (
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
          <TextInput
            placeholder="아이디를 입력하세요."
            value={id}
            onFocus={() => handleFocusedInput({id: true, password: false})}
            onBlur={() => handleFocusedInput(null)}
            onChangeText={handleIdInput}
            placeholderTextColor="#AAAAAA"
            style={{
              width: '100%',
              textAlign: 'center',
              backgroundColor: 'white',
              borderRadius: 20,
              paddingHorizontal: 40,
              paddingVertical: 16,
              fontSize: 12,
              borderColor: focusedInput?.id ? '#E58634' : 'white',
              borderWidth: 1,
            }}
          />
          <TextInput
            placeholder="비밀번호를 입력하세요."
            value={password}
            secureTextEntry
            onFocus={() => handleFocusedInput({id: false, password: true})}
            onBlur={() => handleFocusedInput(null)}
            onChangeText={handlePasswordInput}
            placeholderTextColor="#AAAAAA"
            style={{
              width: '100%',
              textAlign: 'center',
              backgroundColor: 'white',
              borderRadius: 20,
              paddingHorizontal: 40,
              paddingVertical: 16,
              fontSize: 12,
              borderColor: focusedInput?.password ? '#E58634' : 'white',
              borderWidth: 1,
            }}
          />
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
              <Text style={{color: 'white', textAlign: 'center', fontSize: 15}}>
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
  );
};
