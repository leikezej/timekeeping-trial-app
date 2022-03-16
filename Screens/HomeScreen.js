import React, { useState , useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableHighlight } from 'react-native';

const App = () => {
  const [currentDate, setcurrentDate] = useState('')
  
  useEffect(() => {
    var date = new Date().getDate() //current Date  
    var month = new Date().getMonth() //current Month  
    var year = new Date().getYear() //current Year  
    var hours = new Date().getHours() //current Hours  
    var min = new Date().getMinutes() //current Minutes  
    var sec = new Date().getSeconds() //current Seconds  
    setcurrentDate(
      date + '/' + month + '/' + year + ' | ' + hours + ':' + min + sec
    )
    return () => {
    }
  }, [])
  
  return(
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.textStyle}>
          Current Date & Time  
        </Text>
        
        <Text style={styles.textStyle}>
          {currentDate}
        </Text>
      </View>
      <TouchableHighlight
  style={styles.submit}
  onPress={() => this.submitSuggestion(this.props)}
  underlayColor='#fff'>
    <Text style={[styles.submitText]}>Submit</Text>
</TouchableHighlight>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:  1,
    justifyContent: 'center',
    padding: 10
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 25
  },
  // clock {
  //   // width: 300,
  //   // height:  300,
  //   borderRadius: 50%,
  //   position: absolute,
  //   top: 50%,
  //   left: 50%,
  //   transform: translate(-50%, -50%);
  //   box-shadow 0 2px 30px rgba(0, 0, 0, 0.2),
  //   font-size: 24px,
  //   color: #4444,
  //   textAlign: center,
  // },
  submit:{
    marginRight:40,
    marginLeft:40,
    marginTop:10,
},
submitText:{
    paddingTop:20,
    paddingBottom:20,
    color:'#fff',
    textAlign:'center',
    backgroundColor:'#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff'
},  
});

export default App;