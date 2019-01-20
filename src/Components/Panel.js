import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableHighlight
} from "react-native";

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
            <Image source={require("../Assets/Images/flight.png")}  style={styles.iconSeparator}/>
            <Text>Flight</Text>
          </View>
          <View style={styles.panelNavigatorElement}>
            <Image source={require("../Assets/Images/home.png")}   style={styles.iconSeparator}/>

            <Text>Hotel</Text>
          </View>
          <View style={styles.panelNavigatorElement}>
            <Image source={require("../Assets/Images/car.png")}  style={styles.iconSeparator} />

            <Text>Rental Car</Text>
          </View>
        </View>
        <View style={styles.panelBody}>
          <View style={styles.panelBodytravelOptions}>
            <View style={styles.panelBodytravelOptionsElements}>
              <TouchableHighlight
                style={{
                  borderRadius: 25
                }}
                onPress={() => {}}
                underlayColor="rgba(100,100,100,0.5)"
              >
                <Text style={styles.panelBodytravelOptionsElementsTextSelected}>
                  Roundtrip
                </Text>
              </TouchableHighlight>
            </View>
            <View style={styles.panelBodytravelOptionsElements}>
              <Text style={styles.panelBodytravelOptionsElementsText}>
                One way
              </Text>
            </View>
            <View style={styles.panelBodytravelOptionsElements}>
              <Text style={styles.panelBodytravelOptionsElementsText}>
                Multi-City
              </Text>
            </View>
          </View>
          <View style={styles.panelBodySelectLocation}>
            <View style={styles.locationInputWrapper}>
              <Image source={require("../Assets/Images/pin.png")}  style={styles.iconSeparator}/>

              <TextInput placeholder={"Tbilisi"} />
            </View>

            <View style={styles.locationInputWrapper}>
              <Image source={require("../Assets/Images/pin.png")}  style={styles.iconSeparator} />

              <TextInput placeholder={"to"} />
            </View>

            {/* <DestinationSuggestions style={styles.destinationSuggestions}  /> */}
            <View style={styles.destinationSuggestionsWrapper}>
              <TouchableHighlight
                style={{
                  borderRadius: 25
                }}
                onPress={() => {}}
                underlayColor="rgba(50,50,50,0.5)"
              >
                <Text style={styles.destinationSuggestions}>Munich</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={{
                  borderRadius: 25
                }}
                onPress={() => {}}
                underlayColor="rgba(50,50,50,0.5)"
              >
                <Text style={styles.destinationSuggestions}>Amesterdam</Text>
              </TouchableHighlight>
            </View>
          </View>
          <View style={styles.panelBodySelectEstate}>
            <View style={styles.panelBodySelectEstateRow}>
              <View style={styles.estateInput}>
                <Image source={require("../Assets/Images/calendar.png")}  style={styles.iconSeparator}/>

                <TextInput placeholder={"Departing"} />
              </View>
              <View style={styles.estateInput}>
                <Image source={require("../Assets/Images/calendar.png")}  style={styles.iconSeparator}/>

                <TextInput placeholder={"Returning"} />
              </View>
            </View>
            <View style={styles.panelBodySelectEstateRow}>
              <View style={styles.estateInput}>
                <Image source={require("../Assets/Images/people.png")}  style={styles.iconSeparator}/>

                <TextInput placeholder={"Adults"} />
              </View>
              <View style={styles.estateInput}>
                <Image source={require("../Assets/Images/add.png")}  style={styles.iconSeparator}/>

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

export  const styles = StyleSheet.create({
  container: {
    flex: 3,
    borderColor: "purple",
    borderWidth: 3,
    margin: 15,
    marginTop: -15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15
  },
  panelNavigator: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  panelNavigatorElement: {
      flexDirection:'row',
    backgroundColor: "purple",
    borderWidth: 3,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  panelBody: {
    flex: 6,
    backgroundColor: "red",
    marginLeft:25
  },
  panelBodytravelOptions: {
    flex: 1,
    backgroundColor: "blue",
    flexDirection: "row",
    marginRight: 65,
    justifyContent: "space-between",
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
    backgroundColor: "navy",
    flexDirection: "row",
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12
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
    borderWidth: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  panelBodytravelOptionsElementsText: {
    color: "#888",
    fontSize: 12,
    letterSpacing: 1,
    fontWeight: "800"
  },
  panelBodytravelOptionsElementsTextSelected: {
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 50,
    backgroundColor: "dodgerblue",
    color: "#fff",
    fontWeight: "800",
    fontSize: 12,
    letterSpacing: 1
  },
  locationInputWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
    borderBottomColor: "#888",
    borderBottomWidth: 1,
    marginTop: 15
  },
  destinationSuggestionsWrapper: {
    flex: 1,
    backgroundColor: "purple",
    flexDirection: "row",
    alignItems: "center"
  },
  destinationSuggestions: {
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 50,
    backgroundColor: "rgba(136,136,136,0.6)",
    color: "#fff",
    fontWeight: "800",
    fontSize: 12,
    letterSpacing: 1,
    marginHorizontal: 5
  },
  iconSeparator:{
      marginRight:10,
    //   marginLeft:10
  }
});
