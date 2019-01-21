import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  Animated
} from "react-native";

let accessID =
  "c2762cba9947259cd987a5fc53bf0388ac586afa8d564e6c09bbff2d7a30d45e";
let secretKey =
  "b43a042bb5fff8048d38f20ac304c2926081d7a5087c993b9f675a1533bf1519";

let deviceWidth = Dimensions.get("window").width;

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgs: []
    };
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
    return (
      <View style={styles.container}>
        <View style={styles.flatlistWrapper}>
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
              <View>
                <Image
                  source={{ uri: item.urls.small }}
                  style={{ height: 200, width: deviceWidth }}
                  // resizeMode='contain'
                />
              </View>
            )}
          />
          <View style={styles.dot}>
            {scrollIndicator.map((item, i) => {
                console.warn(scrollIndicator.length)
              let opacity = position.interpolate({
                inputRange: [i - 1, i, i + 1],
                outputRange: [0.2, 1, 0.2],
                extrapolate: "clamp"
              });
              return (
                <Animated.View
                  key={i}
                  style={{
                    opacity,
                    
                      width: 40,
                      height: 40,
                      backgroundColor: "#595959",
                      margin: 20,
                      borderWidth: 3,
                      borderRadius: 50
                    }
                  }
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
    flex: 3,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center"
  },
  flatlistWrapper: {
    flex: 1,
    backgroundColor: "lime"
  },
  dot: {
    backgroundColor: "#353541",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  flatlistWrapper: {
    width: deviceWidth,
    alignItems: "center"
  }
});
