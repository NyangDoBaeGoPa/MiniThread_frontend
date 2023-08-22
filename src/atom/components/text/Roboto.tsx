import React, {ReactNode} from 'react';
import {Text} from 'react-native';

interface RobotoProps {
  children: ReactNode;
  style?: any;
  // ... 다른 필요한 props들
}

export const Roboto = ({children, style, ...restProps}: RobotoProps) => {
  return (
    <Text style={{fontFamily: 'Roboto', color: '#AAAAAA'}} {...restProps}>
      {children}
    </Text>
  );
};
