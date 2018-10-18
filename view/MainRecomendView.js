import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableHighlight,TouchableOpacity } from "react-native";
import MultiColumn from "../components/MultiColumnLayout";
import Title from '../components/TitleWithIcon';

export default class MainRecomend extends React.Component {
    render() {
        const { TaoData, navigation } = this.props;
        return (
            <View style={[styles.container, { height: 100 * TaoData.length }]} >
                {TaoData.map((current, index) =>
                    <View style={styles.row} key={index}>
                        <RowContent currentData={current} navigation={navigation} />
                    </View>
                )}
            </View>
        );
    }
}

class RowContent extends React.Component {
    render() {
        return (
            <MultiColumn>
                {this.props.currentData.map((cur, i) =>
                    <MultiColumn key={i}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail',{...cur})}>
                            <View>
                                <Title
                                    {...cur}
                                />
                                <Image
                                    source={cur.imgA}
                                    resizeMode='cover'
                                    style={styles.imgA}
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('Detail')}>
                            <Image
                                source={cur.imgB}
                                resizeMode='cover'
                                style={styles.imgB}
                            />
                        </TouchableHighlight>
                    </MultiColumn>
                )}
            </MultiColumn>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        flex: 1,
    },
    imgA: {
        width: 60,
        height: 60,
    },
    imgB: {
        width: 80,
        height: 80
    }
});
