import { StyleSheet, View } from 'react-native';


import HomeScreen from './screens/HomeScreen';
import EventDetailsScreen from './screens/EventDetailsScreen';
import HomeStack from './routes/HomeStack'

export default function App() {

  
  return (
    <View style={styles.container}>
      <HomeStack/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
