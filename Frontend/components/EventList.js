import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";
import {
  responsiveHeight,
  responsiveFontSize,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function EventList({ navigation }) {
  const [imageUrl, setImageUrl] = useState();

  /*Accesing Event List */
  useEffect(() => {
    axios
      .get("https://api.slingacademy.com/v1/sample-data/photos")
      .then((response) => {
        setImageUrl(response.data.photos);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // function to navigate to eventScreen
  const listTouchHandler = () => {
    navigation.navigate("EventDetails");
  };

  return (
    <View style={style.container}>
      <Text style={style.heading}>Popular Events Nearby</Text>
      <FlatList
        data={imageUrl}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Pressable
              activeOpacity={0.9}
              onPress={() => listTouchHandler()}
              style={style.eventContainer}
            >
              <View style={style.imageContainer}>
                <Image style={style.eventImage} source={{ uri: item.url }} />
              </View>
              <View style={style.eventDetails}>
                <Text style={style.details}>{item.title}</Text>
                <View style={style.dateContainer}>
                  <Text style={style.dateText}>30</Text>
                  <Text style={style.dateText}>Nov</Text>
                </View>
              </View>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    paddingHorizontal: "3%",
  },
  heading: {
    marginTop: "10%",
    fontSize: responsiveFontSize(2.5),
    fontWeight: "bold",
    marginBottom: "5%",
  },
  eventContainer: {
    flexDirection: "row",
    marginBottom: "5%",
    // marginHorizontal: "3%",
    paddingHorizontal: "1%",
    paddingVertical: "2%",
    backgroundColor: "rgba(197, 225, 165, 0.1)",
    borderRadius: 10,
  },
  imageContainer: {
    elevation: 5,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    borderRadius: 10,
    overflow: "hidden",
  },
  eventImage: {
    height: responsiveHeight(22),
    width: responsiveWidth(35),
    resizeMode: "cover",
  },
  eventDetails: {
    flex: 1,
    borderRadius: 10,
    paddingHorizontal: "2%",
    flexDirection: "column",
    marginLeft: "1%",
  },
  details: {
    fontSize: responsiveFontSize(1.8),
  },

  dateContainer: {
    backgroundColor: "#8BC34A",
    marginVertical: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: "2%",
    right: "5%",
  },
  dateText: {
    fontSize: responsiveFontSize(1.8),
    color: "#757575",
    fontWeight: "500",
  },
});
