import {Box, Rows, Stack, Columns, Column} from '@mobily/stacks';
import {useState} from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import {ModalComponent} from '../../layout';
import {ModalButton} from '../modalbutton';

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
    <Box
      style={{
        width: 290,
        height: 428,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
      }}
      paddingX={10}
      paddingY={5}>
      <Stack space={4} align={'right'}>
        <TouchableOpacity onPress={openModal}>
          <Icon name="dots-three-horizontal" size={16} />
          <ModalComponent showModal={showModal} setShowModal={setShowModal}>
            <Stack space={5}>
              <ModalButton color="#E58634" title="수정하기"></ModalButton>
              <ModalButton color="#000000" title="삭제하기"></ModalButton>
            </Stack>
          </ModalComponent>
        </TouchableOpacity>
        <Box style={{width: 210, height: 280, backgroundColor: '#D9D9D9'}}>
          <Image source={ImageURL} style={{width: 210, height: 280}} />
        </Box>
        <Stack space={3} style={{width: 210, height: 54}}>
          <Box style={{width: 210, height: 80}}>
            <Rows space={3}>
              <Columns space={8} alignX="around">
                <Column width={'content'}>
                  <Stack space={1}>
                    <Text
                      style={{
                        color: '#000000',
                        fontSize: 15,
                        fontWeight: '700',
                        width: 125,
                      }}>
                      {SampleFeedData.user}
                    </Text>
                    <Text
                      style={{
                        color: '#000000',
                        fontSize: 10,
                        fontWeight: '400',
                        width: 125,
                      }}>
                      {SampleFeedData.content}
                    </Text>
                  </Stack>
                </Column>
                <Column width={'content'}>
                  <Columns space={3} style={{width: 50}}>
                    <Icon name="heart-outlined" size={20} />
                    <Icon name="chat" size={20} />
                  </Columns>
                </Column>
              </Columns>
              <Box alignX={'right'}>
                <Text
                  style={{color: '#000000', fontSize: 10, fontWeight: '400'}}>
                  {SampleFeedData.date}
                </Text>
              </Box>
            </Rows>
          </Box>
        </Stack>
      </Stack>
    </Box>
  ) : (
    <Box
      style={{
        width: 290,
        height: 428,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
      }}
      paddingX={10}
      paddingY={10}>
      <Stack space={4}>
        <Box style={{width: 210, height: 280, backgroundColor: '#D9D9D9'}}>
          <Image source={ImageURL} style={{width: 210, height: 280}} />
        </Box>
        <Stack space={3} style={{width: 210, height: 54}}>
          <Box style={{width: 210, height: 80}}>
            <Rows space={3}>
              <Columns space={8} alignX="around">
                <Column width={'content'}>
                  <Stack space={1}>
                    <Text
                      style={{
                        color: '#000000',
                        fontSize: 15,
                        fontWeight: '700',
                        width: 125,
                      }}>
                      {SampleFeedData.user}
                    </Text>
                    <Text
                      style={{
                        color: '#000000',
                        fontSize: 10,
                        fontWeight: '400',
                        width: 125,
                      }}>
                      {SampleFeedData.content}
                    </Text>
                  </Stack>
                </Column>
                <Column width={'content'}>
                  <Columns space={3} style={{width: 50}}>
                    <Icon name="heart-outlined" size={20} />
                    <Icon name="chat" size={20} />
                  </Columns>
                </Column>
              </Columns>
              <Box alignX={'right'}>
                <Text
                  style={{color: '#000000', fontSize: 10, fontWeight: '400'}}>
                  {SampleFeedData.date}
                </Text>
              </Box>
            </Rows>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};
