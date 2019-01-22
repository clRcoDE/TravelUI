import React, { Component } from 'react';
import { View, Text ,StyleSheet,Image,TouchableHighlight,LayoutAnimation,UIManager,Animated ,Dimensions} from 'react-native';
let deviceWidth = Dimensions.get('window').width;

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

export default class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {

        widthEnd:300
    };
  }

fillRandom=()=>{
    let rand = Math.floor(Math.random()*(800-25))+25
    console.warn(rand)
    LayoutAnimation.configureNext()
}


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.progressbarWrapper}>
        <TouchableHighlight onPress={this.fillRandom} underlayColor='rgba(100,100,100,0.5)'  style={{width:this.state.widthEnd,height:25,backgroundColor:'#77f',borderRadius:50}}><Text></Text></TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles= StyleSheet.create({
    container:{
        height:400,
        width:deviceWidth,
        backgroundColor:'#555',
        
        justifyContent: 'center',
        alignItems: 'center',
    },
    progressbarWrapper:{
        backgroundColor:'rgba(150,150,150,0.5)',
        // backgroundColor:'red',
        width:800,
        borderRadius: 100,
        height:25,
    }
})