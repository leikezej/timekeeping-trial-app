import React from 'react';
import { Text, Button, View, styles, StyleSheet } from 'react-native';

const TimeIn = ({ navigation }) => {
    function navigate(){
        navigation.navigate('TimeOut');
    }
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'gray'}}>  
          <Button 
              title="Go to TimeOut Screen"  
              onPress={() => navigation.navigate('TimeOut')}  
        />  
        </View>
    );
}
export default TimeIn;
