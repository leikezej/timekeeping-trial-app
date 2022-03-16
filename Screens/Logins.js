import React from 'react';
import {SafeAreaView, Button, StyleSheet, View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
// import { Shadow, Neomorph } from 'react-native-neomorph-shadows';

import { NeuView, NeuButton, NeuInput   } from 'react-native-neu-element';

import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';

// import Logo from '../assets/logo.png';

const Login = ({ navigation }) => {

    function navigate(){
        navigation.navigate('Register');
    } 
    return (
      <SafeAreaView style={{flex: 1}}>
      
      {/* <View style={styles.TopView}>
                <Image 
                    style={styles.formLogo} 
                    source={{uri: 'https://i.postimg.cc/8Cw4CsFw/Time-Keeper-logo2.png' }} 
                />
            </View> */}

            <View style={styles.BottomView}>
            
                        <Text style={styles.formHeader}>
                                Login 
                                {/* {'\n'} 
                                Back!  */}
                            </Text>
                            <TouchableOpacity style={styles.logTxt} onPress={navigate}>
                                <Text style={styles.loginText}>Don't Have An Account Yet? Register Now!</Text>
                        </TouchableOpacity>
                        
                        <KeyboardAvoidingView>
                    <View style={styles.container}>
                              <View style={styles.sectionStyles}>
                              <NeuInput
                                      color={'#eef2f9'}
                                      width= {350}
                                      height={55}
                                      borderRadius={16} 
                                      borderColor={'#ffffff'}
                                      placeholder={'Username or Email'}
                                      style={{marginTop: 30, marginBottom: 30}}
                                    />
                              </View>
                              
                                <View style={styles.sectionStyles}>
                                 <NeuInput
                                      color={'#eef2f9'}
                                      width= {350}
                                      height={55}
                                      borderRadius={16} 
                                      borderColor={'#ffffff'}
                                      placeholder={'Password *****'}
                                      style={{marginBottom: 30}}
                                    />  
                             
                               </View>
                    </View>   
                    </KeyboardAvoidingView>
                    
                              <NeuButton
                               onPress={navigate}
                                  color={'#eef2f9'}
                                  width={200}
                                  height={50}
                                  borderRadius={16}
                                  // justifyContent={'center'}
                                  style={{marginLeft: 90, marginTop: 50}}>
                        
                                <TouchableOpacity style={styles.RegisterButton} onPress={navigate}>
                                  </TouchableOpacity>
                                      <Text style={styles.buttonText}>
                                        Login
                                      </Text>
                              </NeuButton>  
                              

                                      
                                <Text style={styles.socialDivider}>
                                    OR Use
                                </Text>
                                
                              <View style={styles.Footer}>
                                 <Image
                                   source={{
                                    uri:
                                     'https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-email-cyber-security-kiranshastry-gradient-kiranshastry-2.png',
                                     }}
                                  style={styles.ggSocial}
                                />
                                
                                <Image
                                   source={{
                                    uri:
                                      'https://img.icons8.com/color-glass/48/000000/facebook-new.png',
                                     }}
                                  style={styles.imageSocial}
                                />
                                
                                <Image
                                   source={{
                                    uri:
                                      'https://img.icons8.com/color/48/000000/github--v1.png',
                                     }}
                                  style={styles.imageSocial}
                                />
                                <Image
                                   source={{
                                    uri:
                                      'https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-email-advertising-kiranshastry-gradient-kiranshastry-1.png',
                                     }}
                                  style={styles.imageSocial}
                                />
                        </View>
                    </View>
            </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      // marginTop: 30,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 1,
      backgroundColor: '##e0e5ec'
    },
    TopView: {
        width: '100%',
        height: '25%',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        backgroundColor: '##e0e5ec',
        // marginTop: 8,
        // // borderRadius: 50,
        // borderTopRightRadius: 120,
        // borderBottomStartRadius: 120
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
        fontWeight: 'bold',
        fontSize: 40,
        color: '#000',
        fontFamily: 'Poppins sans-serif',
        textAlign: 'center',
        letterSpacing: 1
    }, 
    BottomView: {
        width: '100%',
        // marginTop: 10,
        height: '75%',
        backgroundColor: '##ebf5fc',
        // borderTopLeftRadius:50,
        // borderTopRightRadius: 50
    },
    sectionStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 2,
      borderColor: '##ebf5fc',
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
        color: '#000',
     
    },
    LoginButton: {
        width: '50%',
        height: 55,
        marginLeft: 95,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        shadowOffset: {width: 10, height: 10},
        shadowOpacity: 1,
        borderRadius: 20,
        backgroundColor: '#ebf5fc',

    },
    loginText:{
        textAlign: 'center',
        color: '#000'
    },
    logTxt: {
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