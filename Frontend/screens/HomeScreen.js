import { ScrollView, StyleSheet, View, Text, SafeAreaView } from "react-native";

import Header from "../components/Header";
import EventList from "../components/EventList";
import Categories from "../components/Categories";
import Banner from "../components/Banner";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
      <SafeAreaView>
        <View style={style.headerContainer}>
          <View style={style.headerDiv}>
            <Text style={style.headerText}>Hello Name</Text>
          </View>
          <Header />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 15,
              marginTop: 25,
            }}
          >
            <Text style={style.headerText}>Featured</Text>
            <Text style={style.headerText}>See all</Text>
          </View>
        </View>
      </SafeAreaView>

      {/* Content Starting */}

      <View style={style.contentContainer}>
        <View style={style.contentBanner}>
          <Banner />
        </View>
        <EventList navigation={navigation} />
        <Categories />
        <EventList navigation={navigation} />
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
    backgroundColor: "#362e5f",
    height: 300,
    overflow: "hidden",
  },
  headerDiv: {
    alignItems: "center",
    marginTop: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },

  /* Content styles */

  contentContainer: {
    backgroundColor: "white",
  },
  contentBanner: {
    position: "relative",
    top: -90,
    width: "100%",
    alignSelf: "center",
  },
  ImageContainer: {
    backgroundColor: "rgba(54, 46, 95, 0.2)",
    flex: 1,
  },
});
