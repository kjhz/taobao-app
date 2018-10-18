import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default class CustomFunctionButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            viewWidth: 0,
            viewHeight: 0,
            icon: this.props.icon,
            text: this.props.text,
        };
    }

    static propTypes = {
        // 图标
        icon: PropTypes.number.isRequired,
        // 文字
        text: PropTypes.string.isRequired,
        // 点击响应
        onClick: PropTypes.func,
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.icon == nextProps.icon && this.state.text == nextProps.text) {
            return;
        }

        this.setState({
            icon: nextProps.icon,
            text: nextProps.text,
        });
    }

    onLayout(event) {

        // 获取view的宽度
        let viewWidth = event.nativeEvent.layout.width;
        // 获取view的高度
        let viewHeight = event.nativeEvent.layout.height;

        // 若view的宽度或高度为空，或者宽高跟原来完全一样
        if (!viewWidth || !viewHeight || (this.state.viewWidth === viewWidth && this.state.viewHeight === viewHeight)) {
            return;
        }

        this.setState({
            viewWidth: viewWidth,
            viewHeight: viewHeight,
        });
    }

    render() {

        let iconDimension = Math.min(this.state.viewWidth * 0.7, this.state.viewHeight * 0.7);

        let iconStyle = {
            width: iconDimension,
            height: iconDimension,
        };

        return (
            <TouchableOpacity
                style={[this.props.style, styles.container]}
                activeOpacity={0.8}
                onLayout={this.onLayout.bind(this)}
                onPress={this.props.onClick}
            >
                <Image
                    style={[styles.icon, iconStyle]}
                    source={this.props.icon}
                    resizeMode='contain'
                />
                <Text
                    style={styles.text}
                >
                    {this.state.text}
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        marginBottom: 5,
        borderRadius: 50
    },
    text: {
        fontSize: 11
    },
});