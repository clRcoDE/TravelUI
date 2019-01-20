import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableHighlight
} from "react-native";
import DestinationSuggestions from "./DestinationSuggestions";
export default class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.panelNavigator}>
          <View style={styles.panelNavigatorElement}>
            <Text>Flight</Text>
          </View>
          <View style={styles.panelNavigatorElement}>
            <Text>Hotel</Text>
          </View>
          <View style={styles.panelNavigatorElement}>
            <Text>Rental Car</Text>
          </View>
        </View>
        <View style={styles.panelBody}>
          <View style={styles.panelBodytravelOptions}>
            <View style={styles.panelBodytravelOptionsElements}>
              <TouchableHighlight
                style={{
                  
                  borderRadius: 25,
                }}
                onPress={() => {}}
                underlayColor="rgba(100,100,100,0.5)"
              >
                <Text
                  style={styles.panelBodytravelOptionsElementsTextSelected}
                >
                  Roundtrip
                </Text>
              </TouchableHighlight>
            </View>
            <View style={styles.panelBodytravelOptionsElements}>
              <Text style={styles.panelBodytravelOptionsElementsText}>One way</Text>
            </View>
            <View style={styles.panelBodytravelOptionsElements}>
              <Text style={styles.panelBodytravelOptionsElementsText}>Multi-City</Text>
            </View>
          </View>
          <View style={styles.panelBodySelectLocation}>
            <View style={styles.locationInputWrapper}>
              <TextInput placeholder={"Tbilisi"} />
            </View>

            <View style={styles.locationInputWrapper}>
              <TextInput placeholder={"to"} />
            </View>

            <DestinationSuggestions style={styles.destinationSuggestions} />
          </View>
          <View style={styles.panelBodySelectEstate}>
            <View style={styles.panelBodySelectEstateRow}>
              <View style={styles.estateInput}>
                <TextInput placeholder={"Departing"} />
              </View>
              <View style={styles.estateInput}>
                <TextInput placeholder={"Returning"} />
              </View>
            </View>
            <View style={styles.panelBodySelectEstateRow}>
              <View style={styles.estateInput}>
                <TextInput placeholder={"Adults"} />
              </View>
              <View style={styles.estateInput}>
                <TextInput placeholder={"Economy"} />
              </View>
            </View>
          </View>
          <View style={styles.panelBodySubmitSearch} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    borderColor: "purple",
    borderWidth: 3,
    margin: 15
  },
  panelNavigator: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  panelNavigatorElement: {
    backgroundColor: "purple",
    borderWidth: 3,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  panelBody: {
    flex: 6,
    backgroundColor: "red"
  },
  panelBodytravelOptions: {
    flex: 1,
    backgroundColor: "blue",
    flexDirection: "row",
    marginRight: 50,
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  panelBodySelectLocation: {
    flex: 3,
    backgroundColor: "green"
  },
  panelBodySelectEstate: {
    flex: 3,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center"
  },
  panelBodySubmitSearch: {
    flex: 2,
    backgroundColor: "navy"
  },
  panelBodySelectEstateRow: {
    flexDirection: "row",
    //   flex:1,
    borderBottomColor: "#888",
    borderBottomWidth: 1,
    marginTop: 25
  },
  estateInput: {
    flex: 1,
    borderWidth: 3
  },
  panelBodytravelOptionsElementsText:{

    color:'#888',fontSize:12,letterSpacing:1,fontWeight:'800'
  },
  panelBodytravelOptionsElementsTextSelected:{
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius:50,
    backgroundColor: "dodgerblue",
    color: "#fff",
    fontWeight: "800",
    fontSize: 12,
    letterSpacing:1,
    
  },
  locationInputWrapper:{
      borderBottomColor:'#888',
      borderBottomWidth:1,
      marginTop:15
  }

});
