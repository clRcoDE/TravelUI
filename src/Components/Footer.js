import React, { Component } from "react";
import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import Headers from "./Headers";

import {styles as panelStyles} from './Panel'

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.checkinBookings}>
          <Headers
            style={styles.checkinBookingsHeader}
            text={"Check-in/My Booking"}
          />
          <View style={styles.checkinBookingsSearchBoxes}>
            <TextInput
              style={styles.bookingSearchBox}
              placeholder={"Last name"}
            />
            <TextInput
              style={[
                styles.bookingSearchBox,
                {
                  marginLeft: 20
                }
              ]}
              placeholder={"Booking Code"}
            />
          </View>
          <View style={styles.goSearchBooking}>
            <Text style={{ fontWeight: "600", color: "#0e2360" }}>Go</Text>
            <Image source={require("../Assets/Images/arrow-black.png")} style={{marginLeft:15}}/>
          </View>
        </View>

        <View style={styles.yourBooking}>
          <View style={styles.yourBookingElement}>
            <Image
              source={require("../Assets/Images/prague.png")}
              style={{ width: 92, height: 92, borderRadius: 15 }}
            />
            <Text
              style={{ fontWeight: "600", color: "#2f4072", marginLeft: 10 }}
            >
              Prague
            </Text>
          </View>

          <View style={styles.yourBookingElement}>
            <Image
              source={require("../Assets/Images/stockholm.png")}
              style={{ width: 92, height: 92, borderRadius: 15 }}
            />
            <Text
              style={{ fontWeight: "600", color: "#2f4072", marginLeft: 10 }}
            >
              Stockholm
            </Text>
          </View>

          <View style={styles.yourBookingElement}>
            <Image
              source={require("../Assets/Images/bali.png")}
              style={{ width: 92, height: 92, borderRadius: 15 }}
            />
            <Text
              style={{ fontWeight: "600", color: "#2f4072", marginLeft: 10 }}
            >
              Bali
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    // backgroundColor: "gold",
    borderColor: "red",
    // borderWidth: 3,
    flexDirection: "row"
  },
  checkinBookings: {
    flex: 6,
    // backgroundColor: "violet",
    // borderWidth: 3,
    borderColor: "white",
    // marginLeft:40
  },
  yourBooking: {
    flex: 10,
    // backgroundColor: "lightgreen",
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  checkinBookingsHeader: {
    // backgroundColor: "white",
    // borderWidth: 4,
    borderColor: "white"
  },
  checkinBookingsSearchBoxes: {
    flexDirection: "row",
    // borderWidth: 3,
    alignItems: "flex-end"
  },
  bookingSearchBox: {
    flex: 1,
    backgroundColor: "rgba(100,100,100,0.5)",
    borderRadius: 25,
    paddingHorizontal: 20
  },
  yourBookingElement: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  goSearchBooking:{
      flexDirection: 'row',
  }
});
