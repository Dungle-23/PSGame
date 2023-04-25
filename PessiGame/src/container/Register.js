import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import CheckBox from '@react-native-community/checkbox';

const Register = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cloud}>
                <Image source={require('../images/left-top.png')} />
                <Image source={require('../images/right-top.png')} />
            </View>
            <View style={[styles.viewText,{marginTop: -100}]}>
                <Text style={[styles.txt, {fontSize: 18,fontWeight: '400',lineHeight: 22}]}>Hey, mừng bạn đến với</Text>
                <Text style={[styles.txt,{fontSize:30,fontWeight:'900',lineHeight:36}]}>Pepsi Tết</Text>
            </View>
            <Image source={require('../images/flower-1.png')} style={{marginTop:15}}/>
            <View style={[styles.viewText,{marginTop:11}]}>
                <Text style={[styles.txt,{fontSize:24,fontWeight:'900',lineHeight:29}]}>ĐĂNG KÝ </Text>
                <TextInput style={[styles.input]} placeholder="Số điện thoại" keyboardType='numeric'></TextInput>
                <TextInput style={[styles.input,{marginTop:0}]} placeholder="Tên người dùng"></TextInput>
                <CheckBox></CheckBox>
            </View>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3399FF',
        height: 1200,
        margin: 3
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
    input:{
        backgroundColor:'white',
        margin:20,
        borderRadius:8,
        color:'black',
        paddingLeft:12
    }
})