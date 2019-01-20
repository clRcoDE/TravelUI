import React, { Component } from 'react';
import { View, Text ,StyleSheet} from 'react-native';

export default class DestinationSuggestions extends Component {
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
        backgroundColor:'gold',
        borderColor:'red',
        borderWidth: 3,
    }
})