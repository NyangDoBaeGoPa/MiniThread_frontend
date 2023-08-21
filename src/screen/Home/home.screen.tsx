import React from 'react';
import {View, ImageBackground, SafeAreaView} from 'react-native';
import {image} from './const';
import {FeedList, Footer} from './layout';
export const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={{
          width: '100%',
          height: '100%',
        }}>
        <View style={{flex: 1}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              top: 20,
              flex: 0.91,
            }}>
            <FeedList />
          </View>
          <Footer />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
