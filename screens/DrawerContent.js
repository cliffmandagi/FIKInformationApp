import React from 'react';
import { View, Stylesheet, StyleSheet, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function DrawerContent(props) {
    
    const [isDarkTheme, setIsDarkTheme] = React.useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    }

    return (
        <View style={{ flex: 1 }}>
            <Drawer.Section>
                <View style={{ marginLeft: 20, marginVertical: 25 }}>
                    <Image source={require('../assets/logo2.png')} />
                </View>
            </Drawer.Section>
            <DrawerContentScrollView {...props}>
                <Drawer.Section>
                <DrawerItem
                    icon={({color, size}) => (
                        <Icon
                        name="home-outline"
                        color={color}
                        size={size}
                        />
                    )}
                    label="Home"
                    onPress={() => {}}
                />
                <DrawerItem
                    icon={({color, size}) => (
                        <Icon
                        name="book-outline"
                        color={color}
                        size={size}
                        />
                    )}
                    label="Category"
                    onPress={() => {}}
                />
                <DrawerItem
                    icon={({color, size}) => (
                        <Icon
                        name="bookmark-outline"
                        color={color}
                        size={size}
                        />
                    )}
                    label="Bookmark"
                    onPress={() => {}}
                />
                <DrawerItem
                    icon={({color, size}) => (
                        <Icon
                        name="calendar-outline"
                        color={color}
                        size={size}
                        />
                    )}
                    label="Schedule"
                    onPress={() => {}}
                />
                </Drawer.Section>
                <Drawer.Section title="Preferences">
                    <TouchableRipple onPress={() => {toggleTheme()}}>
                        <View style={styles.preference}>
                            <Caption style={{ fontSize: 14 }}>Dark Theme</Caption>
                            <View pointerEvents="none">
                                <Switch value={isDarkTheme}/>
                            </View>
                        </View>
                    </TouchableRipple>
                </Drawer.Section>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection, { justifyContent: 'center', alignSelf: 'center' }}>
                <Caption>Version 1.0.0</Caption>
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    }
});