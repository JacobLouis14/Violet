import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider} from "react-redux";


import MainTab from "./routes/MainTab";
import store from "./Redux/store";


export default function App() {


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
