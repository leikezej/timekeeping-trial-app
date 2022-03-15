import React from 'react';
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CustomDrawer = props =>  {
    return (
        <View style={{flex: 1}}>
                <DrawerContentScrollView
                    {...props} 
                    contentContainerStyle={{backgroundColor: '#696969'}}>
                <ImageBackground
                    source={require('../assets/icons/menu.png')}
                    style={{padding: 20}}
                    >  
                        <Image source={require('../assets/icons/Profile1.png')}
                        style={{height: 80, width: 80, borderRadius:40, marginBottom: 10}}
                        />
                        
                    <Text style={{color: '#fff', fontSize:18, fontFamily:'Roboto-Medium'}}> hahahaha</Text>              
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{color: '#fff', fontSize:18, fontFamily:'Roboto-Regular'}}> 10000 Coins </Text>
                            <FontAwesome5 name="coins" size={14} color="#fff" />
                            {/* <Icon color=[color] size={size} name={focused ? 'heart' : 'heart-outline'} /> 
                                activeTintColor
                                inactiveTintColor
                                activeBackgroundColor
                                inactiveBackgroundColor
                    */}
                </View>
                </ImageBackground>
                
                <View style={{flex: 1,  backgroundColor: '#fff', paddingTop:10}}> 
                    <DrawerItemList {...props} />
                </View>
        </DrawerContentScrollView>
            <View style={{padding:20, borderTopWidth:1, borderTopColor:'#ccc'}}>
                <TouchableOpacity onPress={()=>{}} style={{paddingVertical:15}}>
                    <View style={{flexDirection: 'row', alignItems:'center'}}>
                    <Ionicons name="share-social-outline" size={22} />
                        <Text style={{
                            fontSize: 15, 
                            fontFamily: 'Roboto', 
                            marginLeft: '5',
                        }}>
                            MY CUSTOM CUSTOM
                        </Text>
                    </View> 
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{}} style={{paddingVertical:15}}>
                    <View style={{flexDirection: 'row', alignItems:'center'}}>
                    <Ionicons name="exit-outline" size={22} />
                    <ion-icon size={22} color={color} name="exit-outline"></ion-icon>
                        <Text style={{
                            fontSize: 15, 
                            fontFamily: 'Roboto', 
                            marginLeft: '5',
                        }}>
                            SIGN OUT
                        </Text>
                    </View> 
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CustomDrawer;