import React from "react";
import { 
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image, 
} from "react-native";

export default class shopScreen extends React.Component{

    render() {
        return (
            <View style={{flex: 1,justifyContent:'center',alignItems:'center'}}>
                <Text>购物车</Text>
            </View>
        );
    }
}