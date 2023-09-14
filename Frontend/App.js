import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

import MainTab from "./routes/MainTab";
import store from "./Redux/store";

export default function App() {
  /* Looking For User */
  // useEffect(() => {
  //   (async()=>{
  //     let userToken = await AsyncStorage.getItem('userToken')
  //     if(userToken){

  //     }
  //   })
  // }, [])

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <NavigationContainer>
          <MainTab />
        </NavigationContainer>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
