import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Headers from './Headers';


export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> List </Text>
        <View style={styles.listNav} />
        <View style={styles.listBody}>
          <View style={styles.flatlistWrapper}>
            <Text>flatlist wrapper</Text>
            <View style={styles.flatlistHeader}>
              <Headers text={'Best Value Offers to Europe!'}/>
            </View>
            <View style={styles.flatlistBody}>
              <Text>flatlist body</Text>
            </View>
            <View style={styles.flatlistDescription}>
              <Text>flatlist desc</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: "gold",
    borderColor: "orange",
    borderWidth: 3
  },
  listNav: {
    flex: 1,
    borderColor: "blue",
    borderWidth: 3
  },
  listBody: {
    flex: 6,
    borderWidth: 3
  },
  flatlistWrapper:{flex:1},
  flatlistHeader: {
    flex: 1,
    backgroundColor: "lightgreen",
    
    borderColor: "blue",
    borderWidth: 3
  },
  flatlistBody: {
    flex: 6,
    backgroundColor: "lightblue",
    
    borderColor: "red",
    borderWidth: 3
  },
  flatlistDescription: {
    flex: 2,
    backgroundColor: "violet",
    
    borderWidth: 3
  }
});
