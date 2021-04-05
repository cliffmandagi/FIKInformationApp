import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

export default NewsScreen = ({ route }) => {
    const { title, image, date, description, category } = route.params;
    return (
        <ScrollView>
          <View style={{ height: 250,  flex: 1, justifyContent: 'flex-end' }}>
            {image}
          </View>

          <View style={{ flex: 3, paddingHorizontal: 20, paddingTop: 20 }}>
              <Text style={styles.postTitle}>{title}</Text>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                  <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../assets/calendar.png')} style={{ height: 20, width: 20, marginTop: 9, marginRight: 5 }} />
                    <Text style={styles.date}>{date}</Text>
                  </View>
                  <View style={{ flex: 1, alignItems: 'flex-end' }}>
                    <Text style={styles.date}>Category : {category}</Text>
                  </View>
              </View>

              <Text style={styles.postDescription}>{description}</Text>
          </View>
      </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
    },
    header:{
        flex: 1,
        backgroundColor: "#00BFFF",
        height: 200,
    },
    headerTitle:{
      fontSize:30,
      color:"#FFFFFF",
    },
    name:{
      fontSize:22,
      color:"#FFFFFF",
      fontWeight:'600',
    },
    postContent: {
      flex: 1,
    },
    postTitle:{
      fontSize:26,
      fontWeight:'600',
    },
    postDescription:{
      fontSize:16,
      marginTop:15,
    },
    tags:{
      color: '#00BFFF',
      marginTop:10,
    },
    date:{
      color: '#696969',
      marginTop:10,
    },
    avatar: {
      width: 80,
      height: 80,
      borderRadius: 35,
      borderWidth: 4,
      borderColor: "#00BFFF",
    },
    profile:{
      flexDirection: 'row',
      marginTop:20
    },
  });