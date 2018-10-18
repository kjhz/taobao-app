import React from 'react';
import { View, StyleSheet } from 'react-native';

export default class extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                {React.Children.map(this.props.children, (element) => {
                    return (<View style={styles.item}>{element}</View>);
                })}
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    }
});