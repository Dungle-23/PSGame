import { StyleSheet, Text, View, } from 'react-native'
import React, { useEffect } from 'react'
import { AppContextProvider } from './src/context/AppContext'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from './src/context/AppNavigator'

import firebase from 'firebase/app'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import HomePage from './src/container/HomePage'

const App = () => {

  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyCroiXWfQ6QbcLySJkwXVMAEviPnAQ9ok4",
      authDomain: "pepsi-game-764fa.firebaseapp.com",
      projectId: "pepsi-game-764fa",
      storageBucket: "pepsi-game-764fa.appspot.com",
      messagingSenderId: "839996812702",
      appId: "1:839996812702:web:38799f0bd58154a0e43a8f",
      measurementId: "G-Y9Y5V5B4PN"
    };
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app)
    console.log("\nConnect Succesful\n")
  }, []);

  return (

    <AppContextProvider>
      <NavigationContainer>
        <AppNavigator></AppNavigator>
        {/* <HomePage></HomePage> */}
      </NavigationContainer>
    </AppContextProvider>

  )
}

export default App

