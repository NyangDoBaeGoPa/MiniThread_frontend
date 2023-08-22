import {Box, Column, Columns, Stack} from '@mobily/stacks';
import {Header} from '@react-navigation/stack';
import React from 'react';
import {ImageBackground, Pressable, Text, TextInput} from 'react-native';

// fdsfsdf w f
export const Upload = () => {
  return (
    <Box>
      <ImageBackground
        source={{
          uri: 'https://res.cloudinary.com/dahw1d9li/image/upload/v1692434627/backgroundscreen_dv5tcz.png',
        }}
        style={{width: '100%', height: '100%'}}>
        <Stack>
          <Columns>
            <Column>
              <Stack style={{backgroundColor: 'red'}}>
                <Text>안녕</Text>
              </Stack>
            </Column>
          </Columns>
        </Stack>
      </ImageBackground>
    </Box>
  );
};
