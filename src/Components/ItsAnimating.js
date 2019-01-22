import React, { Component } from "react";
import {
  View,
  Text,
  Animated,
  Image,
  StyleSheet,
  TouchableHighlight,
  UIManager,
  LayoutAnimation,
  Button
} from "react-native";
import ProgressBar from './ProgressBar';
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default class ItsAnimating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      xy: 25
    };
  }

  componentWillUpdate() {}

  animationConfig = {
    duration: 1000,
    create: {
      duration: 1000,
      type: "easeInEaseOut",
      property: "opacity"
    },
    update: {
      duration: 3000,
      type: "spring",
      // initialVelocity:100,
      springDamping: 0.2,
      property: "opacity"
    },
    delete: {
      type: "linear",
      property: "opacity"
    }
  };

  changeSquere = () => {
    //   console.warn('clicked')

    LayoutAnimation.configureNext(this.animationConfig),
      this.setState({ xy: this.state.xy * 1.5 });
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          underlayColor="royalblue"
          onPress={this.changeSquere}
          style={{
            backgroundColor: "royalblue",
            height: this.state.xy,
            width: this.state.xy,
          }}
        >
          <View />
        </TouchableHighlight>
        <ProgressBar/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
    borderWidth: 5,
    borderColor: "royalblue",
    justifyContent: "center",
    alignItems: "center"
  },
  progressBarParent: {
    backgroundColor: "#444",
    height: 300,
    width: 1000,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    elevation: 10
  },
  progressbarempty: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "column"

  },
  progressbarView: {
    flex: 3,
    backgroundColor: "rgba(100,100,100,1.0)",
    height: 20,
    borderRadius: 50,
    flexDirection: "column"
  }
});
