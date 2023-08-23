import {Box, Column, Columns, Row, Rows, Stack} from '@mobily/stacks';
import {Header} from '@react-navigation/stack';
import React from 'react';
import {ImageBackground, Pressable, Text, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useUploadScreenData} from './upload.hook';
import {useNavigation} from '@react-navigation/native';

export const UploadScreen = () => {
  const navigation = useNavigation();
  const {content, handleUploadInput} = useUploadScreenData();
  return (
    <Box>
      <ImageBackground
        source={{
          uri: 'https://res.cloudinary.com/dahw1d9li/image/upload/v1692434627/backgroundscreen_dv5tcz.png',
        }}
        style={{width: '100%', height: '100%'}}>
        <Columns
          paddingY={20}
          paddingX={24}
          style={{backgroundColor: '#E4DCD5'}}>
          <Column width={'content'}>
            <Pressable
              onPress={() => {
                navigation.goBack();
              }}>
              <Icon name="close" size={30} color="black" />
            </Pressable>
          </Column>

          <Column width={'fluid'} style={{alignItems: 'center'}}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
              게시물 업로드
            </Text>
          </Column>

          <Column width={'content'}>
            <Pressable>
              <Icon name="check" size={30} color="black" />
            </Pressable>
          </Column>
        </Columns>

        <Stack paddingX={32} paddingY={20} style={{gap: 30}}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>catcatlove</Text>

          <TextInput
            value={content}
            onChangeText={handleUploadInput}
            underlineColorAndroid="transparent"
            placeholder="이 사진에 담긴 이야기를 들려주세요!"
            style={{
              padding: 0,
              color: 'grey',
              fontSize: 15,
              fontStyle: 'normal',
            }}
          />
        </Stack>

        <Stack>
          <Text>catcatlove</Text>
        </Stack>
      </ImageBackground>
    </Box>
  );
};
