import React, {useEffect, useRef, useState} from 'react';
import {View, StyleSheet, FlatList, Image, Dimensions} from 'react-native';
import colors from '../colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Carousel = () => {
  const flatlistRef = useRef();
  const screenWidth = Dimensions.get('window').width;

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      if (activeIndex === CarouselData.length - 1) {
        flatlistRef.current.scrollToIndex({
          index: 0,
          animated: true,
        });
      } else {
        flatlistRef.current.scrollToIndex({
          index: activeIndex + 1,
          animated: true,
        });
      }
    }, 2000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  const getItemLayout = (data, index) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index,
  });

  const CarouselData = [
    {
      id: '01',
      Image: require('../../../assets/images/offer1.jpg'),
    },
    {
      id: '02',
      Image: require('../../../assets/images/offer2.jpg'),
    },
    {
      id: '03',
      Image: require('../../../assets/images/offer3.jpg'),
    },
    {
      id: '04',
      Image: require('../../../assets/images/Carousel2.jpg'),
    },
    {
      id: '05',
      Image: require('../../../assets/images/Carousel1.jpg'),
    },
  ];

  const renderItem = ({item, index}) => {
    return (
      <View style={[styles.carouselItem, {width: screenWidth}]}>
        <Image style={[styles.image]} source={item.Image} />
      </View>
    );
  };

  const renderDotIndicators = () => {
    return CarouselData.map((dot, index) => (
      <View
        key={index}
        style={[
          styles.dotIndicator,
          activeIndex === index ? styles.activeDot : styles.inactiveDot,
        ]}
      />
    ));
  };

  const handleScroll = event => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.floor(scrollPosition / screenWidth);
    setActiveIndex(index);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={CarouselData}
        ref={flatlistRef}
        getItemLayout={getItemLayout}
        renderItem={renderItem}
        snapToAlignment="center"
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        onScroll={handleScroll}
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.dotContainer}>{renderDotIndicators()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //    marginVertical:10
    //  backgroundColor:'pink'
  },
  carouselItem: {
    height: hp('20%'),
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'red'
  },
  image: {
    width: wp('95%'),
    height: hp('18%'),
    resizeMode: 'contain',
    borderRadius: wp('2'),
    // backgroundColor:'pink'
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: hp('-0.6'),
    // backgroundColor:'yellow'
  },
  dotIndicator: {
    width: wp('1.5'),
    height: hp('0.8'),
    borderRadius: 5,
    marginHorizontal: wp('2'),
  },
  activeDot: {
    backgroundColor: colors.themePrimary,
  },
  inactiveDot: {
    backgroundColor: colors.gray,
  },
});

export default Carousel;
