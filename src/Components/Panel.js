import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  CheckBox
} from "react-native";

export default class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked:false,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.panelNavigator}>
          <View style={[styles.panelNavigatorElementSelected]}>
            <Image
              source={require("../Assets/Images/flight.png")}
              style={styles.iconSeparator}
            />
            <Text style={styles.whiteTexts}>Flight</Text>
          </View>
          <View style={styles.panelNavigatorElement}>
            <Image
              source={require("../Assets/Images/home.png")}
              style={styles.iconSeparator}
            />

            <Text  style={styles.whiteTexts}>Hotel</Text>
          </View>
          <View style={styles.panelNavigatorElement}>
            <Image
              source={require("../Assets/Images/car.png")}
              style={styles.iconSeparator}
            />

            <Text  style={styles.whiteTexts}>Rental Car</Text>
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
              <Text style={[styles.panelBodytravelOptionsElementsText,styles.transparentText]}>
                One way
              </Text>
            </View>
            <View style={styles.panelBodytravelOptionsElements}>
              <Text style={[styles.panelBodytravelOptionsElementsText,styles.transparentText]}>
                Multi-City
              </Text>
            </View>
          </View>
          <View style={styles.panelBodySelectLocation}>
            <View style={styles.locationInputWrapper}>
              <Image
                source={require("../Assets/Images/pin.png")}
                style={styles.iconSeparator}
              />

              <TextInput placeholder={"Tbilisi"} placeholderTextColor={'#f5f5f5'} />
            </View>

            <View style={styles.locationInputWrapper}>
              <Image
                source={require("../Assets/Images/pin.png")}
                style={styles.iconSeparator}
              />

              <TextInput placeholder={"to"}  placeholderTextColor={'rgba(225,225,225,0.5)'}/>
            </View>

            {/* <DestinationSuggestions style={styles.destinationSuggestions}  /> */}
            <View style={styles.destinationSuggestionsWrapper}>
              <TouchableHighlight
                style={{borderRadius:50}}
                onPress={() => {}}
                underlayColor="rgba(225,225,255,0.3)"
              >
                <Text style={styles.destinationSuggestions}>Munich</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={{borderRadius:50}}
                onPress={() => {}}
                underlayColor="rgba(225,225,255,0.3)"
              >
                <Text style={styles.destinationSuggestions}>Amesterdam</Text>
              </TouchableHighlight>
            </View>
          </View>
          <View style={styles.panelBodySelectEstate}>
            <View style={styles.panelBodySelectEstateRow}>
              <View style={styles.estateInput}>
                <Image
                  source={require("../Assets/Images/calendar.png")}
                  style={styles.iconSeparator}
                />

                <TextInput placeholder={"Departing"}  placeholderTextColor={'rgba(225,225,225,0.5)'} />
              </View>
              <View style={styles.estateInput}>
                <Image
                  source={require("../Assets/Images/calendar.png")}
                  style={styles.iconSeparator}
                />

                <TextInput placeholder={"Returning"}   placeholderTextColor={'rgba(225,225,225,0.5)'}/>
              </View>
            </View>
            <View style={styles.panelBodySelectEstateRow}>
              <View style={styles.estateInput}>
                <Image
                  source={require("../Assets/Images/people.png")}
                  style={styles.iconSeparator}
                />

                <TextInput placeholder={"Adults"}  placeholderTextColor={'rgba(225,225,225,0.5)'}/>
              </View>
              <View style={styles.estateInput}>
                <Image
                  source={require("../Assets/Images/add.png")}
                  style={styles.iconSeparator}
                />

                <TextInput placeholder={"Economy"}  placeholderTextColor={'rgba(225,225,225,0.5)'} />
              </View>
            </View>
          </View>
          <View style={styles.panelBodySubmitSearch}>
          <View style={styles.checkBoxWrapper}>
          
          <CheckBox value={this.state.checked} onValueChange={()=> this.setState((prev)=>({checked:!prev.checked}))} />
          <Text style={styles.whiteTexts}>Add a Hotel</Text>
          </View>

          <TouchableHighlight onPress={()=>{}} underlayColor='rgba(100,100,100,1.0)' style={styles.submittWrapper}><Text style={styles.whiteTexts}>Search Flights</Text></TouchableHighlight>
          
          </View>
        </View>
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  container: {
    flex: 4,
    borderColor: "purple",
    // borderWidth: 3,
    margin: 15,
    marginTop: -15,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor:'#405089'
  },
  whiteTexts:{


    color:'#f5f5f5',
    fontWeight:'600',
    
  },
  transparentText:{

    color:'rgba(225,255,255,0.5)',
    fontWeight:'600'
  },
  panelNavigator: {
    flex: 1.25,
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  panelNavigatorElement: {
    flexDirection: "row",
    backgroundColor:'rgba(225,225,225,0.15)',
    // backgroundColor: "purple",
    // borderWidth: 3,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  panelNavigatorElementSelected: {
    flexDirection: "row",
    // backgroundColor:'rgba(225,225,225,0.15)',
    // backgroundColor: "purple",
    // borderWidth: 3,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  panelBody: {
    flex: 6,
    // backgroundColor: "red",
    marginLeft: 40
  },
  panelBodytravelOptions: {
    flex: 1.2,
    // backgroundColor: "blue",
    flexDirection: "row",
    marginRight: 65,
    justifyContent: "space-between",
    alignItems: "center"
  },
  panelBodySelectLocation: {
    flex: 3,
    // backgroundColor: "green"
  },
  panelBodySelectEstate: {
    flex:2.5,
    // backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center"
  },
  panelBodySubmitSearch: {
    flex: 2,
    // backgroundColor: "navy",
    flexDirection: "row",
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    justifyContent: 'space-between',
    // padding:25,
    alignItems: 'center',
    paddingRight:50
  },
  panelBodySelectEstateRow: {
    flexDirection: "row",
    //   flex:1,
    // borderBottomColor: "#888",
    // borderBottomWidth: 1,
    marginTop: 25
  },
  estateInput: {
    flex: 1,
    // borderWidth: 3,
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor:'red',
    borderBottomColor:'rgba(225,225,255,0.15)',
    borderBottomWidth:1,
    marginRight:35
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
    backgroundColor: "#49bcf7",
    color: "#fff",
    fontWeight: "800",
    fontSize: 12,
    letterSpacing: 1
  },
  locationInputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "rgba(225,225,225,0.15)",
    borderBottomWidth: 1,
    // marginTop: 5
    minHeight: 25,
  },
  destinationSuggestionsWrapper: {
    flex: 1,
    // backgroundColor: "purple",
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: 'center',
  },
  destinationSuggestions: {
    paddingVertical: 8,
    minHeight:12,
    paddingHorizontal: 18,
    borderRadius: 50,
    backgroundColor: "rgba(225,225,225,0.15)",
    color: "#fff",
    fontWeight: "800",
    fontSize: 12,
    letterSpacing: 1,
    marginHorizontal: 5,
  },
  iconSeparator: {
    marginRight: 10
    //   marginLeft:10
  },
  checkBoxWrapper:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submittWrapper:{
    borderRadius:50,
    backgroundColor:'#ff7555',
    maxHeight:50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical:10,
    paddingHorizontal:45
  }
});
