import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const Stack = createNativeStackNavigator();

import Register from '../container/Register';
import OtpRegister from '../container/OtpRegister';
import Login from '../container/Login';
import Rules from '../container/Rules';
import HomePage from '../container/HomePage';
import Game from '../container/Game';
import Collection from '../container/Collection';



const Main = () =>{
    return(
        <Stack.Navigator initialRouteName='HomePage' screenOptions={{headerShown:false}}>
            <Stack.Screen name='HomePage' component={HomePage}/>
            <Stack.Screen name='Game' component={Game}/>
            <Stack.Screen name='Coll' component={Collection}/>
            <Stack.Screen name='SigIn' component={Login}/>
        </Stack.Navigator>
    )
}

const In = () =>{
    return(
        <Stack.Navigator initialRouteName='Register' screenOptions={{headerShown: false}}>
            <Stack.Screen name='Register' component={Register} />
            <Stack.Screen name='SigIn' component={Login}/>
            <Stack.Screen name='Rules' component={Rules}/>
            <Stack.Screen name='Otp' component={OtpRegister}/>
            <Stack.Screen name='Main' component={Main}/>
        </Stack.Navigator>
    )
}


const AppNavigator = () => {

    return (
        <>
            <In></In>
        </>
    )
}

export default AppNavigator