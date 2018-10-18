import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import { Icon } from 'expo';
import { createStackNavigator } from "react-navigation";

import HomeScreen from "../../screens/HomeScreen";
import ScanScreen from "../../screens/subScreens/ScanScreen";

export default class HomeTitle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: '寻找宝贝、店铺' };
    }
    

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight
                    onPress={() => this.props.navigation.push('Detail')}
                >
                <View style={styles.sideIcon} >
                    <Icon.Iconfont
                        name="icon-scan"
                        size={23}
                        style={{ marginBottom: 3 }}
                        color="white"
                    />
                    <Text style={styles.underText}>扫一扫</Text>
                </View>
                </TouchableHighlight>
                <View style={[styles.centerInput, { flex: 1 }]}>
                    <Icon.Iconfont
                        name="icon-search"
                        size={18}
                        style={{marginRight: 6}}
                        color="white"
                    />
                    <Text
                        style={[styles.textInput, { flex: 1 }]}
                        
                    >
                        {this.state.text}
                    </Text>
                    <Icon.Iconfont
                        name="icon-camera"
                        size={18}
                        style={{marginLeft: 6}}
                        color="white"
                    />
                </View>
                <View style={styles.sideIcon}>
                    <Icon.Iconfont
                        name="icon-qrcode"
                        size={23}
                        style={{ marginBottom: 3 }}
                        color="white"
                    />
                    <Text style={styles.underText}>会员码</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-around',
        backgroundColor: '#ecf0f1',
        backgroundColor: 'transparent',
    },
    sideIcon: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 15,
        marginRight: 15,
    },
    underText: {
        fontSize: 10,
        color: 'white'
    },
    centerInput: {
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        color: 'white',
        borderBottomWidth: 0
    }


});
