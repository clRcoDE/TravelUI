import React, { Component } from 'react';
import { View, Text ,StyleSheet} from 'react-native';

export default class Headers extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text style={styles.headerTextStyles}>{this.props.text}</Text>
      </View>
    );
  }
}



const styles = StyleSheet.create({

    container:{
        flex:1,
        // backgroundColor:'gold',
        borderColor:'red',
        // borderWidth: 3,
    },
    headerTextStyles:{
        fontSize:26,
        fontWeight: '900',
        color:'#0e2360'
    }
    
})