import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import CheckBox from '@react-native-community/checkbox'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
            <View style={[styles.cloud,{marginTop:-20}]}>
                <Image source={require('../images/left-top.png')} />
                <Image source={require('../images/right-top.png')} />
            </View>
            <View style={[styles.viewText, { marginTop: -100 }]}>
                <Text style={[styles.txt, { fontSize: 18, fontWeight: '400', lineHeight: 22 }]}>Hey, mừng bạn đến với</Text>
                <Text style={[styles.txt, { fontSize: 30, fontWeight: '900', lineHeight: 36 }]}>Pepsi Tết</Text>
            </View>
            <Image source={require('../images/flower-1.png')} style={{ marginTop: 8 }} />
            <View style={[styles.viewText, { marginTop: -23 }]}>
                <Text style={[styles.txt, { fontSize: 24, fontWeight: '900', lineHeight: 29 }]}>ĐĂNG NHẬP </Text>
                <Text style={[{color:'white',marginLeft: 20,fontSize:14,fontWeight:'900',lineHeight:17,marginTop:12,marginBottom:-10}]} >Số điện thoại</Text>
                <TextInput style={[styles.input]} placeholder="Số điện thoại" keyboardType='numeric'></TextInput>
            </View>
            <Image source={require('../images/pepsi.png')} style={{height:150,width:150,marginStart:100}}/>
            <Image source={require('../images/flower-2.png')} style={{position:'absolute',right:0,top:383}}/>
            <Image  source={require('../images/flower-3.png')} style={{position:'absolute',left:0,top:412}}/>
        
            <Image source={require('../images/left-bottom.png')} style={{position:'absolute',left:-10,top:600}}/>
            <Image source={require('../images/right-bottom.png')} style={{position:'absolute',right:0,top:550}}/>
            <View style={{lineHeight:20,marginTop:10,alignItems:'center'}}>
                <Pressable onPress={()=>navigation.navigate('Otp')}><Image source={require('../images/OTP.png')}/></Pressable>
                <Pressable onPress={()=>navigation.goBack()} ><Image source={require('../images/RG.png')} style={{marginTop:15}}/></Pressable>
            </View>
           
            
        </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3399FF',
        height: 1200,
        maxHeight:1200
    },
    cloud: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    viewText: {
        flexDirection: 'column',

    },
    txt: {
        textAlign: 'center',
        color: 'white',
    },
    input: {
        backgroundColor: 'white',
        margin: 20,
        borderRadius: 8,
        color: 'black',
        paddingLeft: 12,
        gap:10,
        height:50,
    }
})