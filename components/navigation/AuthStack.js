import React from 'react';
// import { View } from 'react-native'
import { createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../Screens/HomeScreen';
// import Login from '../Screens/Login';
// import Register from '../Screens/Register';

import TimeSheet from '../Screens/TimeSheet';
// import TimeIn from '../Screens/TimeIn';
// import TimeOut from '../Screens/TimeOut';

import Screen1 from '../Screens/drawers/Screen1';
import Screen2 from '../Screens/drawers/Screen2';
// import Screen3 from '../Screens/drawers/Screen3';
// import Screen4 from '../Screens/drawers/Screen4';
// import Screen5 from '../Screens/drawers/Screen5';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Welcome HOME Master' }}/>
            
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Register" component={Register} />
            
            <Stack.Screen name="TimeSheet" component={TimeSheet} />
            {/* <Stack.Screen name="TimeIn" component={TimeIn}/>
            <Stack.Screen name="TimeOut" component={TimeOut} /> */}
            
            <Stack.Screen name="Screen1" component={Screen1} />
            <Stack.Screen name="Screen2" component={Screen2} />
            {/* <Stack.Screen name="Screen3" component={Screen3} />
            <Stack.Screen name="Screen4" component={Screen4} />
            <Stack.Screen name="Screen5" component={Screen5} /> */}
          </Stack.Navigator>
    );
}

export default AuthStack;