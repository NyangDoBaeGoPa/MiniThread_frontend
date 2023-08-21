import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {
  LikeImage,
  CommentImage,
  SampleFeedData,
  EditDeleteImage,
} from '../../const';
import {ModalComponent} from '../../layout';
import {ModalButton} from '../modalbutton';
import {Stack} from '@mobily/stacks';

type SampleFeedDataType = {
  id: number;
  user: string;
  date: string;
  content: string;
  image: string;
};

export const Photo = (SampleFeedData: SampleFeedDataType) => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(prev => !prev);
  };
  const ImageURL = {uri: SampleFeedData.image};
  const CurrentUser = 'catcatloves';
  const checkUser = CurrentUser == SampleFeedData.user;
  return checkUser ? (
    <View
      style={{
        width: 290,
        height: 428,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        paddingTop: 21,
        paddingBottom: 20,
        paddingHorizontal: 40,
        gap: 16,
        alignItems: 'flex-end',
      }}>
      <TouchableOpacity onPress={openModal}>
        <Image source={EditDeleteImage} style={{width: 16, height: 4}} />
        <ModalComponent showModal={showModal} setShowModal={setShowModal}>
          <Stack space={5}>
            <ModalButton color="#E58634" title="수정하기"></ModalButton>
            <ModalButton color="#000000" title="삭제하기"></ModalButton>
          </Stack>
        </ModalComponent>
      </TouchableOpacity>
      <View style={{width: 210, height: 280, backgroundColor: '#D9D9D9'}}>
        <Image source={ImageURL} style={{width: 210, height: 280}} />
      </View>
      <View
        style={{
          gap: 12,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
        }}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            flexDirection: 'row',
            gap: 32,
          }}>
          <View
            style={{
              gap: 12,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}>
            <Text style={{color: '#000000', fontSize: 15, fontWeight: '700'}}>
              {SampleFeedData.user}
            </Text>
            <Text style={{color: '#000000', fontSize: 10, fontWeight: '400'}}>
              {SampleFeedData.content}
            </Text>
          </View>
          <View
            style={{
              width: 50,
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'flex-start',
              gap: 12,
              flexDirection: 'row',
            }}>
            <Image source={LikeImage} style={{width: 20, height: 20}} />
            <Image source={CommentImage} style={{width: 20, height: 20}} />
          </View>
        </View>
        <View>
          <Text style={{color: '#000000', fontSize: 10, fontWeight: '400'}}>
            {SampleFeedData.date}
          </Text>
        </View>
      </View>
    </View>
  ) : (
    <View
      style={{
        width: 290,
        height: 428,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        paddingTop: 36,
        paddingBottom: 20,
        paddingHorizontal: 40,
        gap: 16,
      }}>
      <View style={{width: 210, height: 280, backgroundColor: '#D9D9D9'}}>
        <Image source={ImageURL} style={{width: 210, height: 280}} />
      </View>
      <View
        style={{
          gap: 12,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
        }}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            flexDirection: 'row',
            gap: 32,
          }}>
          <View
            style={{
              gap: 12,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}>
            <Text style={{color: '#000000', fontSize: 15, fontWeight: '700'}}>
              {SampleFeedData.user}
            </Text>
            <Text style={{color: '#000000', fontSize: 10, fontWeight: '400'}}>
              {SampleFeedData.content}
            </Text>
          </View>
          <View
            style={{
              width: 50,
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'flex-start',
              gap: 12,
              flexDirection: 'row',
            }}>
            <Image source={LikeImage} style={{width: 20, height: 20}} />
            <Image source={CommentImage} style={{width: 20, height: 20}} />
          </View>
        </View>
        <View>
          <Text style={{color: '#000000', fontSize: 10, fontWeight: '400'}}>
            {SampleFeedData.date}
          </Text>
        </View>
      </View>
    </View>
  );
};
