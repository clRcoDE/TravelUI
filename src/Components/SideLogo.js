import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default class SideLogo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoWrapper}>
          <Image
            source={require("../Assets/Images/compass.png")}
            style={{ marginBottom: 25 }}
          />
          <Text
            style={{
              transform: [{ rotate: "-90deg" }],
              marginBottom: 25,
              color: "#0e2360",
              fontWeight: "600",
              fontSize: 16
            }}
          >
            Travel.
          </Text>
        </View>
        <View style={styles.socialNetworkWrapper}>
          <Text
            style={{
              fontWeight: "600",
              color: "#0e2360",
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
              color: "#0e2360",
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
    // backgroundColor: "crimson"
  },
  logoWrapper: {
    flex: 3,
    // backgroundColor: "yellowgreen",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  socialNetworkWrapper: {
    flex: 10,
    // backgroundColor: "orange",
    justifyContent: "center"
  }
});
