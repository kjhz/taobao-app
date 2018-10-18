import React from "react";
import { View, Text, Button } from "react-native";

export default class detailScreen extends React.Component {
    static navigationOptions = {
        title: 'Detail',
    };

    render() {
        const { navigation } = this.props;
        const text = navigation.getParam('text', '暂无文本');

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 25, color: 'red' }}>{text}</Text>
                <Text style={{ fontSize: 18, marginVertical: 15 }}>该页面未完成</Text>
                <Button title="返回上一页" onPress={() => this.props.navigation.goBack()} />
            </View>
        );
    }
}