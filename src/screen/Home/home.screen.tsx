import React from 'react';
import {ImageBackground} from 'react-native';
import {bgImageURL} from './const';
import {FeedList, Footer} from './layout';
import {Row, Rows} from '@mobily/stacks';
export const HomeScreen = () => {
  return (
    <ImageBackground
      source={bgImageURL}
      resizeMode="cover"
      style={{
        width: '100%',
        height: '100%',
      }}>
      <Rows>
        <Row
          height="fluid"
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <FeedList />
        </Row>
        <Row height="content">
          <Footer />
        </Row>
      </Rows>
    </ImageBackground>
  );
};
