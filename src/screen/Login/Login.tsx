import React, {useState} from 'react';
import {
  ImageBackground,
  Pressable,
  Text,
  TextInput,
  View,
  Alert,
} from 'react-native';
interface FocusedInput {
  id: boolean;
  password: boolean;
}

export const Login = ({navigation}: any) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [focusedInput, setFocusedInput] = useState<FocusedInput | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const canLogin = id && password;

  const handleLogin = () => {
    // login api
    Alert.alert('로그인 성공', '환영합니다');

    /*  if (canLogin) {
      navigation.navigate('Main');
    } else {
      setErrorMessage('Invalid id or password');
    };    */
  };

  return (
    <View>
      <ImageBackground
        source={{
          uri: 'https://res.cloudinary.com/dahw1d9li/image/upload/v1692434627/backgroundscreen_dv5tcz.png',
        }}
        style={{width: '100%', height: '100%'}}>
        <View
          style={{
            gap: 20,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TextInput
            placeholder="아이디를 입력하세요."
            value={id}
            onFocus={() => setFocusedInput({id: true, password: false})}
            onBlur={() => setFocusedInput(null)}
            onChangeText={text => setId(text)}
            placeholderTextColor="#AAAAAA"
            style={{
              width: 250,
              height: 50,
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
            onFocus={() => setFocusedInput({id: false, password: true})}
            onBlur={() => setFocusedInput(null)}
            onChangeText={text => setPassword(text)}
            placeholderTextColor="#AAAAAA"
            style={{
              width: 250,
              height: 50,
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
          <Pressable
            onPress={handleLogin}
            style={{
              backgroundColor: canLogin ? '#E58634' : '#C4C4C4',
              paddingHorizontal: 36,
              paddingTop: 8,
              paddingBottom: 8,
              alignItems: 'center',
              width: 'auto',
              height: 'auto',
              borderRadius: 20,
              justifyContent: 'center',
              opacity: canLogin ? 1 : 0.5,
            }}
            disabled={!canLogin}>
            <Text style={{color: 'white', textAlign: 'center', fontSize: 15}}>
              로그인
            </Text>
          </Pressable>
          {errorMessage ? (
            <Text style={{color: 'red'}}>{errorMessage}</Text>
          ) : null}
        </View>
      </ImageBackground>
    </View>
  );
};
