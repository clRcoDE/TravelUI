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
      <View 
      // style={{opacity:this.props.styler}}
      >
        <Text style={[styles.headerTextStyles,{color:this.props.color?'#0e2360':'#eee'}]}>{this.props.text}</Text>
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
        // color:'#0e2360'
    }
    
})