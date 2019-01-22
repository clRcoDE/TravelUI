import React, { Component } from 'react';
import { View, Text ,Image,StyleSheet } from 'react-native';
import Footer from '../Components/Footer';
import Body from '../Components/Body';
import Anim from './Anim'
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Body theme={this.props.theme}/>
        <Footer theme={this.props.theme}/>
        {/* <Anim/> */}
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
