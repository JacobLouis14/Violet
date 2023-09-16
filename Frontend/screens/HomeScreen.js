import { ScrollView, StyleSheet, View, Text, SafeAreaView } from "react-native";

import Header from "../components/Header";
import EventList from "../components/EventList";
import Categories from "../components/Categories";
import Banner from "../components/Banner";
import {
  responsiveFontSize,
  responsiveHeight,
} from "react-native-responsive-dimensions";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
      <SafeAreaView style={style.headerContainer}>
        <Header />
      </SafeAreaView>

      {/* Content Starting */}

      <View style={style.contentContainer}>
        <View style={style.contentBanner}>
          <Banner />
        </View>
        <View style={style.contentBody}>
          <Categories />
          <EventList navigation={navigation} />
        </View>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headerContainer: {
    overflow: "hidden",
    backgroundColor: "#244b1d",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingTop: "8%",
  },
  headerText: {
    fontSize: responsiveFontSize(2),
    fontWeight: "bold",
    color: "black",
  },

  /* Content styles */

  contentContainer: {},
  contentBanner: {
    // width: "100%",
    // alignSelf: "center",
  },
  contentBody: {
    marginTop: "2%",
  },
});
