import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomePage = () => {
  return (
    <View style={[styles.container]}>
      <View>
        <Image source={require('../images/1.png')} style={[{ marginLeft: -20 }]} />
        <Image source={require('../images/2.png')} style={[{ position: 'absolute', left: 68 }]} />
        <Image source={require('../images/half-flower.png')} style={[{ position: 'absolute', left: 0 }]} />
        <Image source={require('../images/flower-1-main.png')} style={[{ position: 'absolute', left: 70, top: 75 }]} />
        <Image source={require('../images/flower-2-main.png')} style={[{ position: 'absolute', left: 170, }]} />
        <Image source={require('../images/right-top-main.png')} style={[{ position: 'absolute', right: 0, top: 105 }]} />
        <Pressable><Image source={require('../images/back.png')} style={[{ position: 'absolute', right: 20, top: -450 }]} /></Pressable>
      </View>
      <Image source={require('../images/DauLan.png')} style={[{ position: 'absolute', left: 70, top: 160 }]} />
      <View style={{marginTop:-110,alignItems:'center'}}>
        <Pressable><Text style={[styles.txt,{color:'yellow',fontWeight:'900',lineHeight:22,fontSize:14}]}>Hướng dẫn</Text></Pressable>
        <Pressable><Image source={require('../images/button-1-main.png')} style={[{}]} /></Pressable>
        <Pressable><Image source={require('../images/button-qr-main.png')} style={[{}]} /></Pressable>
        <Pressable><Image source={require('../images/button-gar-main.png')} style={[{}]} /></Pressable>
        <Pressable><Image source={require('../images/button-detail-main.png')} style={[{}]} /></Pressable>
      </View>
      <Image source={require('../images/bottom-main.png')} style={[{position:'absolute',top:370}]} />
      <Image source={require('../images/trong.png')} style={[{position:'absolute',bottom:420,left:90}]} />
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3399FF',
    height: 1200,
    maxHeight: 1200
  },
  txt: {
    textAlign: 'center',
    color: 'white',
},
})