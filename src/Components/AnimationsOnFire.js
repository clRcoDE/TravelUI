import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableHighlight,
  LayoutAnimation,
  Animated,
  UIManager
} from "react-native";

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);
const CustomLayoutAnimation = {
  duration: 2000,
  create: {
    property: LayoutAnimation.Properties.scaleXY,
    type: LayoutAnimation.Types.spring
  },
  update:{
      property:LayoutAnimation.Properties.scaleXY,
      type:LayoutAnimation.Types.spring,
  },
  delete:{
      duration:2000,
      property:LayoutAnimation.Properties.opacity,
      type:LayoutAnimation.Types.linear
  },
  
};
export default class AnimationsonFire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flex1: 1,
      flex2: 1,
      flex3: 1,
      margina: new Animated.Value(0)
    };
  }

  Anim = x => {
    // alert('anim')
    Animated.timing(this.state.margina, { toValue: 0, duration: 1000 }).start();
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <TouchableHighlight
            style={[styles.touchstyles]}
            onPress={() => {
              LayoutAnimation.configureNext(
                LayoutAnimation.Presets.easeInEaseOut
              ),
                this.setState({ flex1: 5, flex2: 2, flex3: 1 }, this.Anim(25));
            }}
            underlayColor="rgba(50,50,50,0.5)"
          >
            <Text>1</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.touchstyles]}
            onPress={() => {
              LayoutAnimation.configureNext(LayoutAnimation.Presets.spring),
                this.setState({ flex1: 1, flex2: 5, flex3: 1 }, this.Anim(150));
            }}
            underlayColor="rgba(50,50,50,0.5)"
          >
            <Text>2</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.touchstyles]}
            onPress={() => {
              LayoutAnimation.configureNext(LayoutAnimation.Presets.linear),
                this.setState({ flex1: 1, flex2: 2, flex3: 5 }, this.Anim(75));
            }}
            underlayColor="rgba(50,50,50,0.5)"
          >
            <Text>3</Text>
          </TouchableHighlight>
        </View>
        <Animated.View style={{ flexDirection: "row" }}>
          <Animated.View
            style={{
              backgroundColor: "red",
              flex: this.state.flex1,
              height: 200,
              marginTop: this.state.margina
            }}
          />
          <Animated.View
            style={{
              backgroundColor: "blue",
              flex: this.state.flex2,
              height: 200,
              marginTop: this.state.margina
            }}
          />
          <Animated.View
            style={{
              backgroundColor: "green",
              flex: this.state.flex3,
              height: 200,
              marginTop: this.state.margina
            }}
          />
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    borderWidth: 3,

    // flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start"
  },
  touchstyles: {
    flex: 1,
    backgroundColor: "rgba(150,150,150,0.5)",
    alignItems: "center",
    height: 250
  }
});
