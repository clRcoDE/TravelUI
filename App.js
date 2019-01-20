/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import SideLogo from './src/Components/SideLogo';
import Main from './src/Components/Main';

export default class App extends Component {
  render() {
    return (<View style={styles.container}>
    

    <SideLogo/>
    <Main/>
    </View>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    borderColor:'#333',
    borderWidth:3,
    flexDirection: 'row',
  }
});
