import React from 'react';
import { Text, Button, View, styles, StyleSheet } from 'react-native';

const TimeOut = ({ navigation }) => {
    function navigate(){
        navigation.navigate('Screen1');
    }
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'black'}}>  
          <Button 
              title="Go Screen 1"  
              onPress={() => navigation.navigate('Screen1')}  
        />  
        </View>
    );
}
export default TimeOut;
