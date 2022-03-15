import 'react-native-gesture-handler';
import React from 'react';

import Login from './Screens/Logins';
import Register from './Screens/Register';
import HomeScreen from './Screens/HomeScreen';

import TimeSheet from './Screens/TimeSheet';
import TimeIn from './Screens/TimeIn';
import TimeOut from './Screens/TimeOut';

import Screen1 from './Screens/drawers/Screen1';
import Screen2 from './Screens/drawers/Screen2';


import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator} from  '@react-navigation/stack'; 
  
  // const Drawer = createDrawerNavigator();
  const Stack = createStackNavigator();
  
  // const Drawer = createDrawerNavigator();
  // function DrawerRoutes() {
  //     return (
  //       <Drawer.Navigator initialRouteName="HomeScreen">
  //         <Drawer.Screen name="HomeScreen "  component={HomeScreen} />
  //         <Drawer.Screen name="Screen1" component={Screen1} />
  //         <Drawer.Screen name="Screen2" component={Screen2} />
  //       </Drawer.Navigator>
  //     );
  //   }
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
                <Stack.Screen name="TimeSheet" component={TimeSheet} options={{ headerShown: true }} />
                <Stack.Screen name="TimeIn" component={TimeIn} options={{ headerShown: true }} />
                <Stack.Screen name="TimeOut" component={TimeOut} options={{ headerShown: true }} />
                
                <Stack.Screen name="Screen1" component={Screen1} options={{ headerShown: true}}/>
                <Stack.Screen name="Screen2" component={Screen2}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;