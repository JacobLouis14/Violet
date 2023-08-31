import { StyleSheet, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import EventDetailsScreen from './screens/EventDetailsScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen/> */}
      <EventDetailsScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'White',
  },
});
