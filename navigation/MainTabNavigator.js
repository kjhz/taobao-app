import React from 'react';
import { Platform, Text } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';

import HomeScreen from '../screens/HomeScreen';
import WeScreen from '../screens/WeScreen';
import MessageScreen from '../screens/MessageScreen';
import CartScreen from "../screens/CartScreen";
import ProfileScreen from "../screens/ProfileScreen";
import DetailScreen from "../screens/DetailScreen";
import Colors from "../constants/Colors"

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Detail: DetailScreen,
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    navigationOptions: {
      headerStyle: {
        backgroundColor: Colors.tintColor,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

HomeStack.navigationOptions = {
  tabBarLabel: '首页',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={`icon-home${focused ? 'fill' : ''}`}
    />
  ),
};

const WeStack = createStackNavigator({
  WeFind: WeScreen,
});

WeStack.navigationOptions = {
  tabBarLabel: '微淘',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={`icon-we${focused ? 'fill' : ''}`}
    />
  ),
};

const MessageStack = createStackNavigator({
  Message: MessageScreen,
});

MessageStack.navigationOptions = {
  tabBarLabel: '消息',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={`icon-message${focused ? 'fill' : ''}`}
    />
  ),
};

const CartStack = createStackNavigator({
  Cart: CartScreen,
});

CartStack.navigationOptions = {
  tabBarLabel: '购物车',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={`icon-cart${focused ? 'fill' : ''}`}
    />
  ),
};

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen,
});

ProfileStack.navigationOptions = {
  tabBarLabel: '我的淘宝',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={`icon-my${focused ? 'fill' : ''}`}
    />
  ),
};

export default createBottomTabNavigator(
  {
    HomeStack,
    WeStack,
    MessageStack,
    CartStack,
    ProfileStack,
  },
);