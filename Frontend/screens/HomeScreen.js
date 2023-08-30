import { View } from "react-native"


import Header from "../components/Header"
import Banner from "../components/Banner"
import EventList from "../components/EventList"
import Categories from "../components/Categories"

export default function HomeScreen() {
  return (
    <View >
        <Header/>
        <Banner/>
        <EventList/>
        <Categories/>
    </View>
  )
}

