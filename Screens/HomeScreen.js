import React from 'react';
import { Text, Button, View, styles, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  function navigate(){
    navigation.navigate('TimeSheet');
}
    
    return (
        <View>  
            <View>
              <Text>
                  Home SWEET HOME
              </Text>
            </View>
          <Button 
              title="Go to Screen1"  
              onPress={() => navigation.navigate('TimeSheet')}  
        />  
        </View>
    );
}

const style = StyleSheet.create({
  button:  {
    width: '50%',
    height: '25%',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default HomeScreen;

// <Button 
//               title="Go to Screen1"  
//               onPress={() => navigation.navigate('Login')}  
//         />  