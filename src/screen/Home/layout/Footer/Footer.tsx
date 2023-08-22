import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {ModalComponent} from '../Modal';
import {ModalButton} from '../../components';
import {Box, Stack} from '@mobily/stacks';
import Icon from 'react-native-vector-icons/Entypo';
export const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <Box
      style={{
        backgroundColor: '#F2EBE5',
      }}
      alignX={'center'}
      alignY={'center'}
      padding={4}>
      <TouchableOpacity onPress={openModal}>
        <Icon name="plus" size={30} />
        <ModalComponent showModal={showModal} setShowModal={setShowModal}>
          <Stack space={5}>
            <ModalButton color="#E58634" title="갤러리에서 선택"></ModalButton>
            <ModalButton color="#000000" title="촬영하기"></ModalButton>
          </Stack>
        </ModalComponent>
      </TouchableOpacity>
    </Box>
  );
};
