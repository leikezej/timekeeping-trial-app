import React from 'react';
import {SafeAreaView, Button, StyleSheet, View, Text, TextInput, Image, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';

// import Logo from '../assets/logo.png';

const Login = ({ navigation }) => {

    function navigate(){
        navigation.navigate('Register');
    } 
    return (
      <SafeAreaView style={{flex: 1}}>
      
      <View style={styles.TopView}>
                <Image 
                    style={styles.formLogo} 
                    source={{uri: 'https://i.postimg.cc/y8smt4yb/logo1.png'}} 
                />
            </View>

            <View style={styles.BottomView}>
            
                        <Text style={styles.formHeader}>
                                Login 
                                {/* {'\n'} 
                                Back!  */}
                            </Text>
                            <TouchableOpacity style={styles.logTxt} onPress={navigate}>
                                <Text style={styles.loginText}>Already Have An Account? Login Now!</Text>
                        </TouchableOpacity>
                        
                        <KeyboardAvoidingView>
                    <View style={styles.container}>
                              <View style={styles.sectionStyle}>
                                <Image
                                  source={{
                                    uri:
                                      'https://img.icons8.com/color/48/000000/user.png',
                                  }}
                                  style={styles.imageStyle}
                                />
                                <TextInput
                                  style={{flex: 1}}
                                  placeholder="Enter Your Name Here"
                                  underlineColorAndroid="transparent"
                                />
                              </View>
                              <View style={styles.sectionStyle}>
                                <Image
                                  source={{
                                  uri:
                                    'https://img.icons8.com/fluency/48/000000/password--v1.png',
                                    }}
                                  style={styles.imageStyle}
                                />
                                <TextInput
                                  style={{flex: 1}}
                                  placeholder="Enter Your Password"
                                  secureTextEntry={true}
                                  underlineColorAndroid="transparent"
                                />
                             
                            </View>
                    </View>   
                    </KeyboardAvoidingView>
                            <TouchableOpacity style={styles.LoginButton} onPress={navigate}>
                                      <Text style={styles.buttonText}>
                                       Login
                                      </Text>
                            </TouchableOpacity>
                                
                                <Text style={styles.socialDivider}>
                                    OR 
                                </Text>
                                
                              <View style={styles.Footer}>
                                 <Image
                                   source={{
                                    uri:
                                      'https://img.icons8.com/color/48/000000/google-logo.png',
                                     }}
                                  style={styles.imageSocial}
                                />
                                
                                <Image
                                   source={{
                                    uri:
                                      'https://img.icons8.com/color/48/000000/facebook-new.png',
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
                                      'https://img.icons8.com/external-prettycons-flat-prettycons/47/000000/external-sms-connections-prettycons-flat-prettycons.png',
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
      marginTop: 40,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 1,
    },
    TopView: {
        width: '100%',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    },
    formLogo: {
        width: '100%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'contain',
    },
    formHeader:{
        color: 'red',
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: 'center',
        fontStyle: 'italic',
        letterSpacing: 1,
    }, 
    BottomView: {
        width: '100%',
        height: '70%',
        backgroundColor: '#2f2f2f',
        borderTopLeftRadius:50,
        borderTopRightRadius: 50
    },
    sectionStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderWidth: 0.5,
      borderColor: '#000',
      height: 70,
      borderRadius: 10,
      margin: 10,
      fontSize: 20
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
        height: 60,
        width: 60,
        padding: 15,
        margin: 10
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
        color: '#fff'
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
        marginTop: 20,
        color: '#000',
        textAlign: 'center'
    }

  });
  
  export default Login;