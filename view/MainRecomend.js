import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import MultiColumn from "../components/MultiColumnLayout";
import Title from '../components/TitleWithIcon';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    <MultiColumn>
                        <MultiColumn>
                            <View>
                                <Title text="淘抢购" subhead="进入查看更多" />
                                <Image source={require('../images/productNav/product1.jpg')} resizeMode='cover' style={styles.img} />
                            </View>
                            <Image source={require('../images/productNav/product2.jpg')} resizeMode='cover' style={{ flex:1}} />
                        </MultiColumn>
                        <MultiColumn>
                            <View>
                                <Title text="有好货" subhead="高颜值美物" />
                                <Image source={require('../images/productNav/product3.jpg')} resizeMode='cover' style={styles.img} />
                            </View>
                            <Image source={require('../images/productNav/product4.jpg')} resizeMode='cover' style={{ flex:1}} />
                        </MultiColumn>
                    </MultiColumn>
                </View>
                <View style={{ flex: 1 }}>
                    <MultiColumn>
                        <MultiColumn>
                            <View>
                                <Title text="哇哦视频" subhead="有料小视频" />
                                <Image source={require('../images/productNav/product5.jpg')} resizeMode='cover' style={styles.img}  />
                            </View>
                            <Image source={require('../images/productNav/product6.jpg')} resizeMode='cover' style={{flex1}} />
                        </MultiColumn>
                        <MultiColumn>
                            <View>
                                <Title text="购买清单" subhead="购物全攻略" />
                                <Image source={require('../images/productNav/product7.jpg')} resizeMode='cover' style={styles.img}  />
                            </View>
                            <Image source={require('../images/productNav/product8.jpg')} resizeMode='cover' style={{ flex: 1}} />
                        </MultiColumn>
                    </MultiColumn>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        display: 'flex',
    },
    row: {
        flex: 1,
        flexDirection: 'row'
    },
    img:{
        width: 60,
        height: 60,
    }
});