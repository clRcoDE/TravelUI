import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableHighlight,
  Alert,
  Animated
} from "react-native";
import Headers from "./Headers";

// import {styles as panelStyles} from './Panel'

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchData: [],
      seed:1,
      fadeAnim : new Animated.Value(0)
    };
  }


  fadeInListElements =()=>{
    Animated.timing(this.state.fadeAnim,{toValue:1,duration:3000}).start()
  }
  loadOffers = () => {
    let {fetchData} = this.state;
    let {seed}= this.state;
    // console.warn('called load')
    fetch(`https://randomuser.me/api/?page=${seed}&results=10`)
      .then(res => res.json())
      .then(data =>  this.setState({ fetchData: [...fetchData,...data.results]}))
      .catch(e => Alert.alert("connection failed"));
  };

  itemSeparatorView=()=>{

    return (
      <View style={{height:1,backgroundColor:this.props.theme?'#bbb':'#555'}}></View>
    )
  }

  componentDidMount() {


    this.loadOffers();
    this.fadeInListElements()





    // this.loadMore()
    // this.itemSeparatorView()
  }

  loadMore=()=>{
    // console.warn('load more called')
    this.setState(prev=>({seed:prev.seed++}),()=>{this.loadOffers()})
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.listNav}>



          <View style={styles.listNavElement}>
            <Text style={{ fontSize: 12, color:this.props.theme? "#777" : '#ccc', fontWeight: "600" }}>
              Check-in
            </Text>
          </View>
          <View style={styles.listNavElement}>
            <Text style={{ fontSize: 12, color:this.props.theme? "#777" : '#ccc', fontWeight: "600" }}>
              Flight Status
            </Text>
          </View>
          <View style={styles.listNavElement}>
            <Text style={{ fontSize: 12, color: this.props.theme? "#0e2360" : '#58c4fc', fontWeight: "800" }}>
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
                borderColor: this.props.theme ?  "#0e2360" :'#58c4fc',
                borderWidth: 1,
                marginRight: 15
              }}
            />
            <View
              style={{ borderColor: this.props.theme ? "#0e2360" :'#58c4fc', borderWidth: 1, marginLeft: 15 }}
            />
          </View>
        </View>
        <View style={styles.listBody}>
          <View style={styles.flatlistWrapper}>
            <Animated.View style={styles.flatlistHeader}>
              <Headers text={"Best Value Offers to Europe!"} color={this.props.theme} styler={this.state.fadeAnim}/>
            </Animated.View>
            <View style={styles.flatlistBody}>
              <FlatList
                data={this.state.fetchData}
                keyExtractor={item => item.email}
                ItemSeparatorComponent={this.itemSeparatorView}
                extraData={this.props.theme}
                  showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => (

                  <Animated.View
                    style={{ height: 85,opacity:this.state.fadeAnim }}
                  >

                    {/* <View style={styles.flatlistSingleItem}> */}
                    <View style={styles.itemsWrapper}>
                      <View style={[styles.listCol]}>
                        <View
                          style={{
                            // borderWidth: 2,
                            flex: 1,
                            alignItems: "flex-start"
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 15,
                              color: this.props.theme? "#777" : '#ccc', fontWeight: "600" 
                            }}
                          >
                            {item.location.city}
                          </Text>
                        </View>
                        <View
                          style={{
                            flexDirection: "row",
                            // borderWidth: 2,
                            borderColor: "green",
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
                              color: this.props.theme? "#0e2360" :"#ccc"
                            }}
                          >
                            {item.dob.age}0{" "}
                          </Text>
                          <Text
                            style={{
                              fontSize: 15,
                              fontWeight: "800",
                              color: this.props.theme? "#0e2360" :"#ccc"
                             
                            }}
                          >
                            {" "}
                            USD{" "}
                          </Text>
                        </View>
                      </View>
                      <View style={[styles.listCol,{marginLeft:40}]}>
                        <View style={{ flexDirection: "row" }}>
                          <Text
                            style={{
                              fontSize: 15,
                              fontWeight: "800",
                              color: this.props.theme? "#0e2360" :"#ccc"
                              
                            }}
                          >
                            {item.registered.date.substring(6, 7)} -
                          </Text>
                          <Text
                            style={{
                              fontSize: 15,
                              fontWeight: "800",
                              color: this.props.theme? "#0e2360" :"#ccc"
                              
                            }}
                          >
                            {item.dob.date.substring(6, 7)} Aug
                          </Text>
                        </View>
                        {/* <View style={{}}>
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
                        </View> */}
                        {this.state.isBookingSelected ? (
                          <View style={[styles.bookingViewSelected]}>
                            <Text style={styles.bookingTextSelected}>
                              Book Now
                            </Text>
                            <Image
                              source={require("../Assets/Images/arrow-white.png")}
                              style={{ marginLeft: 10 }}
                            />
                          </View>
                        ) : (
                          <View style={[styles.bookingViewRegular]}>
                            <Text style={[styles.bookingTextRegular,{color:this.props.theme?'#777':'#ccc'}]}>
                              Book Now
                            </Text>
                            <Image
                              source={require("../Assets/Images/arrow-black.png")}
                              style={{ marginLeft: 10 }}
                            />
                          </View>
                        )}
                      </View>
                    </View>
                  </Animated.View>
                )}
              />
            </View>
            <View style={styles.flatlistDescription}>
              <View style={styles.descriptionText}>
                <Text style={{ color: "#888" }}>
                  * Round-trip including all taxes,
                </Text>
                <Text style={{ color: "#888" ,marginTop:10}}>fees and carrier charges.</Text>
              </View>
              <TouchableHighlight  onPress={this.loadMore} underlayColor='rgba(200,200,200,0.5)' style={{borderRadius:50,height:30,marginRight:65,width:100}}>
               <View  style={styles.seemoreButton}>
               <Text
                  style={[styles.seeallTextStyle,{color:this.props.theme?'#0e2360':'#58c4fc'}]}
                >
                  {" "}
                  See more{" "}
                </Text>
                </View>
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
    // backgroundColor: "gold",
    borderColor: "orange",
    marginLeft: 50,
    marginRight:60,
    // borderWidth: 3
  },
  listNav: {
    flex: 1,
    flexDirection: "row",
    borderColor: "blue",
    // borderWidth: 3,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  listBody: {
    flex: 6,
    // borderWidth: 3,
    
  },
  flatlistWrapper: { flex: 1 },
  flatlistHeader: {
    flex: 1,
    // backgroundColor: "lightgreen",

    borderColor: "blue",
    // borderWidth: 3,
    justifyContent: "center"
  },
  flatlistBody: {
    flex: 6,
    // backgroundColor: "lightblue",

    borderColor: "red"
    // borderWidth: 3
  },
  flatlistDescription: {
    flex: 2,
    // backgroundColor: "violet",

    // borderWidth: 3,
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
    fontWeight: "600"

    // borderRadius: 50,
    // marginRight:30
  },
  bookingTextRegular: {
    // backgroundColor: "#fff",
    // color: "#888",
    fontWeight: "600"
    // paddingHorizontal: 18,
    // paddingVertical: 10,
    // borderRadius: 50,
    // marginRight:10
  },
  listNavElement: {
    height: 20,
    marginLeft: 30
  },

  bookingViewSelected: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 50,
    backgroundColor: "dodgerblue",
    height: 32,
    width: 130
  },
  bookingViewRegular: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 50,
    // backgroundColor: "white",
    height: 32,
    width: 130,
    // borderWidth:3
  },
  listCol: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    alignItems: "center",
    marginRight: 40
  },
  seeallTextStyle:{
                    fontSize: 15,
                    fontWeight: "800",
                    // color: "#0e2360",
                   
  },
  seemoreButton:{
    // padding:5,
    justifyContent: 'center',
    alignItems: 'center',
    flex:1,
    // borderWidth:2,
    borderRadius:50
  }
});
