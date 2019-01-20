import React, { Component } from 'react';
import { View, Text ,Image, StyleSheet} from 'react-native';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Footer </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({

    container:{
        flex:2,
        backgroundColor:'gold',
        borderColor:'red',
        borderWidth: 3,
    }
})
