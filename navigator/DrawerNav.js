import React, { Component } from 'react';
import { Platform, Dimensions, Text, View, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import {NavigationActions} from 'react-navigation';

import Home from '../screens/Home';
import Curriculum from '../screens/Curriculum';
import ContactUs from '../screens/ContactUs';
import AboutUs from '../screens/AboutUs';

class SideMenu extends Component {
    navigateToScreen = ( route ) =>(
        () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    })

  render() {
    return (
        <View style={styles.container}>
            <View style={{ height:200 }}>
                <ImageBackground source={require('../assets/drawerbackground2.jpg')} style={{flex: 1, width: 280, justifyContent: 'flex-end'}} >
                    <View style={{ marginLeft: 5}}>
                        <Image
                            source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar1.png'}}
                            style={{ width: 50, height: 50, borderRadius: 63, borderWidth: 1 }}
                        />
                        <Text style={{ color:'white', fontWeight: 'bold', marginTop: 8 }}>Mobile Programming</Text>
                        <Text style={{ color:'white', marginBottom: 10 }}>s217xxxx@student.unklab.ac.id</Text>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.screenContainer}>
                <TouchableOpacity onPress={this.navigateToScreen('Home')}>
                    <View style={{ backgroundColor: 'white', paddingVertical: 10, flexDirection: 'row'}}>
                        <Image
                            source={require('../assets/home.png')}
                            style={{ height: 21, width: 21, marginLeft: 10, }}
                        />
                        <Text style={{ marginLeft: 25 }}>Home</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.navigateToScreen('AboutUs')}>
                    <View style={{ backgroundColor: 'white', paddingVertical: 10, flexDirection: 'row'}}>
                        <Image
                            source={require('../assets/people.png')}
                            style={{ height: 21, width: 21, marginLeft: 10, }}
                        />
                        <Text style={{ marginLeft: 25 }}>About Us</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.navigateToScreen('Curriculum')}>
                    <View style={{ backgroundColor: 'white', paddingVertical: 10, flexDirection: 'row'}}>
                        <Image
                            source={require('../assets/calendar.png')}
                            style={{ height: 21, width: 21, marginLeft: 10, }}
                        />
                        <Text style={{ marginLeft: 25 }}>Curriculum</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.navigateToScreen('ContactUs')}>
                    <View style={{ backgroundColor: 'white', paddingVertical: 10, flexDirection: 'row'}}>
                        <Image
                            source={require('../assets/call.png')}
                            style={{ height: 21, width: 21, marginLeft: 10, }}
                        />
                        <Text style={{ marginLeft: 25 }}>Contact Us</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
  }
}

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
    drawerWidth: WIDTH*0.73
}

const DrawerNavigator =  createDrawerNavigator(
	{
        Home: Home,
        Curriculum: Curriculum,
        ContactUs: ContactUs,
        AboutUs: AboutUs
	},{
        contentComponent: SideMenu,
        DrawerConfig
    }
);

export default createAppContainer(DrawerNavigator);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#E6E6E6'
    },
    screenContainer: { 
        width: '100%',
    },
    screenStyle: {
        height: 30,
        marginTop: 2,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },
    screenTextStyle:{
        fontSize: 20,
        marginLeft: 20, 
        textAlign: 'center'
    },
    selectedTextStyle: {
        fontWeight: 'bold',
        color: '#00adff'
    },
    activeBackgroundColor: {
        backgroundColor: 'grey'
    }
});