import React from 'react'
import Home from '../home/home';
import Play from '../play/Play';
import Chat from '../chat/Chat';
import Account from '../account/Account';
import { Image, Text, View } from 'react-native';
import Notification from '../notification/Notification';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

type IconName = 'home' | 'play' | 'message' | 'notification' | 'account';

const icons: Record<IconName, any> = {
    home: require('../../assets/images/home.png'),
    play: require('../../assets/images/play.png'),
    message: require('../../assets/images/message.png'),
    account: require('../../assets/images/account.png'),
    notification: require('../../assets/images/notification.png'),
}

const TabIcon = ({ name }: { name: IconName }) => {
    let w = 6;
    let h = 6;
    // (name === 'message' || name === 'notification') && (w = 7, h = 7)
    return <Image source={icons[name]} className={`w-${w} h-${h}`} />
}

const Main = () => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName: IconName;

                switch (route.name) {
                    case 'Home':
                        iconName = focused ? 'home' : 'home'
                        break;
                    case 'Play':
                        iconName = focused ? 'play' : 'play';
                        break;
                    case 'Chat':
                        iconName = focused ? 'message' : 'message';
                        break;
                    case 'Notification':
                        iconName = focused ? 'notification' : 'notification';
                        break;
                    default:
                        iconName = focused ? 'account' : 'account'
                }
                return <TabIcon name={iconName} />;
            },
            tabBarShowLabel: false,
            headerShown: false
        })}>
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Play' component={Play} />
            <Tab.Screen name='Chat' component={Chat} />
            <Tab.Screen name='Notification' component={Notification} />
            <Tab.Screen name='Account' component={Account} />
        </Tab.Navigator>
    )
}

export default Main;