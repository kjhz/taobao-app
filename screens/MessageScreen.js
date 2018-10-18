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
} from 'react-native'
import { Video, Icon } from "expo";
import Swiper from 'react-native-swiper'
import Colors from '../constants/Colors'
import BANNERS from "../data/BannerData";
import CustomFunctionButtonGroup from "../components/CustomFunctionButtonGroup";
import HomeTitle from "../components/LogoTitle/HomeTitle";
import { FlatList } from 'react-native-gesture-handler';
import ScrollText from '../components/VerticalAutoScroll';
import { BulletinData } from "../data/BulletinData";
import MultiColumn from '../components/MultiColumnLayout';
import MainRecomend from '../view/MainRecomend';

const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
  }

  _onRefresh = () => {
    this.setState({ refreshing: true });
    /*  
    fetchData().then(() => {
        this.setState({refreshing: false});
    }); 
    */
    setTimeout(() => {
      this.setState({ refreshing: false })
    }, 500);
  }
  static navigationOptions = {
    headerTitle: <HomeTitle />
  };

  render() {
    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh} />}
        style={{ backgroundColor: 'white' }}
      >
        <Swiper autoplay paginationStyle={{ bottom: 5 }} activeDotColor={Colors.tintColor} style={styles.swiper}>
          {BANNERS[0].map((value, index) => <View style={styles.slide} key={index}><Image resizeMode='cover' style={styles.slideImage} source={value} /></View>)}
        </Swiper>
        <CustomFunctionButtonGroup
          style={styles.functionButtonGroup}
        />
        <View style={styles.bulletinBoard}>
          <Image
            style={styles.toutiao}
            source={require('../images/bulletin/taobaotoutiao.png')}
          />
          <ScrollText interval={2} scrollLength={30} >
            {BulletinData[0].map((current, index) => {
              return (
                <View style={styles.bulletinView} key={index}>
                  <Text style={styles.bulletinTextLabel}>{current.label}</Text>
                  <Text style={styles.bulletinText}>{current.text}</Text>
                </View>
              );
            })}
          </ScrollText>
        </View>
        <MainRecomend  />
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
    color: 'red',
    marginRight: 3
  },
  bulletinText: {
  }
});