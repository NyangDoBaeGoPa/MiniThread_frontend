import {Box} from '@mobily/stacks';
import {Pressable, Text} from 'react-native';

type ModalButtonPropsType = {
  title: string;
  color: string;
  onPress: () => void;
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
      <Pressable onPress={props.onPress}>
        <Text style={{color: '#FFFFFF'}}>{props.title}</Text>
      </Pressable>
    </Box>
  );
};
