import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "expo";
import Colors from '../constants/Colors'

export default class extends React.Component {
    render() {
        const { color, text, icon, size, subhead } = this.props;
        console.log(text);
        return (
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={{ fontSize: size, color }}>{text}</Text>
                    <Icon.Iconfont
                        style={styles.icon}
                        name={icon}
                        color={color}
                        size={size}
                    />
                </View>
                <Text style={styles.subhead}>{subhead}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        
    },
    title: {
        flexDirection: 'row'
    },
    subhead: {
        fontSize: 10,
        color: Colors.subhead,
    }
});