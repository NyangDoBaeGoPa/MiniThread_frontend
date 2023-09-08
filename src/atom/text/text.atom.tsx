import {ReactNode} from 'react';
import {Text as RNText} from 'react-native';

type TextProps = {
  children: ReactNode;
  style?: any;
  // ... 다른 필요한 props들
};

export const Text = ({children, style, ...restProps}: TextProps) => {
  return (
    <RNText style={{fontFamily: 'Roboto', color: '#AAAAAA'}} {...restProps}>
      {children}
    </RNText>
  );
};
