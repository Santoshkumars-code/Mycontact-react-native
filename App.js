import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import MyContacts from './component/MyContacts';
import Profile from './component/Profile';
import CreateContact from './component/CreateContact';

const Stack = createStackNavigator();

const App = () => {
  return (
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name='MyContacts' component={MyContacts} />
       <Stack.Screen name='CreateContact' component={CreateContact} />
       <Stack.Screen name='Profile' component={Profile} />
     </Stack.Navigator>
   </NavigationContainer>
  )
}
export default App;
 