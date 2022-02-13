import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './Login';
import Register from './Register';

const Stack = createStackNavigator();

const Navigation = props => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Login} options={{ headerShown: false }} />            
                <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />            
            </Stack.Navigator>
        </NavigationContainer>
    )
};

const style = StyleSheet.create({

});

export default Navigation;