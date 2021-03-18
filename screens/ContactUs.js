import React, { Component } from 'react';
import { Platform, Dimensions, View, Text, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Icon from '@expo/vector-icons/Ionicons';
import MapShow from '../MapShow';

class ContactUs extends Component{
    render(){
        return(
            <View style={{ flex: 1 }}>
                <View>
                    <MapShow/>
                </View>
                <View style={{ flex: 1, marginTop: 20 }}>
                    <Image
                        source={require('../assets/logo2.png')}
                        style={{ height: 50, width: 150, alignSelf: 'center', marginVertical: 20 }}
                    />
                    <View style={{ flexDirection:'row', justifyContent: 'center' }}>
                        <Image
                            source={require('../assets/navigate.png')}
                            style={{ height: 18, width: 18 }}
                        />
                        <Text style={{ marginLeft: 13 }}>Airmadidi, SULUT INDONESIA, 95371</Text>
                    </View>
                    <View style={{ flexDirection:'row', justifyContent: 'center' }}>
                        <Image
                            source={require('../assets/call.png')}
                            style={{ height: 18, width: 18 }}
                        />
                        <Text style={{ marginLeft: 13 }}>+62 431 891035</Text>
                    </View>
                    <View style={{ flexDirection:'row', justifyContent: 'center' }}>
                        <Image
                            source={require('../assets/fax.png')}
                            style={{ height: 18, width: 18 }}
                        />
                        <Text style={{ marginLeft: 13 }}>+62 431 891035</Text>
                    </View>
                    <View style={{ flexDirection:'row', justifyContent: 'center' }}>
                        <Image
                            source={require('../assets/mail.png')}
                            style={{ height: 18, width: 18 }}
                        />
                        <Text style={{ marginLeft: 13 }}>fik@unklab.ac.id</Text>
                    </View>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }}>
                    <View style={{ alignItems: 'center', marginHorizontal: 15 }}>
                        <Image
                            source={require('../assets/facebook.png')}
                            style={{ height: 40, width: 40 }}
                        />
                        <Text style={{ fontSize: 8 }}>facebook.com/unklabfik/</Text>
                    </View>
                    <View style={{ alignItems: 'center', marginHorizontal: 15 }}>
                        <Image
                            source={require('../assets/twitter.png')}
                            style={{ height: 40, width: 40 }}
                        />
                        <Text style={{ fontSize: 8 }}>twitter.com/FIK_UNKLAB/</Text>
                    </View>
                </View>
            </View>
        )
    }
}
 
const StackNavigator =  createStackNavigator({
    ContactUs: ContactUs
},{
    defaultNavigationOptions: ({ navigation }) => {
        return {
            headerLeft: (
                <Icon
                    style={{ paddingLeft: 10 }}
                    onPress={() => navigation.openDrawer()}
                    name="md-menu"
                    size={30}
                />
            ),
            headerTintColor: 'white',
            headerStyle: {
                borderBottomColor: 'transparent',
                backgroundColor: '#3575D3',
            },
            headerTitle: "Contact Us"
        }
  }
});

export default createAppContainer(StackNavigator);