import {Box} from '@mobily/stacks';
import React from 'react';
import {Text} from 'react-native';

type ModalButtonPropsType = {
  title: string;
  color: string;
};
export const ModalButton = (props: ModalButtonPropsType) => {
  return (
    <Box
      style={{
        width: 220,
        height: 40,
        backgroundColor: props.color,
        borderRadius: 20,
      }}
      alignX={'center'}
      alignY={'center'}>
      <Text style={{color: '#FFFFFF'}}>{props.title}</Text>
    </Box>
  );
};
