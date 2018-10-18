import React from "react";
import { 
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image, 
} from "react-native";

export default class ProfileScreen extends React.Component{

    render() {
        return (
            <View style={{flex: 1,justifyContent:'center',alignItems:'center'}}>
                <Text>我的淘宝</Text>
            </View>
        );
    }
}
