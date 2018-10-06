import React from "react";
import { View, Text, StyleSheet } from "react-native";
import  window from "../constants/Layout";

export default class ProfileScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ backgroundColor: 'powderblue',width: 50,height:50 }} />
                <View style={{ backgroundColor: 'powderblue', width: 50,height:50 }} />
                <View style={{ backgroundColor: 'skyblue', width: 50,height:50 }} />
                <View style={{backgroundColor: 'steelblue', width: 50,height:50 }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    
});