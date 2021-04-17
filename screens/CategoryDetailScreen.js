import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  RefreshControl,
} from 'react-native';
import database from '@react-native-firebase/database';

const CategoryDetailScreen = ({navigation, route}) => {
  const {categoryPressed} = route.params;
  const [news, setNews] = useState({});
  const ref = database().ref('News/');
  const [refreshing, setRefreshing] = useState(false);

  const newsKey = Object.keys(news);

  useEffect(() => {
    ref.on('value', snapshot => {
      setNews(snapshot.val());
    });
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    ref.once('value', snapshot => {
      setNews(snapshot.val());
    });

    setRefreshing(false);
  }, []);

  const TestImage = item => {
    if (news[item].Img == null) {
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
          source={{uri: `data:image/png;base64,${news[item].Img}`}}
        />
      );
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#E6E6E6'}}>
      <View style={{flex: 3}}>
        <ImageBackground
          source={require('../assets/backgroundimg.png')}
          style={{flex: 1, resizeMode: 'cover', justifyContent: 'center'}}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                marginLeft: 20,
                marginTop: 10,
              }}>
              {categoryPressed}
            </Text>
            {newsKey.map(item => {
              if (news[item].Category == `${categoryPressed}`) {
                return (
                  <TouchableOpacity
                    style={styles.card}
                    key={item}
                    onPress={() =>
                      navigation.navigate('NewsCategory', {
                        title: news[item].Title,
                        date: news[item].Date,
                        description: news[item].Description,
                        image: news[item].Img,
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
    </View>
  );
};

export default CategoryDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    paddingHorizontal: 17,
    backgroundColor: '#E6E6E6',
  },
  separator: {
    marginTop: 10,
  },
  /******** card **************/
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
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
    backgroundColor: '#EEEEEE',
  },
  cardImage: {
    flex: 1,
    height: 100,
    width: null,
  },
  /******** card components **************/
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
  time: {
    fontSize: 13,
    color: '#808080',
    marginTop: 5,
  },
  icon: {
    width: 25,
    height: 25,
  },
  iconData: {
    width: 15,
    height: 15,
    marginTop: 5,
    marginRight: 5,
  },
  timeContainer: {
    flexDirection: 'row',
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
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
  socialBarButton: {
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
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
