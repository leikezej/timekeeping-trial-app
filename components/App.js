import 'react-native-gesture-handler';
import React from 'react';
// import Login from './Screens/Logins';
// import Register from './Screens/Register';
// import HomeScreen from './Screens/HomeScreen';
// // import HomeScreen from './Screens/drawers/HomeScreen';
// import TimeSheet from './Screens/TimeSheet';
// import TimeIn from './Screens/TimeIn';
// import TimeOut from './Screens/TimeOut';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerStackNavigator } from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack'; 

import AuthStack from './navigation/AuthStack';
import AppStack from './navigation/AppStack';
  
  const Drawer = createDrawerStackNavigator();
  const Stack = createNativeStackNavigator(); 
  
function App () {
    return (
        <NavigationContainer>
            {/* <AppStack /> */}
            <AuthStack />
        </NavigationContainer>
    );
};

export default App;



// <Stack.Navigator>
//                 <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
//                 <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
//                 <Stack.Screen
//                   name="Home"
//                   component={HomeScreen}
//                   options={{ title: 'Welcome' }}
//                 />
                
//                 {/* <Stack.Screen
//                   name="Home"
//                   component={HomeScreen}
//                   options={{ title: 'Welcome' }}
//                 /> */}
                
//                 {/* <Stack.Screen name="TimeSheet" component={TimeSheet} options={{ headerShown: false }} />
//                 <Stack.Screen name="TimeOut" component={TimeOut} options={{ headerShown: false }} />
//                 <Stack.Screen name="TimeIn" component={TimeIn} options={{ headerShown: false }} /> */}
//             </Stack.Navigator>