import React from 'react';
import { Text, Button, View, styles, StyleSheet } from 'react-native';
import { Col, Grid } from "react-native-easy-grid";


const HomeScreen = ({ navigation }) => {
  function navigate(){
    navigation.navigate('TimeSheet');
}
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'powder blue'}}>  
          <Button 
              title="Go to TimeSheet Screen"  
              onPress={() => navigation.navigate('TimeSheet')}  
        />  
        </View>
    );
}

const style = StyleSheet.create({
  buttonHome:  {
    width: '50%'
  }
});

export default HomeScreen;

// <Button 
//               title="Go to Screen1"  
//               onPress={() => navigation.navigate('Login')}  
//         />  