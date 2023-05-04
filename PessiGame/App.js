import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Register from './src/container/Register'
import OtpRegister from './src/container/OtpRegister'
import Rules from './src/container/Rules'
import Login from './src/container/Login'
import HomePage from './src/container/HomePage'
import Game from './src/container/Game'
import Collection from './src/container/Collection'


const App = () => {

  // const Stack = createNativeStackNavigator()
  // const LoginStack = () => {
  //   <Stack.Navigator screenOptions={{ headerShown: false }}>
  //     <Stack.Screen name='Register' component={Register} />
  //     <Stack.Screen name='OtpRegister' component={OtpRegister} />
  //     <Stack.Screen name='Login' component={Login} />
  //     <Stack.Screen name='Rules' component={Rules} />

  //   </Stack.Navigator>
  //}
  return (

    // <NavigationContainer>
    //   <Stack.Navigator screenOptions={{ headerShown: false }}>
    //     <Stack.Screen name='Register' component={Register} />
    //     <Stack.Screen name='OtpRegister' component={OtpRegister} />
    //     <Stack.Screen name='Login' component={Login} />
    //     <Stack.Screen name='Rules' component={Rules} />

    //   </Stack.Navigator>
    // </NavigationContainer>
    
    <Collection></Collection>
    
  )
}

export default App

