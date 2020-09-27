import React from 'react';

import Home from './components/Home';
import CreateProfile from './components/CreateProfile';
import CommunicationRequests from './components/CommunicationRequests';
import ThankYou from './components/ThankYou';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function App() {
  return(
      <NavigationContainer>
        <Stack.Navigator  screenOptions={{headerShown: false}}>
          <Stack.Screen name="HomeScreen" component={Home} />
          <Stack.Screen name="CreateProfileScreen" component={CreateProfile} />
          <Stack.Screen name="CommunicationRequestsScreen" component={CommunicationRequests} />
          <Stack.Screen name="ThankYouScreen" component={ThankYou} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}
