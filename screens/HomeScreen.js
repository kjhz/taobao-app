import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  Dimensions,
  Button,
  ScrollView,
  RefreshControl,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native'
import { Video, Icon } from "expo";
import Swiper from 'react-native-swiper'
import Colors from '../constants/Colors'
import BANNERS from "../data/BannerData";
import CustomFunctionButtonGroup from "../components/CustomFunctionButtonGroup";
import HomeTitle from "../components/LogoTitle/HomeTitle";
import ScrollText from '../components/VerticalAutoScroll';
import MainRecomend from '../view/MainRecomendView';
import LinearGradient from "react-native-linear-gradient";

import { BulletinData } from "../data/BulletinData";
import { TaoData } from "../data/TaoData";

const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      loading: true
    };
  }

  static navigationOptions = {
    headerTitle: <HomeTitle />
  };

  _getRandomArrayElements(arr, count) {
    let shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
    while (i-- > min) {
      index = Math.floor((i + 1) * Math.random());
      temp = shuffled[index];
      shuffled[index] = shuffled[i];
      shuffled[i] = temp;
    }
    return shuffled.slice(min);
  }

  componentDidMount() {
    this.fetchData();
  }

  _onRefresh = () => {
    this.setState({ refreshing: true });

    this.fetchData().then(() => {
      this.setState({ refreshing: false });
    });

    /* setTimeout(() => {
      this.setState({ refreshing: false })
    }, 500); */
  }


  fetchData() {
    return fetch('https://raw.githubusercontent.com/kjhz/my-json/master/bulletinData.json')
      .then((response) => response.json())
      .then((responseJson) => {
        const bulletin = this._getRandomArrayElements(responseJson.bulletin, 4);
        this.setState({
          dataSource: { "bulletin": bulletin },
          loading: false
        });
      })
  }

  render() {
    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh} />}
        style={{ backgroundColor: 'white' }}
      >
        {/* 轮播图 */}
        <Swiper autoplay paginationStyle={{ bottom: 5 }} activeDotColor={Colors.tintColor} style={styles.swiper}>
          {BANNERS[0].map((value, index) => (
            <TouchableHighlight
              style={styles.slide} key={index}
              onPress={() => this.props.navigation.navigate('Detail', { text: 'Banner' + index })}
            >
              <Image resizeMode='cover' style={styles.slideImage} source={value} />
            </TouchableHighlight>))}
        </Swiper>

        {/* 导航栏  */}
        <CustomFunctionButtonGroup
          style={styles.functionButtonGroup}
        />

        {/* 淘宝头条 */}
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Detail', { text: '淘宝头条' })}
        >
          <View style={styles.bulletinBoard}>
            <Image
              style={styles.toutiao}
              source={require('../images/bulletin/taobaotoutiao.png')}
            />
            <ScrollText interval={2} scrollLength={30} style={{ overflow: 'hidden' }}>
              {this.state.loading ? null :
                this.state.dataSource.bulletin.map((current, index) => {
                  return (
                    <View style={styles.bulletinView} key={index}>
                      <Text>{current.label}</Text>
                      <Text style={styles.bulletinText}>{current.text}</Text>
                    </View>
                  );
                })}
            </ScrollText>
          </View>
          <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['rgba(0,0,0,0.2)', 'white']} style={styles.linearGradient} />
        </TouchableOpacity>

        {/* 淘抢购 推荐栏 */}
        <MainRecomend TaoData={TaoData} navigation={this.props.navigation} />

        {/* 淘宝直播 */}
        <View style={{ height: 345, backgroundColor: Colors.tabIconDefault }}>
          <View style={{ position: 'absolute', top: 10, width: 100, height: 30, borderTopRightRadius: 50, borderBottomRightRadius: 50, backgroundColor: Colors.deepPink, justifyContent: 'center', alignItems: 'center', zIndex: 1 }}>
            <Text style={{ color: 'white' }}>淘宝直播</Text>
          </View>
          <View style={{ marginTop: 25, height: 120, flexDirection: 'row' }}>
            <View style={{ flex: 2, height: 120, position: 'relative' }}>
              <Video
                source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                rate={1.0}
                volume={1.0}
                isMuted={true}
                resizeMode="cover"
                shouldPlay
                isLooping
                style={{ flex: 1 }}
              />
              <Text style={{ position: 'absolute', bottom: 20, color: 'white', left: 10 }}>“直播怎么那么好看”</Text>
              <Text style={{ position: 'absolute', bottom: 5, color: 'white', left: 10, fontSize: 10 }}>“钱包怎么越来越扁”</Text>
              <Icon.Iconfont name="icon-likefill" color='white' size={12} style={{ position: 'absolute', right: 10, bottom: 5, padding: 5, borderRadius: 50, backgroundColor: Colors.deepPink }} />
            </View>
            <View style={{ flex: 1, height: 120, position: 'relative' }}>
              <Image source={require('../images/products/1.jpg')} style={{ flex: 1 }} resizeMode='cover' />
              <Text style={{ position: 'absolute', bottom: 20, color: 'white', left: 10 }}>主播优选</Text>
              <Text style={{ position: 'absolute', bottom: 5, color: 'white', left: 10, fontSize: 10 }}>时尚运动鞋</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', height: 200, backgroundColor: 'white' }}>
            <View style={{ flex: 1 }}>
              <View style={{ position: 'relative', flex: 1 }}>
                <Text style={{ position: 'absolute', backgroundColor: Colors.deepPink, color: 'white', paddingHorizontal: 5, paddingVertical: 2, fontSize: 9, bottom: 0, left: 0, borderTopRightRadius: 10, zIndex: 1 }}>LIVE</Text>
                <Image source={require('../images/products/2.jpg')} style={{ flex: 1 }} />
              </View>
              <View style={{ padding: 10 }}>
                <Text>潮搭攻略</Text>
                <Text style={{ color: Colors.tabIconDefault, fontSize: 12 }}>蕾丝吊带背心</Text>
              </View>
            </View>
            <View style={{ flex: 1 }}>
              <View style={{ position: 'relative', flex: 1 }}>
                <Text style={{ position: 'absolute', backgroundColor: Colors.deepPink, color: 'white', paddingHorizontal: 5, paddingVertical: 2, fontSize: 9, bottom: 0, left: 0, borderTopRightRadius: 10, zIndex: 1 }}>LIVE</Text>
                <Image source={require('../images/products/3.jpg')} style={{ flex: 1 }} />
              </View>
              <View style={{ padding: 10 }}>
                <Text>珠光宝气</Text>
                <Text style={{ color: Colors.tabIconDefault, fontSize: 12 }}>后江开窗冰种</Text>
              </View>
            </View>
            <View style={{ flex: 1 }}>
              <View style={{ position: 'relative', flex: 1 }}>
                <Text style={{ position: 'absolute', backgroundColor: Colors.deepPink, color: 'white', paddingHorizontal: 5, paddingVertical: 2, fontSize: 9, bottom: 0, left: 0, borderTopRightRadius: 10, zIndex: 1 }}>LIVE</Text>
                <Image source={require('../images/products/4.jpg')} style={{ flex: 1 }} />
              </View>
              <View style={{ padding: 10 }}>
                <Text>男人装</Text>
                <Text style={{ color: Colors.tabIconDefault, fontSize: 12 }}>修身机车外套</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  swiper: {
    width: SCREEN_WIDTH,
    height: 140,
  },
  slide: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  slideImage: {
    width: SCREEN_WIDTH,
    height: 140
  },
  functionButtonGroup: {
    height: 140,
    marginTop: 10,
  },
  bulletinBoard: {
    height: 60,
    margin: 10,
    flexDirection: 'row',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center'
  },
  toutiao: {
    width: 40,
    height: 40,
  },
  bulletinView: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  bulletinTextLabel: {
    borderWidth: 1,
    borderRadius: 3,
    borderColor: 'red',
    padding: 1,
    paddingLeft: 2,
    fontSize: 9,
    marginRight: 3
  },
  bulletinText: {
  },
  liveView: {
    height: 345,
    backgroundColor: Colors.tabIconDefault
  },
  linearGradient:{
    width: 60,
    height: 60,
    position: 'absolute',
    right: 0
  }
});