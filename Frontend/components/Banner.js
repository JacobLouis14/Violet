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
import {
  responsiveFontSize,
  responsiveWidth,
} from "react-native-responsive-dimensions";

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
        width={responsiveWidth(80)}
        height={height / 3}
        autoPlay
        mode="parallax"
        autoPlayInterval={3000}
        loop
        style={{ borderRadius: 25, width: width, justifyContent: "center" }}
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
                  <Text style={style.bannerText}>30</Text>
                  <Text
                    style={{ fontSize: 22, fontWeight: "500", color: "white" }}
                  >
                    Month
                  </Text>
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
    justifyContent: "center",
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
    backgroundColor: "#362e5f",
    position: "absolute",
    bottom: 20,
    right: 20,
    borderRadius: 10,
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  bannerText: {
    fontWeight: "bold",
    fontSize: responsiveFontSize(3),
    color: "white",
  },
  bannerHeading: {
    marginVertical: 20,
    marginHorizontal: 10,
    padding: 10,
    flexWrap: "wrap",
    fontSize: responsiveFontSize(2),
    backgroundColor: "white",
    borderRadius: 10,
  },
});
