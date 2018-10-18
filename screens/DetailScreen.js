import React from "react";
import { View, Text,Button } from "react-native";

export default class detailScreen extends React.Component {
    static navigationOptions = {
        title: 'Detail',
    };

    render() {
        const {navigation} = this.props;
        const Item = navigation.getParam('Item', 'NO-Item');

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>该页面未完成</Text>
                <Text>item: { JSON.stringify(Item) }</Text>
                <Button title="返回上一页" onPress={ () => this.props.navigation.goBack()} />
            </View>
        );
    }
}