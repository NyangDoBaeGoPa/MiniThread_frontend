import {Box} from '@mobily/stacks';
import {FlatList, Text} from 'react-native';

import {Photo} from '../../components';
import {SampleFeedData} from '../../const';

const EndofList = () => {
  return (
    <Box style={{height: 100}} alignX={'center'} alignY={'center'}>
      <Text style={{color: '#000000', fontSize: 10, fontWeight: '400'}}>
        더 이상 불러올 게시물이 없습니다.
      </Text>
    </Box>
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
      ItemSeparatorComponent={() => <Box paddingY={10} />}
      ListFooterComponent={EndofList}
    />
  );
};
