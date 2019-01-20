import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableHighlight,
  Alert
} from "react-native";
import Headers from "./Headers";


// import {styles as panelStyles} from './Panel'

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchData: [],
      isBookingSelected:true
    };
  }

  loadOffers = () => {
    fetch(`https://randomuser.me/api/?results=10`)
      .then(res => res.json())
      .then(data => this.setState({ fetchData: data.results }))
      .catch(e => Alert.alert("connection failed"));
  };

  componentDidMount() {
    this.loadOffers();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> List </Text>
        <View style={styles.listNav}>
          <View style={styles.listNavElement}>
            <Text style={{ fontSize: 12, color: "#888", fontWeight: "600" }}>
              Check-in
            </Text>
          </View>
          <View style={styles.listNavElement}>
            <Text style={{ fontSize: 12, color: "#888", fontWeight: "600" }}>
              Flight Status
            </Text>
          </View>
          <View style={styles.listNavElement}>
            <Text style={{ fontSize: 12, color: "#0e2360", fontWeight: "600" }}>
              Menu
            </Text>
          </View>
          <View
            style={[
              styles.listNavElement,
              { width: 50, justifyContent: "space-between" }
            ]}
          >
            <View
              style={{
                borderColor: "#0e2360",
                borderWidth: 1,
                marginRight: 15
              }}
            />
            <View
              style={{ borderColor: "#0e2360", borderWidth: 1, marginLeft: 15 }}
            />
          </View>
        </View>
        <View style={styles.listBody}>
          <View style={styles.flatlistWrapper}>
            <View style={styles.flatlistHeader}>
              <Headers text={"Best Value Offers to Europe!"} />
            </View>
            <View style={styles.flatlistBody}>
              <FlatList
                data={this.state.fetchData}
                keyExtractor={item => item.email}
                renderItem={({ item, index }) => (
                  <TouchableHighlight
                    onPress={() => {}}
                    underlayColor="rgba(50,50,50,0.8)"
                    style={{ height: 60 }}
                  >
                    <View style={styles.itemsWrapper}>
                      <View
                        style={{
                          borderWidth: 3,
                          flexDirection: "row",
                          justifyContent: "space-between",
                          flex: 1,
                          alignItems: "center",
                          borderWidth: 2,
                          borderColor: "red",
                          marginRight: 90
                        }}
                      >
                        <View
                          style={{
                            borderWidth: 2,
                            flex: 1,
                            alignItems: "flex-start"
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 15,
                              fontWeight: "800",
                              color: "#0e2360"
                            }}
                          >
                            {item.location.city}
                          </Text>
                        </View>
                        <View
                          style={{
                            flexDirection: "row",
                            borderWidth: 2,
                            borderColor: "red",
                            flex: 1,
                            alignItems: "center",
                            justifyContent: "flex-end"
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 10,
                              fontWeight: "600",
                              color: "#777"
                            }}
                          >
                            {" "}
                            From
                          </Text>
                          <Text
                            style={{
                              fontSize: 15,
                              fontWeight: "800",
                              color: "#0e2360"
                            }}
                          >
                            {item.dob.age}0{" "}
                          </Text>
                          <Text
                            style={{
                              fontSize: 15,
                              fontWeight: "800",
                              color: "#0e2360"
                            }}
                          >
                            {" "}
                            USD{" "}
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          borderWidth: 3,
                          flexDirection: "row",
                          justifyContent: "space-between",
                          flex: 1,
                          alignItems: "center",
                          borderWidth: 2,
                          borderColor: "red"
                        }}
                      >
                        <View style={{ flexDirection: "row" }}>
                          <Text
                            style={{
                              fontSize: 15,
                              fontWeight: "800",
                              color: "#0e2360"
                            }}
                          >
                            {item.registered.date.substring(6, 7)} -
                          </Text>
                          <Text
                            style={{
                              fontSize: 15,
                              fontWeight: "800",
                              color: "#0e2360"
                            }}
                          >
                            {item.dob.date.substring(6, 7)} Aug
                          </Text>
                        </View>
                        <View style={{justifyContent: 'center',alignItems: 'center',height:30}}>
                          {this.state.isBookingSelected ? (
                            <View style={{flex:1,justifyContent: 'center',alignitems:'center',flexDirection: 'row',borderRadius:50,backgroundColor:'dodgerblue'}}>
                              <Text style={styles.bookingTextSelected}>
                                Booking Now
                                
                              </Text>
                              <Image
                                  source={require("../Assets/Images/arrow-white.png")}
                                  style={{marginLeft:10}}
                                />
                            </View>
                          ) : (
                            <View style={{flex:1,justifyContent: 'center',alignItems: 'center',flexDirection: 'row',}}>
                              <Text style={styles.bookingTextRegular}>
                                Booking Now
                               
                              </Text>
                              <Image
                                  source={require("../Assets/Images/arrow-black.png")}
                                  style={{marginLeft:10}}
                                  
                                />
                            </View>
                          )}
                        </View>
                      </View>
                    </View>
                  </TouchableHighlight>
                )}
              />
            </View>
            <View style={styles.flatlistDescription}>
              <View style={styles.descriptionText}>
                <Text style={{ color: "#888" }}>
                  * Round-trip including all taxes,
                </Text>
                <Text style={{ color: "#888" }}>fees and carrier charges.</Text>
              </View>
              <TouchableHighlight style={styles.seemoreButton}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "800",
                    color: "#0e2360",
                    marginRight:40
                  }}
                >
                  {" "}
                  See all{" "}
                </Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: "gold",
    borderColor: "orange",
    borderWidth: 3
  },
  listNav: {
    flex: 1,
    flexDirection: "row",
    borderColor: "blue",
    borderWidth: 3,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  listBody: {
    flex: 6,
    borderWidth: 3,
    marginLeft: 50
  },
  flatlistWrapper: { flex: 1 },
  flatlistHeader: {
    flex: 1,
    backgroundColor: "lightgreen",

    borderColor: "blue",
    borderWidth: 3,
    justifyContent: "center"
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

    borderWidth: 3,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  itemsWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  bookingTextSelected: {
    // backgroundColor: "dodgerblue",
    // paddingHorizontal: 18,
    // paddingVertical: 10,
    color: "#fff",
    fontWeight: "600",

    // borderRadius: 50,
    // marginRight:30

  },
  bookingTextRegular: {
    // backgroundColor: "#fff",
    color: "#888",
    fontWeight: "600",
    // paddingHorizontal: 18,
    // paddingVertical: 10,
    // borderRadius: 50,
    // marginRight:10
  },
  listNavElement: {
    height: 20,
    marginLeft: 30
  }
});
