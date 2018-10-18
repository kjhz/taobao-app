import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "expo";
import Colors from '../constants/Colors'

export default class extends React.Component {
    render() {
        const { color, text, icon, iconColor, size, subhead, iconBackColor } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.title}>
                    <View style={[{ backgroundColor: iconBackColor }, styles.iconBack]}>
                        <Icon.Iconfont
                            style={styles.icon}
                            name={icon}
                            color={iconColor}
                            size={size}
                        />
                    </View>
                    <Text style={{ fontSize: size, color }}>{text}</Text>
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
        flexDirection: 'row',
        alignItems: 'center',
    },
    subhead: {
        fontSize: 10,
        color: Colors.subhead,
    },
    iconBack: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        padding: 1,
        marginRight: 3,
    }, 

});