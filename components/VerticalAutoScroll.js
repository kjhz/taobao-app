import React from 'react';
import {  ScrollView } from "react-native";

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.scrollText = React.createRef();
    }
    
    componentDidUpdate() {
        clearInterval(this.timer);
        let i = 1;
        let j = React.Children.count(this.props.children);
        this.timer = setInterval(() => {
            this.scrollText.current.scrollTo({ x: 0, y: this.props.scrollLength * i, animated: true })
            j - 1 > i ? i++ : i = 0;
        }, this.props.interval * 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    render() {
        return (
            <ScrollView
                ref={this.scrollText}
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                style={{ marginLeft: 10 }}
            >
                {this.props.children}
            </ScrollView>
        );
    }
}