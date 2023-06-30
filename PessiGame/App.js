import { StyleSheet, Text, View, } from 'react-native'
import React, { useEffect } from 'react'
import { AppContextProvider } from './src/context/AppContext'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from './src/context/AppNavigator'
import TestFirebase from './src/container/Test/TestFirebase'
import Game from './src/container/Game'
import Collection from './src/container/Collection'
import Prize from './src/container/Prize'
const App = () => {

  
  return (

    <AppContextProvider>
      <NavigationContainer>
        <AppNavigator></AppNavigator>
        {/* <Prize></Prize> */}
       {/* <Game></Game> */}
       {/* <TestFirebase></TestFirebase> */}
       {/* <Collection></Collection> */}
        
        {/* <Gift></Gift> */}
      </NavigationContainer>
    </AppContextProvider>

  )
}

export default App

