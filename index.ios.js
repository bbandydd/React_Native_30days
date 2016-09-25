import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  NavigatorIOS
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome';

import App from './app/App';
import Icons from './app/components/Icons';

class React_Native_30days extends Component {
    render() {
        return (
            <NavigatorIOS
                ref="nav"
                style={ styles.container }
                initialRoute={{
                    title: '30 days of RN',
                    component: App,
                    backButtonTitle: 'back',
                    shadowHidden: true,
                    rightButtonTitle: 'Icons',
                    onRightButtonPress: () => {
                        this.refs.nav.navigator.push({
                            title: 'Icons',
                            component: Icons
                        });
                    }
                }}
                itemWrapperStyle={styles.itemWrapper}
                tintColor="#777"
            />
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    itemWrapper:{
        backgroundColor: '#f3f3f3'
    }
});

AppRegistry.registerComponent('React_Native_30days', () => React_Native_30days);
