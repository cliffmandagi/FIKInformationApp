import { NavigationContainer } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';

import { AuthContext } from '../navigation/AuthProvider';
import database from '@react-native-firebase/database';
import { withRepeat } from 'react-native-reanimated';

const SignUpScreen = ({navigation}) => {
    const [id, setId] = useState();
    const [email, setEmail] = useState('a');
    const [password, setPassword] = useState('a');
    const [confirmPassword, setConfirmPassword] = useState('a');

    const {register} = useContext(AuthContext);

    return (
            <View style={styles.container}>
                <View>
                    <Text style={{ marginBottom: 30, fontSize: 27, fontWeight: 'bold', color: 'gray' }}>Create Your Account!</Text>
                </View>
                <View style={styles.inputContainer}>
                <TextInput style={styles.inputs}
                    placeholder="Email"
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'
                    onChangeText={(userEmail) => setEmail(userEmail)}
                    />
                <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/nolan/40/000000/email.png'}}/>
                </View>
                
                <View style={styles.inputContainer}>
                <TextInput style={styles.inputs}
                    placeholder="Password"
                    secureTextEntry={true}
                    underlineColorAndroid='transparent'
                    autoCapitalize="none"
                    onChangeText={(userPassword) => setPassword(userPassword)}
                    />
                <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/nolan/40/000000/key.png'}}/>
                </View>

                <View style={styles.inputContainer}>
                <TextInput style={styles.inputs}
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                    underlineColorAndroid='transparent'
                    autoCapitalize="none"
                    onChangeText={(confirmPass) => setConfirmPassword(confirmPass)}
                    />
                <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/nolan/40/000000/key.png'}}/>
                </View>

                <TouchableOpacity style={[styles.buttonContainer, styles.signInButton]} onPress={() => {
                    if(password == confirmPassword){
                        register(email, password)
                        // submitUser(id, email).then((result) => {
                        //   console.log('Result : ', result)
                        // }).catch((error) => {
                        //   console.log('Error : ', error)
                        // });
                    }
                    else{
                        alert("Password didn't match!")
                    }
                }}>
                    <Text style={styles.loginText, {fontWeight: 'bold', color:'white'}}>Sign Up</Text>
                </TouchableOpacity>

                <Text style={{ textAlign: 'center', marginHorizontal: 70, marginTop: 10, color: 'gray' }}>By clicking sign up button, you agree to our Terms and have read and acknowledge our Privacy Statement.</Text>
        </View>
    )
}

export default SignUpScreen;

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