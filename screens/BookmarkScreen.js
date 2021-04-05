import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ScrollView,
  Alert
} from 'react-native';

export default BookmarkScreen = ({navigation}) => {

      const data = [
        {id:1,  description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."},
        {id:2,  description:"Aenean massa. Cum sociis natoque penatibus et magnis."    },
        {id:3,  description:"nascetur ridiculus mus. Donec quam felis, ultricies dnec."},
        {id:4,  description:"Donec pede justo, fringilla vel, aliquet nec, vulputdate."},
        {id:5,  description:"Donec pede justo, fringilla vel, aliquet nec, vulputdate."},
      ]

    return (
        <View style={{ flex: 1 }}>
          <ScrollView>
            {data.map((item) => (
                <TouchableOpacity style={styles.card} onPress={() => {}} key={item.id}>
                  <View style={styles.cardContent}>
                    <Text style={[styles.description]}>{item.description}</Text>
                  </View>
                </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  tasks:{
    flex:1,
  },
  cardContent: {
    flex: 1,
    marginLeft:20,
    marginVertical:10,
  },
  image:{
    width:25,
    height:25,
  },

  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 8,

    marginVertical: 10,
    marginHorizontal:20,

    backgroundColor:"white",
    flexBasis: '46%',
    padding: 10,
    flexDirection:'row',
    borderLeftWidth:6,
    borderColor: '#f4cf08'
  },

  description:{
    fontSize:18,
    flex:1,
    color:"#008080",
    fontWeight:'bold',
  },
  date:{
    fontSize:14,
    flex:1,
    color:"#696969",
    marginTop:5
  },
}); 
