import { ScrollView, View } from "react-native"


import Header from "../components/Header"
import Banner from "../components/Banner"
import EventList from "../components/EventList"
import Categories from "../components/Categories"

export default function HomeScreen({navigation}) {
  return (
    <ScrollView showsVerticalScrollIndicator = {false}>
        <Header />
        <Banner/>
        <EventList navigation={navigation}/>
        <Categories/>
        <EventList navigation={navigation}/>
    </ScrollView>
  )
}

