import React from 'react';
import {View, FlatList, Text} from 'react-native';
import {SampleFeedData} from '../../const';
import {Photo} from '../../components';
type SampleFeedDataType = {
  id: number;
  user: string;
  date: string;
  content: string;
  image: URL;
};
const EndofList = () => {
  return (
    <View style={{height: 100, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: '#000000', fontSize: 10, fontWeight: '400'}}>
        더 이상 불러올 게시물이 없습니다.
      </Text>
    </View>
  );
};
const renderItem = ({item}) => {
  return (
    <Photo
      id={item.id}
      user={item.user}
      content={item.content}
      date={item.date}
      image={item.image}
    />
  );
};
export const FeedList = () => {
  return (
    <FlatList
      data={SampleFeedData}
      renderItem={renderItem}
      ItemSeparatorComponent={() => <View style={{height: 40}} />}
      ListFooterComponent={EndofList}
    />
  );
};
