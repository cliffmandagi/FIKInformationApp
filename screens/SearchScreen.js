import React, {useState, useEffect, Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import database from '@react-native-firebase/database';

export default (SearchScreen = ({navigation}) => {
  const [news, setNews] = useState({});
  const ref = database().ref('News/');

  const [searchKey, setSearchKey] = useState('');

  const newsKey = Object.keys(news);

  useEffect(() => {
    ref.on('value', snapshot => {
      setNews(snapshot.val());
    });
  }, []);

  const TestImage = item => {
    if (news[item].Image == null) {
      return (
        <Image
          style={styles.cardImage}
          source={require('../assets/NoImage.jpg')}
        />
      );
    } else {
      return (
        <Image
          style={styles.cardImage}
          source={{uri: `data:image/png;base64,${news[item].Image}`}}
        />
      );
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/backgroundimg.png')}
        style={{flex: 1, resizeMode: 'cover', justifyContent: 'center'}}>
        <View style={styles.formContent}>
          <View style={styles.inputContainer}>
            <Image
              style={[styles.icon, styles.inputIcon]}
              source={{
                uri: 'https://img.icons8.com/search/androidL/100/2ecc71',
              }}
            />
            <TextInput
              style={styles.inputs}
              placeholder="Search"
              underlineColorAndroid="transparent"
              onChangeText={text => setSearchKey(text.toLowerCase())}
            />
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {newsKey.map(item => {
            if (
              news[item].Title.toLowerCase().includes(searchKey) ||
              news[item].Category.toLowerCase().includes(searchKey) ||
              news[item].Date.toLowerCase().includes(searchKey)
            ) {
              return (
                <TouchableOpacity
                  style={styles.card}
                  key={item}
                  onPress={() =>
                    navigation.navigate('News', {
                      title: news[item].Title,
                      date: news[item].Date,
                      description: news[item].Description,
                      image: TestImage(item),
                      category: news[item].Category,
                    })
                  }>
                  <View style={{flex: 1, borderRadius: 10, margin: 4}}>
                    {TestImage(item)}
                  </View>
                  <View
                    style={{
                      flex: 2,
                      flexDirection: 'column',
                      marginLeft: 10,
                      justifyContent: 'center',
                    }}>
                    <View>
                      <Text style={styles.title}>{news[item].Title}</Text>
                      <View style={{flex: 1, flexDirection: 'row'}}>
                        <Image
                          source={require('../assets/calendar.png')}
                          style={{height: 18, width: 18, marginRight: 4}}
                        />
                        <Text
                          style={{fontSize: 12, color: '#888', marginTop: 1}}>
                          {news[item].Date}
                        </Text>
                      </View>
                      <Text style={styles.description}>
                        Category : {news[item].Category}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }
          })}
        </ScrollView>
      </ImageBackground>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB',
  },
  card: {
    flexDirection: 'row',
    shadowColor: '#00000021',
    shadowOffset: {
      width: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 4,
    backgroundColor: 'white',
    marginHorizontal: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 19,
  },
  description: {
    fontSize: 15,
    color: '#888',
    flex: 1,
    marginTop: 5,
    marginBottom: 5,
  },
  cardImage: {
    flex: 1,
    height: 100,
    width: null,
  },
  formContent: {
    flexDirection: 'row',
    marginTop: 10,
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    margin: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  iconBtnSearch: {
    alignSelf: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    marginLeft: 15,
    justifyContent: 'center',
  },
  saveButton: {
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    width: 70,
    alignSelf: 'flex-end',
    backgroundColor: '#0c5aa8',
    borderRadius: 30,
  },
  saveButtonText: {
    color: 'white',
  },
  notificationList: {
    marginTop: 20,
    padding: 10,
  },
  notificationBox: {
    padding: 20,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    borderRadius: 10,
  },
  image: {
    width: 45,
    height: 45,
  },
});
