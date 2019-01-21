import React, { Component } from 'react';
import { View, Text ,Image,StyleSheet } from 'react-native';
import Footer from '../Components/Footer';
import Body from '../Components/Body';
import Slider from '../Components/Slider'
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Body/>
        {/* <Footer/> */}
        <Slider/>
      </View>
    );
  }
}


const styles = StyleSheet.create({

    container:{
        flex:20,
        // backgroundColor:'royalblue',
        borderColor:'royalblue',
        // borderWidth: 3,
    }
})
