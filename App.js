/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Dimensions
} from "react-native";
import SideLogo from "./src/Components/SideLogo";
import Main from "./src/Components/Main";
import AnimationsOnFire from "./src/Components/AnimationsOnFire";
import ItsAnimating from "./src/Components/ItsAnimating";

const deviceWidth = Dimensions.get('window').width

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: true
    };
  }


  changeTheme=()=>{
    this.setState(prev=>({theme:!prev.theme}))
  }
  render() {
    return (
      <View style={[styles.container,{backgroundColor:this.state.theme?'#eef':'#333'}]}>


      <View style={styles.buttonWrapper}>
        <TouchableHighlight
          onPress={this.changeTheme}
          underlayColor="rgba(150,150,255,0.8)"
          style={
            {
              backgroundColor: "rgba(150,150,175,0.3)",
              borderRadius: 50,
              paddingHorizontal: 20,
              justifyContent: "center",
              paddingVertical:5,
              paddingHorizontal:15,
              
            }
          }
        >
          {this.state.theme ? (
            <Text style={{ fontSize: 14, color: "#555", fontWeight: "600" }}>
              Night Theme
            </Text>
          ) : (
            <Text style={{ fontSize: 14, color: "#ccc", fontWeight: "600" }}>
            Snow Theme
            </Text>
          )}
        </TouchableHighlight>
        </View>

        {/* <SideLogo theme={this.state.theme} />
        <Main theme={this.state.theme} /> */}

        {/* <AnimationsOnFire/> */}

        <ItsAnimating/>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: "#333",
    borderWidth: 3,
    flexDirection: "row"
  },
  buttonWrapper:{
    // borderWidth:2,
   position: 'absolute',
   width:deviceWidth*(10/100),
   top:0,
    right:(deviceWidth*(50/100)-(deviceWidth*(5/100))),
    zIndex:2,
    alignItems: 'center',
    justifyContent: 'center',
    height:deviceWidth*(7/100),
  }
});
