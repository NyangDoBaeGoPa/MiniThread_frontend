import React, {useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {PlusImage} from '../../const';
import {ModalComponent} from '../Modal';
import {ModalButton} from '../../components';
import {Stack} from '@mobily/stacks';
export const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <View
      style={{
        flex: 0.09,
        backgroundColor: '#F2EBE5',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={openModal}>
        <Image
          source={PlusImage}
          style={{
            width: 24,
            height: 24,
          }}
        />
        <ModalComponent showModal={showModal} setShowModal={setShowModal}>
          <Stack space={5}>
            <ModalButton color="#E58634" title="갤러리에서 선택"></ModalButton>
            <ModalButton color="#000000" title="촬영하기"></ModalButton>
          </Stack>
        </ModalComponent>
      </TouchableOpacity>
    </View>
  );
};
