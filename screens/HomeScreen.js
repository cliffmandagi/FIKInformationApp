import React, {useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import database from '@react-native-firebase/database';

import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';

const HomeScreen = ({navigation}) => {
  const [news, setNews] = useState({});
  const [refreshing, setRefreshing] = useState(false);
  const ref = database().ref('News/')

    const newsKey = Object.keys(news);

    const onRefresh = useCallback(() => {
      setRefreshing(true);

      ref.once('value', snapshot => {
        setNews(snapshot.val());
      })

      setRefreshing(false);
    }, []);

    useEffect(() => {
        ref.once('value', snapshot => {
            setNews(snapshot.val());
        })
    },[])

    const TestImage = (item) => {
      if(news[item].Image == null){
        return (
          <Image style={styles.cardImage} 
          source={require('../assets/NoImage.jpg')}/>
        )
      } else {
        return (
          <Image style={styles.cardImage} 
          source={{uri: `data:image/png;base64,${news[item].Image}`}}/>
        )
      }
    }

  return (
    <View style={{ flex: 1, backgroundColor:'#E6E6E6' }}>
      <View style={{ flex: 3 }}>
      <ScrollView showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
      >
      <View style={{ flex: 2 }}>
        <Swiper style={{ height: 200 }} showsPagination={true} loop={true} autoplay={true} autoplayTimeout={10}>
          <Image style={{ height: '100%', width: '100%' }} source={require('../assets/slider-1.jpg')}/>
          <Image style={{ height: '100%', width: '100%' }} source={require('../assets/slider-2.jpg')}/>
          <Image style={{ height: '100%', width: '100%' }} source={require('../assets/slider-3.jpg')}/>
        </Swiper>
        {/* <View>
          <Image style={{height: 180, width: null}} source={require('../assets/news3.jpg')}/>
        </View> */}
      </View>

        <Text style={{ fontSize: 18, fontWeight: "bold", marginLeft: 20, marginTop: 10 }}>News</Text>

        {newsKey.map((item) => (
          <TouchableOpacity style={styles.card} key={item}>
          {TestImage(item)}
            <View style={{ flex: 2, flexDirection: 'column', marginLeft: 10, justifyContent: 'center' }}>
              <View>
                <Text style={styles.title}>{news[item].Title}</Text>
                <Text style={styles.description}>{news[item].Date}</Text>
              </View>
            </View>
            <TouchableOpacity style={{ alignItems: 'flex-end', justifyContent: 'flex-end' , marginRight: 10, marginBottom: 10}}>
                <Icon name="ios-bookmark-outline" color='black' size={26} />
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
        
      </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
      flex:1,
    },
    list: {
      paddingHorizontal: 17,
      backgroundColor:"#E6E6E6",
    },
    separator: {
      marginTop: 10,
    },
    /******** card **************/
    card:{
      flexDirection: 'row',
      shadowColor: '#00000021',
      shadowOffset: {
        width: 2
      },
      shadowOpacity: 0.5,
      shadowRadius: 4,
      marginVertical: 8,
      backgroundColor:"white",
      marginHorizontal: 10,
      borderRadius: 10,
    },
    cardHeader: {
      paddingVertical: 17,
      paddingHorizontal: 16,
      borderTopLeftRadius: 1,
      borderTopRightRadius: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
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
      backgroundColor:"#EEEEEE",
    },
    cardImage:{
      flex: 1,
      height: 100,
      width: null,
      borderRadius: 10
    },
    /******** card components **************/
    title:{
      fontSize:19,
    }, 
    description:{
      fontSize:15,
      color:"#888",
      flex:1,
      marginTop:5,
      marginBottom:5,
    },
    time:{
      fontSize:13,
      color: "#808080",
      marginTop: 5
    },
    icon: {
      width:25,
      height:25,
    },
    iconData:{
      width:15,
      height:15,
      marginTop:5,
      marginRight:5
    },
    timeContainer:{
      flexDirection:'row'
    },
    /******** social bar ******************/
    socialBarContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      flex: 1
    },
    socialBarSection: {
      justifyContent: 'center',
      flexDirection: 'row',
      flex: 1,
    },
    socialBarlabel: {
      marginLeft: 8,
      alignSelf: 'flex-end',
      justifyContent: 'center',
    },
    socialBarButton:{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    /*********** Swiper ***************/
    wrapper: {},
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB'
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5'
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    }
  });
