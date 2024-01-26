import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './app/screens/HomeScreen';
import ImageScreen from './app/screens/ImageScreen';
import MarketScreen from './app/screens/MarketScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Image" component={ImageScreen} />
        <Tab.Screen name="Market" component={MarketScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
