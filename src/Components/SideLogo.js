import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default class SideLogo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={[styles.container,{backgroundColor:'transparent'}]}>
        <View style={styles.logoWrapper}>
          <Image
            source={require("../Assets/Images/compass.png")}
            style={{ marginBottom:5 }}
          />
          <Text
            style={{
              transform: [{ rotate: "-90deg" }],
              marginTop: 25,
              color: this.props.theme ? "#0e2360" : '#eee',
              fontWeight: "600",
              fontSize: 22,
              // borderWidth:3,
              width:80
            }}
          >
            Travel.
          </Text>
        </View>
        <View style={styles.socialNetworkWrapper}>
          <Text
            style={{
              fontWeight: "600",
              color: this.props.theme? "#0e2360" : '#999',
              fontSize: 12,
              marginBottom: 100,
              transform: [{ rotate: "-90deg" }]
            }}
          >
            facebook
          </Text>
          <Text
            style={{
              fontWeight: "600",
              color: this.props.theme? "#0e2360" : '#999',
              fontSize: 12,
              marginBottom: 100,
              transform: [{ rotate: "-90deg" }]
            }}
          >
            Instagram
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  logoWrapper: {
    flex: 3,
    // backgroundColor: "yellowgreen",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 40,
  },
  socialNetworkWrapper: {
    flex: 10,
    // backgroundColor: "orange",
    justifyContent: "center"
  }
});
