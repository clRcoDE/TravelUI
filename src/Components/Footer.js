import React, { Component } from "react";
import { View, Text, Image, StyleSheet, TextInput ,Dimensions,Animated,FlatList} from "react-native";
import Headers from "./Headers";
import _ from 'lodash';

import { styles as panelStyles } from "./Panel";

let accessID =
  "c2762cba9947259cd987a5fc53bf0388ac586afa8d564e6c09bbff2d7a30d45e";
let secretKey =
  "b43a042bb5fff8048d38f20ac304c2926081d7a5087c993b9f675a1533bf1519";

let deviceWidth = Dimensions.get("window").width/2;

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {imgs:[] , fadeAnim: new Animated.Value(0)};
  }

  
  scrollX = new Animated.Value(0);
  componentDidMount() {
    fetch(`https://api.unsplash.com/photos/?client_id=${accessID}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ imgs: data });
      })
      .catch(err => {
        console.log("Error happened during fetching!", err);
      });
  }
  render() {
    let position = Animated.divide(this.scrollX, deviceWidth);
    let scrollIndicator = this.state.imgs;
    let ii =scrollIndicator.length/2;
    return (
      <View style={styles.container}>
        <View style={styles.checkinBookings}>
          <Headers text={"Check-in/My Booking"} />
          <View style={[styles.checkinBookingsSearchBoxes, { marginTop: 20 }]}>
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
          <View style={[styles.goSearchBooking, { marginTop: 15 }]}>
            <Text style={{ fontWeight: "600", color: "#0e2360" }}>Go</Text>
            <Image
              source={require("../Assets/Images/arrow-black.png")}
              style={{ marginLeft: 15 }}
            />
          </View>
        </View>

        {/* <View style={styles.yourBooking}>
          <View style={styles.yourBookingElement}>
            <Image
              source={require("../Assets/Images/prague.png")}
              style={{ width: 92, height: 92, borderRadius: 15 }}
            />
            <Text
              style={{ fontWeight: "600", color: "#2f4072", marginLeft: 16 }}
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
              style={{ fontWeight: "600", color: "#2f4072", marginLeft: 16 }}
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
              style={{ fontWeight: "600", color: "#2f4072", marginLeft: 16 }}
            >
              Bali
            </Text>
          </View>
        </View> */}

        <View style={styles.yourBooking}>
          <FlatList
            data={this.state.imgs}
            keyExtractor={item => item.user.id}
            horizontal={true}
            onScroll={Animated.event([
              { nativeEvent: { contentOffset: { x: this.scrollX } } }
            ])}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            renderItem={({ item, index }) => (
              <View style={styles.yourBookingElement}>
            <Image
              source={{ uri: item.urls.small }}
              style={{ width: 92, height: 92, borderRadius: 15 }}
            />
            <Text
              style={{ fontWeight: "600", color: "#2f4072", marginLeft: 16 }}
            >{item.user.last_name}</Text>
          </View>
            )}
          /><View style={styles.dotsBox}>
            {_.times(scrollIndicator.length/2).map((_,i) => {
              // console.warn(scrollIndicator.length);
            //  i = Math.floor(i/2);
            // let unique = [...new Set(Math.floor(i/2))]
            // let aa = new Set()
              // console.warn(Math.round(i/2))
              let opacity = position.interpolate({
                inputRange: [i-4.5 , i, i +4.5],
                outputRange: [0.2, 1, 0.2],
                extrapolate: 'extend'
              });
              return (
                <Animated.View
                  key={i}
                  style={{
                    opacity,

                    width: 15,
                    height: 15,
                    backgroundColor: "#595959",
                    margin: 20,
                    borderWidth: 1,
                    borderRadius: 50
                  }}
                />
              );
            })}
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
    // justifyContent: 'space-evenly',
    // marginLeft:40
    marginTop: 25
  },

  dotsBox: {
    // backgroundColor: "#353541",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  yourBooking: {
    flex: 8,
    // backgroundColor: "lightgreen",
    // flexDirection: "row",
    justifyContent: "space-evenly",
    // flexDirection: 'row',
  },
  checkinBookingsHeader: {
    // backgroundColor: "white",
    borderWidth: 4,
    borderColor: "white",
    marginTop: 40
  },
  checkinBookingsSearchBoxes: {
    flexDirection: "row",
    // borderWidth: 3,
    alignItems: "flex-end"
    // backgroundColor:'red'
  },
  bookingSearchBox: {
    flex: 1,
    backgroundColor: "rgba(225,225,255,0.5)",
    borderRadius: 25,
    paddingHorizontal: 20
  },
  yourBookingElement: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width:300,
    // borderWidth:3,
    marginLeft:40
  },
  goSearchBooking: {
    flexDirection: "row"
  }
});
