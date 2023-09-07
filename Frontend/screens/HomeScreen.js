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
          <Header />
        </View>
      </SafeAreaView>

      {/* Content Starting */}

      <View style={style.contentContainer}>
        <View style={style.contentBanner}>
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
          <Banner />
        </View>
        <View style={style.contentBody}>
          <EventList navigation={navigation} />
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
    backgroundColor: "white",
    overflow: "hidden",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },

  /* Content styles */

  contentContainer: {
    backgroundColor: "white",
  },
  contentBanner: {
    width: "100%",
    alignSelf: "center",
  },
  contentBody: {
    marginTop: "2%",
  },
});
