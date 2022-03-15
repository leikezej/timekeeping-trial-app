import React from 'react';
import {SafeAreaView, Button, StyleSheet, View, Text, TextInput, Image, TouchableOpacity} from 'react-native';

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
                                Register 
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
                                    'https://img.icons8.com/ios/50/000000/lock--v2.png',
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
                                    'https://img.icons8.com/ios/50/000000/lock--v2.png',
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
                                    'https://img.icons8.com/ios/50/000000/lock--v2.png',
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
                            <TouchableOpacity style={styles.LoginButton} onPress={navigate}>
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
                    </View>
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
        marginTop: 5,
        // borderRadius: 50,
        borderTopRightRadius: 80,
        borderBottomStartRadius: 80
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
        fontStyle: 'bold',
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
  
  export default Login;import React from 'react';
  import {SafeAreaView, Button, StyleSheet, View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
  
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
                                  Register 
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
                                      'https://img.icons8.com/ios/50/000000/lock--v2.png',
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
                                      'https://img.icons8.com/ios/50/000000/lock--v2.png',
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
                                      'https://img.icons8.com/ios/50/000000/lock--v2.png',
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
                              <TouchableOpacity style={styles.LoginButton} onPress={navigate}>
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
                      </View>
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
          marginTop: 5,
          // borderRadius: 50,
          borderTopRightRadius: 80,
          borderBottomStartRadius: 80
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
          fontStyle: 'bold',
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