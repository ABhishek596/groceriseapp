import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedRef,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import {JsonData} from '../../json/JsonData';
import Pagination from '../../components/pagination/Pagination';
import {CustomButton} from '../../components/file';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const OnboardingScreen = () => {
  const {width: SCREEN_WIDTH} = useWindowDimensions();
  const flatListRef = useAnimatedRef(null);
  const x = useSharedValue(0);
  const flatListIndex = useSharedValue(0);

  const onViewableItemsChanged = ({viewableItems}) => {
    flatListIndex.value = viewableItems[0].index;
  };

  // const onScroll = useAnimatedScrollHandler({
  //   onScroll: event => {
  //     x.value = event.contentOffset.x;
  //   },
  // });

  const onScroll = useAnimatedScrollHandler({
    onScroll: event => {
      x.value = event.contentOffset.x;
      flatListIndex.value = Math.floor(event.contentOffset.x / SCREEN_WIDTH);
    },
  });

  // eslint-disable-next-line react/no-unstable-nested-components
  const RenderItem = ({item, index}) => {
    const imageAnimationStyle = useAnimatedStyle(() => {
      const opacityAnimation = interpolate(
        x.value,
        [
          (index - 1) * SCREEN_WIDTH,
          index * SCREEN_WIDTH,
          (index + 1) * SCREEN_WIDTH,
        ],
        [0, 1, 0],
        Extrapolate.CLAMP,
      );
      const translateYAnimation = interpolate(
        x.value,
        [
          (index - 1) * SCREEN_WIDTH,
          index * SCREEN_WIDTH,
          (index + 1) * SCREEN_WIDTH,
        ],
        [100, 0, 100],
        Extrapolate.CLAMP,
      );
      return {
        opacity: opacityAnimation,
        width: SCREEN_WIDTH * 0.8,
        height: SCREEN_WIDTH * 0.8,
        transform: [{translateY: translateYAnimation}],
      };
    });
    const textAnimationStyle = useAnimatedStyle(() => {
      const opacityAnimation = interpolate(
        x.value,
        [
          (index - 1) * SCREEN_WIDTH,
          index * SCREEN_WIDTH,
          (index + 1) * SCREEN_WIDTH,
        ],
        [0, 1, 0],
        Extrapolate.CLAMP,
      );
      const translateYAnimation = interpolate(
        x.value,
        [
          (index - 1) * SCREEN_WIDTH,
          index * SCREEN_WIDTH,
          (index + 1) * SCREEN_WIDTH,
        ],
        [100, 0, 100],
        Extrapolate.CLAMP,
      );

      return {
        opacity: opacityAnimation,
        transform: [{translateY: translateYAnimation}],
      };
    });
    return (
      <View style={[styles.itemContainer, {width: SCREEN_WIDTH}]}>
        <Animated.Image source={item.image} style={imageAnimationStyle} />
        <Animated.View style={textAnimationStyle}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemText}>{item.text}</Text>
        </Animated.View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.FlatList
        ref={flatListRef}
        onScroll={onScroll}
        data={JsonData.data}
        renderItem={({item, index}) => {
          return <RenderItem item={item} index={index} />;
        }}
        keyExtractor={item => item.id}
        scrollEventThrottle={16}
        horizontal={true}
        bounces={false}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{
          minimumViewTime: 300,
          viewAreaCoveragePercentThreshold: 10,
        }}
      />
      <View style={styles.bottomContainer}>
        <Pagination data={JsonData.data} x={x} screenWidth={SCREEN_WIDTH} />
        <CustomButton
          flatListRef={flatListRef}
          flatListIndex={flatListIndex}
          dataLength={JsonData.data.length}
        />
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  itemContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  itemTitle: {
    textAlign: 'center',
    fontSize: wp('5'),
    fontWeight: 'bold',
    marginBottom: hp('1.5'),
    color: 'black',
  },
  itemText: {
    textAlign: 'center',
    marginHorizontal: wp('10'),
    color: 'black',
    lineHeight: 20,
    fontSize: wp('4'),
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: wp('5'),
    paddingVertical: hp('3'),
  },
});
