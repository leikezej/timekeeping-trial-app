import React from 'react';
import {SafeAreaView, Button, ScrollView, StyleSheet, View, Text, TextInput, Image, TouchableOpacity} from 'react-native';

import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';

// import Logo from '../assets/logo.png';

const Register = ({ navigation }) => {

    function navigate(){
        navigation.navigate('Home');
    } 
    return (
      <SafeAreaView style={{flex: 1}}>
      
      <View style={styles.TopView}>
                <Image 
                    style={styles.formLogo} 
                    source={{uri: 'https://i.postimg.cc/8Cw4CsFw/Time-Keeper-logo2.png'}} 
                />
            </View>

            <ScrollView style={styles.BottomView}>
            
                        <Text style={styles.formHeader}>
                                Register 
                                {/* {'\n'} 
                                Back!  */}
                            </Text>
                            <TouchableOpacity style={styles.regTxt} onPress={navigate}>
                                <Text style={styles.registerText}>Already Have An Account? Login Now!</Text>
                        </TouchableOpacity>
                        
                        <KeyboardAvoidingView>
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
                                  style={{flex: 1}}
                                  placeholder="Full Name"
                                />
                              </View>
                <View style={styles.sectionStyle}>
                                <Image
                                  source={{
                                  uri:
                                    'https://img.icons8.com/ios/50/000000/email-sign.png',
                                    }}
                                  style={styles.imageStyle}
                                />
                                <TextInput
                                  style={{flex: 1}}
                                  placeholder="Email Address"
                                  secureTextEntry={true}
                                />
                            </View>
                <View style={styles.sectionStyle}>
                                <Image
                                  source={{
                                  uri:
                                    'https://img.icons8.com/ios/50/000000/cell-phone.png',
                                    }}
                                  style={styles.imageStyle}
                                />
                                <TextInput
                                  style={{flex: 1}}
                                  placeholder="Contact Number"
                                  secureTextEntry={true}
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
                                  style={{flex: 1}}
                                  placeholder="Enter Your Password"
                                  secureTextEntry={true}
                                />
                            </View>
                <View style={styles.sectionStyle}>
                                <Image
                                  source={{
                                  uri:
                                    'https://img.icons8.com/ios/50/000000/forgot-password.png',
                                    }}
                                  style={styles.imageStyle}
                                />
                                <TextInput
                                  style={{flex: 1}}
                                  placeholder="Confirm Password"
                                  secureTextEntry={true}
                                />
                            </View>
                    </View>   
                       </KeyboardAvoidingView>
                            <TouchableOpacity style={styles.RegisterButton} onPress={navigate}>
                                      <Text style={styles.buttonText}>
                                       Register
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
    </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
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
        marginTop: 5,
        // borderTopRightRadius: 90,
        borderTopLeftRadius: 120,
        borderBottomEndRadius: 120,
        // borderBottomStartRadius: 90
    },
    formLogo: {
        width: '100%',
        height: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'contain'
        
    },
    formHeader:{
        color: '#000',
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: 'center',
        letterSpacing: 1
    }, 
    BottomView: {
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        width: '100%',
        marginTop: 20,
        height: '75%',
        backgroundColor: '#c5c5c5',
    },
    sectionStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 2,
      height: 55,
      borderRadius: 10,
      margin: 12
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
    RegisterButton: {
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
    regTxt: {
      color: '#fff'
        
    },
    registerText:{
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
  
  export default Register;