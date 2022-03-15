import React from 'react';
import { View, Text } from 'react-native';
import Tracks from '../assets/images/lify.svg';
import Time from '../assets/icons/date-reminder.png';

import AuthStack from '../navigation/AuthStack';
import { TouchableOpacity } from 'react-native-gesture-handler';

const OnboardingScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
        <View style={{marginTop: 20}}>
            <Text style={{
                fontFamily: 'Inter-Bold',
                fontWeight: 'bold',
                fontSize: 30,
                color: '#696969'
            }}>Lets Start</Text>
        </View>
        
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Tracks 
                width={300}
                height={300}
                style={{transform: [{rotate: '-15deg'}]}}
            />
        </View>
        <TouchableOpacity
            style={{
                backgroundColor: '#5c5c5c',
                padding: 20,
                width: '90%',
                borderRadius: 10,
                marginBottom: 50,
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}
                onPress={() => navigation.navigate('Login')}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 18,
                    textAlign: 'center',
                    fontWeight:  'bold',
                    fontFamily: 'Roboto-MediumItalic',
                }}>
                Let's GO
                </Text>
                <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default OnboardingScreen;