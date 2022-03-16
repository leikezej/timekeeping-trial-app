import 'react-native-gesture-handler';
import React from 'react';


import Login from './Screens/Logins';
import Register from './Screens/Register';
import HomeScreen from './Screens/HomeScreen';
import TimeSheet from './Screens/TimeSheet';
import TimeIn from './Screens/TimeIn';
import TimeOut from './Screens/TimeOut';


import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {  createStackNavigator} from  '@react-navigation/stack'; 
  
  const Drawer = createDrawerNavigator();
  const Stack = createStackNavigator();
  
  
function App () {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
                <Stack.Screen
                  name="Home"
                  component={HomeScreen}
                  options={{ title: 'Welcome' }}
                  
                />
                <Stack.Screen name="TimeSheet" component={TimeSheet} options={{ headerShown: false }} />
                <Stack.Screen name="TimeOut" component={TimeOut} options={{ headerShown: false }} />
                <Stack.Screen name="TimeIn" component={TimeIn} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;