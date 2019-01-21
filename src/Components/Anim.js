import React from 'react';
import { Animated, Text, View , StyleSheet ,TouchableHighlight } from 'react-native';

export default class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
  }

  startanimate =() => {



    this.setState({fadeAnim: new Animated.Value(1)},()=>{Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 0,                   // Animate to opacity: 1 (opaque)
        duration: 2000,              // Make it take a while
      }
    ).start();})
    
  }

  componentDidMount() {
    
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,                 // The animated value to drive
            
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 2000,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <TouchableHighlight style={styles.container} onPress={this.startanimate} underlayColor='rgba(225,225,225,0.5)'  >
      <Animated.View                 // Special animatable View
        style={{
          
          opacity: fadeAnim,  // Bind opacity to animated value
          width: 250,
           height: 50, 
           backgroundColor: 'royalblue'   ,
           justifyContent: 'center',
           alignItems: 'center',      
        }}
      >
       <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Press to FadeOut</Text>
        {this.props.children}
      </Animated.View>
      </TouchableHighlight>
    );
  }
}

// You can then use your `FadeInView` in place of a `View` in your components:

const styles=StyleSheet.create({
container:{
  flex:2,
  backgroundColor:'lime',
  justifyContent: 'center',
  alignItems: 'center',
}

})
