import { StyleSheet, View } from 'react-native';


import MainTab from './routes/MainTab';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {

  
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <MainTab/>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
