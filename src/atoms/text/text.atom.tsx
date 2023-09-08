import {ReactNode} from 'react';
import {Text as RNText, TextStyle} from 'react-native';

type TextProps = {
  children: ReactNode;
  style?: TextStyle;
};

export const Text = ({children, style, ...restProps}: TextProps) => {
  return (
    <RNText style={{fontFamily: 'Roboto', color: '#AAAAAA'}} {...restProps}>
      {children}
    </RNText>
  );
};
