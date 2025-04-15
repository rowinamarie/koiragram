import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen'

export default function App() {
  const Tab = createBottomTabNavigator();
 
  return (
    <NavigationContainer> 
      
      <Tab.Navigator /*Navigoinnin luonti*/
        screenOptions={({ route }) => ({  
          tabBarIcon: ({ focused, color, size }) => {
    
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Map') {
              iconName = 'map';
            }

            return <Ionicons name={iconName} size={size} color={color} />;   
          },
        })}>
          {/*Tabien eri näkymät*/}
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
      </Tab.Navigator>

    </NavigationContainer>

  );
  
}

