import React from 'react';
import {FlatList, Image, Text, TouchableOpacity} from 'react-native';
import {ModalComponent} from '../Modal';
import {ModalButton} from '../../components';
import {Box, Stack} from '@mobily/stacks';
import Icon from 'react-native-vector-icons/Entypo';
import {useFooterData} from './footer.hook';

export const Footer = () => {
  const {
    showModal,
    setShowModal,
    selectedPhotos,
    openModal,
    handleGallerySelection,
    handleCameraSelection,
    handleSelectionDone,
    navigation,
  } = useFooterData();

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
      </TouchableOpacity>
      <ModalComponent showModal={showModal} setShowModal={setShowModal}>
        <Stack space={5}>
          <ModalButton
            onPress={handleGallerySelection}
            color="#E58634"
            title="갤러리에서 선택"
          />
          <ModalButton
            onPress={handleCameraSelection}
            color="#000000"
            title="촬영하기"
          />
        </Stack>
        {selectedPhotos.length > 0 && (
          <Stack space={5}>
            <FlatList
              data={selectedPhotos}
              keyExtractor={item => item}
              numColumns={3}
              renderItem={({item}) => (
                <Image source={{uri: item}} style={{width: 100, height: 100}} />
              )}
            />
            <TouchableOpacity
              onPress={() => handleSelectionDone()}
              style={{
                backgroundColor: '#E58634',
                padding: 10,
                borderRadius: 5,
                alignItems: 'center',
              }}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>
                선택 완료
              </Text>
            </TouchableOpacity>
          </Stack>
        )}
      </ModalComponent>
    </Box>
  );
};
