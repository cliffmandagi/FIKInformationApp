import React, { Component } from 'react';
import { Platform, Dimensions, View, Text, Image, ScrollView, ImageBackground } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Icon from '@expo/vector-icons/Ionicons';
import MapShow from '../MapShow';

class AboutUs extends Component{
    render(){
        return(
            <View style={{ flex: 1 }}>
                <ImageBackground source={require('../assets/backgroundimg.png')} style={{ width: '100%', height: '100%' }}>
                    <ScrollView>
                        <View style={{ alignContent: 'center', alignItems: 'center' }}>
                            <Image
                                source={require('../assets/slider-1.jpg')}
                                style={{ height: 200, width: 350, }}
                            />
                        </View>
                        <View style={{ marginTop: 30, marginBottom: 30, marginHorizontal: 30  }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 23, marginBottom: 15 }}>VISI</Text>
                            <Text style={{ fontSize: 13, fontWeight: 'normal' }}>Menjadi fakultas ilmu komputer yang unggul dan terkemuka di Indonesia Timur dalam penyelenggaraan Pendidikan, Penelitian dan Pengabdian Masyarakat dalam bidang penguasaan teknologi informasi dan sistem informasi yang berlandaskan keimanan yang kuat kepada Tuhan sehingga menciptakan tenaga kerja yang cerdas, kreatif, jujur, disiplin, bertanggungjawab dan takut akan Tuhan.</Text>
                        </View>
                        <View style={{ marginBottom: 30, marginHorizontal: 30  }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 23, marginBottom: 15 }}>MISI</Text>
                            <Text style={{ fontSize: 13, fontWeight: 'normal' }}>Mengembangkan dan meningkatkan kualitas dosen, mahasiswa maupun lulusannya dalam penelitian dasar dan aplikasinya yang mendukung pengembangan teknologi informasi dan sistem informasi dalam meningkatkan kesejahteraan umat manusia, dengan cara melaksanakan tri darma perguruan tinggi.</Text>
                        </View>
                        <View style={{ marginBottom: 100, marginHorizontal: 30  }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 23, marginBottom: 15 }}>TUJUAN</Text>
                            <Text style={{ fontSize: 13, fontWeight: 'normal', marginBottom: 10 }}>Agar lulusan Fakultas Ilmu Komputer:</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <View>
                                    <Text style={{ fontSize: 13, fontWeight: 'normal' }}>1.</Text>
                                    <Text style={{ fontSize: 13, fontWeight: 'normal' }}>2.</Text>
                                    <Text style={{ fontSize: 13, fontWeight: 'normal' }}>3.</Text>
                                    <Text style={{ fontSize: 13, fontWeight: 'normal' }}>4.</Text>
                                    <Text style={{ fontSize: 13, fontWeight: 'normal' }}>5.</Text>
                                    <Text style={{ fontSize: 13, fontWeight: 'normal' }}>6.</Text>
                                </View>
                                <View style={{ marginLeft: 8 }}>
                                    <Text style={{ fontSize: 13, fontWeight: 'normal' }}>Mempunyai jiwa melayani</Text>
                                    <Text style={{ fontSize: 13, fontWeight: 'normal' }}>Memiliki pengetahuan dan ketrampilan dalam bidang teknologi komputer</Text>
                                    <Text style={{ fontSize: 13, fontWeight: 'normal' }}>Mampu bekerjasama dengan dalam sebuah tim kerja</Text>
                                    <Text style={{ fontSize: 13, fontWeight: 'normal' }}>Mempunyai jiwa wirausaha dan bekerja mandiri</Text>
                                    <Text style={{ fontSize: 13, fontWeight: 'normal' }}>Dapat menyesuaikan diri dengan perkembangan teknologi komputer</Text>
                                    <Text style={{ fontSize: 13, fontWeight: 'normal' }}>Mempunyai perilaku disiplin, jujur, bertanggungjawab dan integritas iman yang kuat.</Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </ImageBackground>
            </View>
        )
    }
}
 
const StackNavigator =  createStackNavigator({
    AboutUs: AboutUs
},{
    defaultNavigationOptions: ({ navigation }) => {
        return {
            headerLeft: (
                <Icon
                    style={{ paddingLeft: 10 }}
                    onPress={() => navigation.openDrawer()}
                    name="md-menu"
                    size={30}
                />
            ),
            headerTintColor: 'white',
            headerStyle: {
                borderBottomColor: 'transparent',
                backgroundColor: '#3575D3',
            },
            headerTitle: "About Us"
        }
  }
});

export default createAppContainer(StackNavigator);