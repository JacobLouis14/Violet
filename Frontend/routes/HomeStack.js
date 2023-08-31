import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'


import HomeScreen from '../screens/HomeScreen';
import EventDetailsScreen from '../screens/EventDetailsScreen';


export default function HomeStack(){

    const Stack = createNativeStackNavigator();

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={HomeScreen} options={{headerShown: false}} />
                <Stack.Screen name='EventDetails' component={EventDetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

