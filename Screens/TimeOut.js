import React from 'react';
import { Text, Button, View, styles, StyleSheet } from 'react-native';

const TimeOut = ({ navigation }) => {
    function navigate(){
        navigation.navigate('TimeOut');
    }
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'black'}}>  
          <Button 
              title="Go to Last Screen"  
              onPress={() => navigation.navigate('TimeOut')}  
        />  
        </View>
    );
}
export default TimeOut;
