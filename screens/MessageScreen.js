import React from "react";
import { 
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image, 
} from "react-native";

export default class MessageScreen extends React.Component{

    render() {
        return (
            <View style={{flex: 1,justifyContent:'center',alignItems:'center'}}>
                <Text>消息</Text>
            </View>
        );
    }
}