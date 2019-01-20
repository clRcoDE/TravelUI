import React, { Component } from 'react';
import { View, Text ,Image,StyleSheet } from 'react-native';

export default class SideLogo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'crimson',
    }
})


