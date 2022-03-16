
import React, { useState } from 'react';
import {SafeAreaView, Button, StyleSheet, View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import FormError from '../components/FormError';

const Login = ({ navigation }) => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState();
    function navigate(){
        navigation.navigate('Register');
    } 
    
    const validateInput=()=>{
    
    }
    
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.TopView}>
                <Image 
                    style={styles.formLogo} 
                    source={{uri: 'https://i.postimg.cc/8Cw4CsFw/Time-Keeper-logo2.png' }} 
                />
            </View>
            <ScrollView style={styles.BottomView}>
                        <Text style={styles.formHeader}>
                                Login 
                                {/* {'\n'} 
                                Back!  */}
                            </Text>
                            
                            <TouchableOpacity style={styles.logTxt} onPress={navigate}>
                                <Text style={styles.loginText}>Already Have An Account? Login Now!</Text>
                          </TouchableOpacity>
                        
                                  <View style={styles.container}>
                                            <View style={styles.sectionStyle}>
                                                <Image
                                                  source={{
                                                    uri:
                                                      'https://img.icons8.com/ios/50/000000/user--v1.png',
                                                  }}
                                                  style={styles.imageStyle}
                                                />
                                                <TextInput
                                                  onChangeText={(val)=>setEmail(val)}
                                                  value={email}
                                                  style={{flex: 1}}
                                                  placeholder="Enter Your Email"
                                                />
                                            </View>
                                              
                                            <View style={styles.sectionStyle}>
                                                <Image
                                                  source={{
                                                  uri:
                                                    'https://img.icons8.com/ios/50/000000/lock--v2.png',
                                                    }}
                                                  style={styles.imageStyle}
                                                />
                                                <TextInput
                                                 onChangeText={(val)=>setPassword(val)}
                                                  value={password}
                                                  placeholderTextColor={'#f42f75'}
                                                  style={{flex: 1}}
                                                  placeholder="Enter Your Password"
                                                  secureTextEntry={true}
                                                />
                                            </View>
                                    </View>   
                          
                            <TouchableOpacity style={styles.LoginButton} onPress={validateForm}>
                                      <Text style={styles.buttonText}>
                                       Login
                                      </Text>
                            </TouchableOpacity>
                                
                                <Text style={styles.socialDivider}>
                                    OR Use
                                </Text>
                                
                              <View style={styles.Footer}>
                                 <Image
                                   source={{
                                    uri:
                                      'https://img.icons8.com/ios/50/000000/google-logo--v1.png',
                                     }}
                                  style={styles.ggSocial}
                                />
                                
                                <Image
                                   source={{
                                    uri:
                                      'https://img.icons8.com/ios/50/000000/facebook-new.png',
                                     }}
                                  style={styles.imageSocial}
                                />
                                
                                <Image
                                   source={{
                                    uri:
                                      'https://img.icons8.com/ios/50/000000/github--v1.png',
                                     }}
                                  style={styles.imageSocial}
                                />
                                <Image
                                   source={{
                                    uri:
                                      'https://img.icons8.com/ios/50/000000/sms.png',
                                     }}
                                  style={styles.imageSocial}
                                />
                             </View>
               </ScrollView>    
               
                  {/* {displayFormErr == true?
                      <FormError  hideErrOverlay={setDisplayFormError} err={errMessage}/>
                      :
                      null
                  }
                  
                  {isLoading == true?
                    <FormSuccess/>  
                  } */}
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      marginTop: 30,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 1
    },
    TopView: {
        width: '100%',
        height: '25%',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        backgroundColor: '#c5c5c5',
        marginTop: 8,
        // borderRadius: 50,
        borderTopRightRadius: 120,
        borderBottomStartRadius: 120
        // borderBottomLeftRadius: 20,
        // borderBottomRightRadius: 20
    },
    formLogo: {
        width: '100%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'contain',
    },
    formHeader:{
        color: '#000',
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: 'center',
        letterSpacing: 1
    }, 
    BottomView: {
        width: '100%',
        marginTop: 10,
        height: '75%',
        backgroundColor: '#c5c5c5',
        borderTopLeftRadius:50,
        borderTopRightRadius: 50
    },
    sectionStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 2,
      height: 60,
      borderRadius: 15,
      margin: 16
    },
    imageStyle: {
      padding: 10,
      margin: 5,
      height: 40,
      width: 40,
      resizeMode: 'stretch',
      alignItems: 'center'
    },
    imageSocial:{
        height: 50,
        width: 50,
        margin: 5,
        marginTop: 5
    },
    buttonText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',
     
    },
    LoginButton: {
        width: '90%',
        color: '#000',
        height: 55,
        marginLeft: 18,
        backgroundColor: '#000',
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
        
    },
    logTxt: {
      color: '#fff'
        
    },
    loginText:{
        textAlign: 'center',
        color: '#000'
    },
    Footer:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    socialDivider: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 3,
        marginTop: 20,
        color: '#000',
        textAlign: 'center'
    },
    ggSocial:{
      width: 50,
      height: 50,
    }
    
  });
  
  export default Login;