import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AntDesign } from '@expo/vector-icons';

import Home from './screens/Home';
import About from './screens/About';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

//untuk mendaftark alur screen dari aplikasi mobile kita
export default function App() {
  return (
    <NavigationContainer>
      {/* TAB */}
      <Tab.Navigator>
        <Tab.Screen 
          name="Home" 
          component={ Home } 
          options={ {
            tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={24} color="black" />
          ), headerShown: false } } />
        <Tab.Screen name="About" component={ About } 
        options={ {tabBarIcon: ({ color, size }) => (
            <AntDesign name="questioncircle" size={24} color="black" />
          )} }/>
      </Tab.Navigator>

      {/* NATIVE STACK */}
      {/* <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={ Home } options={{ headerShown: false }}/>
        <Stack.Screen name="About" component={ About } options={{ headerShown: false }}/>
      </Stack.Navigator> */}
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
