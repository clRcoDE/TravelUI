import React, { Component } from 'react';
import { View, Text ,Image,StyleSheet } from 'react-native';
import Panel from './Panel';
import List from './List'


export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Body </Text>
        <Panel/>
        <List/>
      </View>
    );
  }
}


const styles = StyleSheet.create({

    container:{
        flex:8,
        backgroundColor:'lime',
        flexDirection: 'row',
    }
})
