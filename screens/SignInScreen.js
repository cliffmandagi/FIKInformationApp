import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';

const SignInScreen = ({navigation}) => {
    const [data, setData] = React.useState({
        email: '',
        password: '',
    })

    return (
            <View style={styles.container}>
                <View style={{ marginBottom: 50 }}>
                    <Image source={require('../assets/logo2.png')} style={{ width: 220, height: 70 }}/>
                </View>
                <View style={styles.inputContainer}>
                <TextInput style={styles.inputs}
                    placeholder="Email"
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'/>
                <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/nolan/40/000000/email.png'}}/>
                </View>
                
                <View style={styles.inputContainer}>
                <TextInput style={styles.inputs}
                    placeholder="Password"
                    secureTextEntry={true}
                    underlineColorAndroid='transparent'
                    autoCapitalize="none"/>
                <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/nolan/40/000000/key.png'}}/>
                </View>

                <TouchableOpacity style={styles.btnForgotPassword} onPress={() => alert('Forgot')}>
                    <Text style={styles.btnText}>Forgot your password?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttonContainer, styles.signInButton]} onPress={() => alert('Login')}>
                    <Text style={styles.loginText, {fontWeight: 'bold', color:'white'}}>Sign In</Text>
                </TouchableOpacity>


                <TouchableOpacity style={[styles.buttonContainer, styles.signUpButton]} onPress={() => navigation.navigate('SignUpScreen')}>
                    <Text style={styles.btnText, {color: '#696969', fontWeight: 'bold' }}>Sign Up</Text>
                </TouchableOpacity>
        </View>
    )
}

export default SignInScreen;

const resizeMode = 'center';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    borderBottomWidth: 1,
    width:300,
    height:45,
    marginBottom:20,
    flexDirection: 'row',
    alignItems:'center',

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  inputs:{
    height:45,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginRight:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:300,
    borderRadius:30,
    backgroundColor:'#d9e3e9',
  },
  btnForgotPassword: {
    height:15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom:10,
    width:300,
    backgroundColor:'transparent'
  },
  signInButton: {
    backgroundColor: "#0c5aa8",

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.50,
    shadowRadius: 8,

    elevation: 12,
  },
  signUpButton: {
    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.50,
    shadowRadius: 8,

    elevation: 12,
  },
  loginText: {
    color: 'white',
  },
  bgImage:{
    flex: 1,
    resizeMode,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  btnText:{
    color:"gray",
    fontWeight:'bold'
  }
});