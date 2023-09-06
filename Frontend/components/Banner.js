import {
  View,
  StyleSheet,
  useWindowDimensions,
  Text,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-native-reanimated-carousel";
import { Entypo } from "@expo/vector-icons";

export default function Banner() {
  const { width, height } = useWindowDimensions();

  /*For dummy Images */
  const [imageUrl, setImageUrl] = useState([]);
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

  return (
    <View style={style.container}>
      <Carousel
        data={imageUrl}
        width={width}
        height={height / 3}
        autoPlay
        mode="parallax"
        autoPlayInterval={2500}
        loop
        style={{ borderRadius: 25 }}
        renderItem={({ item }) => (
          <View style={{ flex: 1 }}>
            <ImageBackground
              source={{ uri: item.url }}
              style={style.bannerImage}
              resizeMode="cover"
            >
              <View style={style.bannerContainer}>
                <Text style={style.bannerHeading}>{item.description}</Text>
                <View style={style.DateContainer}>
                  <Entypo name="calendar" size={40} color="white">
                    <Text style={style.bannerText}>30/2/2023</Text>
                  </Entypo>
                </View>
              </View>
            </ImageBackground>
          </View>
        )}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  bannerImage: {
    flex: 1,
    // borderWidth: 5,
    // borderColor: "white",
    borderRadius: 30,
    overflow: "hidden",
    elevation: 8,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
  },
  bannerContainer: {
    flex: 1,
  },
  DateContainer: {
    backgroundColor: "transparent",
    position: "absolute",
    bottom: 5,
    borderRadius: 10,
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  bannerText: {
    fontWeight: "bold",
    marginLeft: 15,
  },
  bannerHeading: {
    marginVertical: 20,
    marginHorizontal: 10,
    padding: 10,
    flexWrap: "wrap",
    fontSize: 18,
    backgroundColor: "white",
    borderRadius: 10,
  },
});
