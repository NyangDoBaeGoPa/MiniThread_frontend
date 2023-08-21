import React, {useState} from 'react';
import {View, Modal, Pressable} from 'react-native';
import {ModalButton} from '../../components';

type ModalComponentPropsType = {
  showModal: boolean;
  setShowModal: Function;
  children: any;
};
export const ModalComponent = (props: ModalComponentPropsType) => {
  return props.showModal ? (
    <View style={{backgroundColor: 'rgba(0,0,0, 0.5)'}}>
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
          <View style={{marginBottom: 20}}>{props.children}</View>
        </Pressable>
      </Modal>
    </View>
  ) : null;
};
