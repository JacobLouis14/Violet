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
  responsiveHeight,
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
        width={responsiveWidth(100)}
        height={height / 3}
        autoPlay
        autoPlayInterval={4000}
        loop
        style={{ width: width }}
        renderItem={({ item }) => (
          <View style={{ flex: 1 }}>
            <ImageBackground
              source={{ uri: item.url }}
              style={style.bannerImage}
            >
              <View style={style.bannerContainer}>
                <Text style={style.bannerHeading}>{item.description}</Text>
                <View style={style.DateContainer}>
                  <Text style={style.bannerText}>30</Text>
                  <Text
                    style={{
                      fontSize: responsiveFontSize(1.5),
                      fontWeight: "500",
                      color: "white",
                    }}
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
    marginHorizontal: 20,
    marginVertical: "8%",
    borderRadius: 8,
    overflow: "hidden",
    elevation: 8,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    justifyContent: "flex-end",
  },
  bannerContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    backgroundColor: "white",
    maxHeight: responsiveHeight(20),
    marginBottom: 5,
    alignItems: "center",
    borderRadius: 20,
    marginHorizontal: 10,
  },
  DateContainer: {
    backgroundColor: "#45865b",
    borderRadius: 10,
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  bannerText: {
    fontWeight: "bold",
    fontSize: responsiveFontSize(1.5),
    color: "white",
  },
  bannerHeading: {
    fontSize: responsiveFontSize(1.5),
    maxWidth: responsiveWidth(50),
  },
});
