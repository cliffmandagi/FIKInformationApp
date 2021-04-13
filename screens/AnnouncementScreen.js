import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ScrollView,
  Alert
} from 'react-native';
import database from '@react-native-firebase/database';

export default AnnouncementScreen = ({navigation}) => {
      const [announcement, setAnnouncement] = useState({});
      const ref = database().ref('Announcement/')

      const announcementKey = Object.keys(announcement);

      useEffect(() => {
          ref.once('value', snapshot => {
              setAnnouncement(snapshot.val());
          })
      },[])

    return (
        <View style={{ flex: 1 }}>
          <ImageBackground source={require('../assets/backgroundimg.png')} style={{ flex: 1, resizeMode: "cover", justifyContent: "center" }}>
          <ScrollView>
            {announcementKey.map((item) => (
              <View style={styles.card} key={item}>
                <View style={styles.cardContent}>
                  <Text style={[styles.description]}>{announcement[item].Title}</Text>
                  <Text style={{ fontSize: 15, color: 'gray' }}>{announcement[item].Date}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
          </ImageBackground>
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
