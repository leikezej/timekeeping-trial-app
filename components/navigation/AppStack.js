import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import IonIcons from 'react-native-vector-icons/Ionicons';

import Screen1 from '../Screens/drawers/Screen1';
import Screen2 from '../Screens/drawers/Screen2';
import Screen3 from '../Screens/drawers/Screen3';
import Screen4 from '../Screens/drawers/Screen4';
import Screen5 from '../Screens/drawers/Screen5';

import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

const AuthStack = () => {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} 
            screenOptions={{
                headerShown: false, 
                drawerLabelStyle: {
                    marginLeft: -25, 
                    drawerActiveBackgroundColor:'#969696',
                    drawerActiveTineColor:'#fff',
                    drawerInactiveTintColor: '#333',
                    fontFamily:'Poppins', 
                    fontSize: 15,
                },
            }}>
            <Drawer.Screen name="Screen1" component={Screen1} options={{
                drawerIcon: ({color}) => (
            <ion-icon size={22} color={color}name="home"></ion-icon>
              )
            }} />
            
            <Drawer.Screen name="Screen2" component={Screen2} options={{
                drawerIcon: ({color}) => (
            <ion-icon size={22} color={color}name="heart"></ion-icon>
              )
            }} />
            <Drawer.Screen name="Screen3" component={Screen3} options={{
                drawerIcon: ({color}) => (
            <ion-icon size={22} color={color} name="home-outline"></ion-icon>
              )
            }} />
            <Drawer.Screen name="Screen4" component={Screen4} options={{
                drawerIcon: ({color}) => (
            <ion-icon size={22} color={color} name="heart"></ion-icon>
              )
            }} />
            <Drawer.Screen name="Screen5" component={Screen5} options={{
                drawerIcon: ({color}) => (
            <ion-icon size={22} color={color} name="home-outline"></ion-icon>
                //   <Ionicons name="home-outline" size={22} color={color} />
              )
            }} />
            
            <Drawer.Screen name="Screen6" component={Screen6} />
        </Drawer.Navigator>
    );
};

export default AuthStack;