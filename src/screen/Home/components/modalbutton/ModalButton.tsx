import React from 'react';
import {View, Text} from 'react-native';

type ModalButtonPropsType = {
  title: string;
  color: string;
};
export const ModalButton = (props: ModalButtonPropsType) => {
  return (
    <View
      style={{
        width: 220,
        height: 40,
        backgroundColor: props.color,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
      }}>
      <Text style={{color: '#FFFFFF'}}>{props.title}</Text>
    </View>
  );
};
