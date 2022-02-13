import React from 'react';
import { View, StyleSheet, Text, Image, Button, Styles, ScrollView, TextInput, TouchableOpacity } from 'react-native';

import { Neomorph } from 'react-native-neomorph-shadows';
import { Shadow } from 'react-native-neomorph-shadows';
// import Logo from '../assets/logo.png';

import BackIcon from 'react-native-vector-icons/Feather';

const Register = ({ navigation }) => {

    function navigate(){
        navigation.navigate('Login');
    }
    
    return (
        
       <View style={styles.mainView}>
       
       
            <View style={styles.TopView}>
                <Image 
                    style={styles.formLogo} 
                    source={{uri: 'https://i.postimg.cc/y8smt4yb/logo1.png'}} 
                />
            </View>
            
            <ScrollView style={styles.BottomView}>
                 <BackIcon onPress={navigate} style={styles.back} name="chevron-left" size={30} color={'#fff'}/>
                <Text style={styles.formHeader}>
                    Register 
                    {/* {'\n'} 
                    Back!  */}
                </Text>
                
                <TouchableOpacity style={styles.regTxt} onPress={navigate}>
                                <Text style={styles.registerText}>Already Have An Account? Login Now!</Text>
                        </TouchableOpacity>
                        <View style={styles.FormView}>
                           <TextInput 
                                type="text" 
                                placeholderTextColor={"#fff"}
                                placeholder="Full Name*" 
                                style={styles.TextInput}/>
                           <TextInput 
                                type="email" 
                                placeholderTextColor={"#fff"}
                                placeholder="Email*" 
                                style={styles.TextInput}/>
                            <TextInput 
                                type="number" 
                                placeholderTextColor={"#fff"}
                                placeholder="Contact Number*" 
                                style={styles.TextInput}/>
                             <TextInput 
                                type="password" 
                                placeholderTextColor={"#fff"}
                                secureTextEntry={true}
                                placeholder="Password*" 
                                style={styles.TextInput}/>
                           <TextInput 
                                type="password" 
                                placeholderTextColor={"#fff"}
                                placeholder="Confirm Password*"
                                secureTextEntry={true}
                                style={styles.TextInput}/>
                                
                                <TouchableOpacity style={styles.touchable}>
                                    <Text style={styles.texts}>
                                        Register
                                    </Text>
                                </TouchableOpacity>
                                <Text> Register Using </Text>
                        </View>
             </ScrollView>
       </View>
          
    )
};

const styles = StyleSheet.create({
    mainView:{
        marginTop: 5,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
        
    },
    back: {
        marginTop: 20,
        paddingLeft: 5
    },
    TopView: {
        width: '100%',
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        // marginTop: 30
    },
    regInput: {
        textAlign: 'center',
        color: '#fff'
    },  
    BottomView: {
        marginTop: 0,
        width: '100%',
        height: '80%',
        backgroundColor: '#2f2f2f',
        borderTopLeftRadius:30,
        borderTopRightRadius: 30
    },
    formLogo: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'contain',
    },
    formHeader:{
        marginTop: 0,
        color: 'red',
        fontWeight: 'bold',
        fontSize: 45,
        textAlign: 'center',
        fontStyle: 'italic',
        letterSpacing: 1,
    }, 
    FormView:{
        // backgroundColor: '#000',
        width: '100%',
        height: '45%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 5
    
    },
    TextInput: {
        width: '90%',
        color: '#eee',
        borderWidth: 1,
        height: 60,
        borderColor: '#fff',
        paddingLeft: 5,
        borderRadius: 10,
        marginTop: 30
    },
    touchable:{
        width: '90%',
        color: '#eee',
        height: 55,
        backgroundColor: '#fff',
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    },
    texts:{
        fontWeight: 'bold',
        fontSize: 18
    },
    regTxt:{
        alignItems: 'center'
    },
    registerText: {
        alignItems: 'center',
        color: '#fff'
    },
   
});

export default Register;