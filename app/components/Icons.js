import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    ScrollView
} from 'react-native';

import Util from '../Utils';
import Icon from 'react-native-vector-icons/Ionicons';

import IconData from '../IconData';

export default class Icons extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const boxs = IconData.map((name, idx) => {
            return (
                <TouchableHighlight key={ idx } style={[ styles.touchBox ]} underlayColor="#eee" onPress={ () => console.log(name) }>
                    <View style={ styles.boxContainer }>
                        <Text style={ styles.boxText }>{ name }</Text>
                        <Icon size={ 30 } name={ name } style={ styles.boxIcon } />
                    </View>
                </TouchableHighlight>
            )
        })

        return (
            <ScrollView>
                <View style={ styles.touchBoxContainer }>
                    { boxs }
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    touchBox:{
        width: Util.size.width / 3 - 0.33334,
        height: Util.size.width / 3,
        backgroundColor: "#fff"
    },
    touchBoxContainer:{
        flexDirection: "row",
        flexWrap: "wrap",
        width: Util.size.width,
        borderTopWidth: Util.pixel,
        borderTopColor: "#ccc",
        borderLeftWidth: Util.pixel,
        borderLeftColor: "#ccc",
        borderRightWidth: Util.pixel,
        borderRightColor: "#ccc"
    },
    boxContainer:{
        alignItems: "center",
        justifyContent: "center",
        width: Util.size.width / 3,
        height: Util.size.width / 3
    },
    boxIcon:{
        position: "relative",
        top: -10
    },
    boxText:{
        position: "absolute",
        bottom: 15,
        width: Util.size.width / 3,
        textAlign: "center",
        left: 0,
        backgroundColor: "transparent"
    },
})
