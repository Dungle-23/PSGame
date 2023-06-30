import { StyleSheet, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import database from '@react-native-firebase/database';


const TestFirebase = () => {
  const [id, setID] = useState()
  const [score, setScore] = useState()
  const [image, setImage] = useState('')
  var anhPepsi = '';
  useEffect(() => {
    
    const ref = database().ref('/users/234/score');
    const listen = ref.on('value', snapshot => {
        console.log('User data: ', snapshot.val());
        setScore(snapshot.val())
      });
    return () => {
      ref.off('value',listen)
    }
  }, [])


  function addData() {
    database()
      .ref('/users/123')
      .set({
        name: 'Ada Lovelace',
        age: 31,
      })
      .then(() => console.log('Data set.'));
  }
  return (
    <View>
      {/* <Image source={{uri:image}}
        style={{ width: 300,minHeight:800 }} /> */}
      <TextInput />
      <TextInput />
      <TouchableOpacity onPress={() => {
        addData()
      }}><Text>Click</Text></TouchableOpacity>
    </View>
  )
}

export default TestFirebase

const styles = StyleSheet.create({})