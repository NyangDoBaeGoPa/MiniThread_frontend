import React, {useState} from 'react';
import {Button, ImageBackground, Text, TextInput, View} from 'react-native';
import Login from './screen/Login/Login';

const test = ({navigation}: any) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    // 여기에 로그인 로직을 구현하세요.
    // 예를 들어, 입력된 username과 password를 검증하고 인증을 수행합니다.
    // 인증이 성공하면 다음 화면으로 이동하도록 처리합니다.

    if (id === 'user' && password === 'password') {
      // 로그인 성공 시 다음 화면으로 이동
      navigation.navigate('PostList');
    } else {
      setErrorMessage('Invalid id or password');
    }
  };

  return (
    <View>
      <Login />
      <ImageBackground source={require('./src/backgroundscreen.png')}>
        <Text>test</Text>
        <TextInput
          placeholder="아이디를 입력하세요."
          value={id}
          onChangeText={text => setId(text)}
        />
        <TextInput
          placeholder="비밀번호를 입력하세요."
          value={password}
          secureTextEntry
          onChangeText={text => setPassword(text)}
        />
        <Button title="test" onPress={handleLogin} />
        {errorMessage ? (
          <Text style={{color: 'red'}}>{errorMessage}</Text>
        ) : null}
      </ImageBackground>
    </View>
  );
};

export default test;
