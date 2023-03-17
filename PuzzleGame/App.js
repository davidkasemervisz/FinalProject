import React from 'react';
import HomeScreen from './components/HomeScreen';
import MapScreen from './components/MapScreen';
import LevelScreen from './components/LevelScreen';
import InstructionsScreen from './components/InstructionsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Map" component={MapScreen} />
          <Stack.Screen name="Level" component={LevelScreen} />
          <Stack.Screen name="Instructions" component={InstructionsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
