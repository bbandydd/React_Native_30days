import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

export default class Day24 extends Component {
    render() {
        return (
            <View style={ styles.container }>
                <Text>
                    Day24
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 150,
        alignItems: "center",
    }
})
