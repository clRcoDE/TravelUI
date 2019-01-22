import React, { Component } from 'react';
import { View, Text,Animated,Image,StyleSheet,TouchableHighlight ,UIManager,LayoutAnimation} from 'react-native';


UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);


export default class ItsAnimating extends Component {
  constructor(props) {
    super(props);
    this.state = {
        xy:25

    };
  }

  componentWillUpdate(){
      LayoutAnimation.configureNext(this.animationConfig);
  }


   animationConfig={
    duration:1000,
    create:{
        type:'linear',
        property:'opacity'
    },
    update:{
        type:'spring',
        springDamping:0.3,
        property:'scaleXY'
    },
    delete:{
        type:'linear',
        property:'opacity'
    }
  }


  changeSquere=()=>{
      console.warn('clicked')
      this.setState({xy:this.state.xy*1.5})
  }
  render() {
    return (
      <View style={styles.container}>
      <TouchableHighlight underlayColor='rgba(150,150,150,0.3)' onPress={this.changeSquere} style={{backgroundColor:'royalblue',height:this.state.xy,width:this.state.xy}}><View></View></TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        margin:15,
        borderWidth: 5,
        borderColor:'royalblue',
        justifyContent: 'center',
        alignItems: 'center',
    }
})
