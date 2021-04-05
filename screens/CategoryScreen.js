import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';

export default CategoryScreen = () => {
      const data = [
        {id:1, title: "General", image:"https://img.icons8.com/color/70/000000/cottage.png"},
        {id:2, title: "Category 2", image:"https://img.icons8.com/color/70/000000/administrator-male.png"},
        {id:3, title: "Category 3", image:"https://img.icons8.com/color/70/000000/filled-like.png"} ,
        {id:4, title: "Category 4", image:"https://img.icons8.com/color/70/000000/facebook-like.png"} ,
        {id:5, title: "Category 5", image:"https://img.icons8.com/color/70/000000/shutdown.png"} ,
      ]

    return (
      <View style={{ flex: 1}}>
        <ScrollView style={styles.list}>
          {data.map((item) => (
            <TouchableOpacity style={styles.card} onPress={() => {console.log('Test')}}key={item.id}>
              <View style={styles.cardFooter}></View>
              <Image style={styles.cardImage} source={{uri:item.image}}/>
              <View style={styles.cardHeader}>
                <View style={{alignItems:"center", justifyContent:"center"}}>
                  <Text style={styles.title}>{item.title}</Text>
                </View>
              </View>
          </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    )
  };

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor:"#E6E6E6",
  },
  listContainer:{
    alignItems:'center'
  },
  /******** card **************/
  card:{
    shadowColor: '#00000021',

    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    marginVertical: 10,
    backgroundColor:"white",
    flexBasis: '42%',
    marginHorizontal: 10,
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems:"center", 
    justifyContent:"center"
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage:{
    height: 70,
    width: 70,
    alignSelf:'center'
  },
  title:{
    fontSize:18,
    flex:1,
    alignSelf:'center',
    color:"#696969"
  },
});