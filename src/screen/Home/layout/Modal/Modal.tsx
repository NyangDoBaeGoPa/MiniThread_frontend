import {Box} from '@mobily/stacks';
import React from 'react';
import {Modal, Pressable} from 'react-native';

type ModalComponentPropsType = {
  showModal: boolean;
  setShowModal: Function;
  children: any;
};
export const ModalComponent = (props: ModalComponentPropsType) => {
  return props.showModal ? (
    <Box style={{backgroundColor: 'rgba(0,0,0, 0.5)'}}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={props.showModal}
        onRequestClose={() => {
          props.setShowModal(!props.showModal);
        }}>
        <Pressable
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0, 0.5)',
          }}
          onPress={() => props.setShowModal(!props.showModal)}>
          <Box paddingBottom={5}>{props.children}</Box>
        </Pressable>
      </Modal>
    </Box>
  ) : null;
};
