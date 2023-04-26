import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import CheckBox from '@react-native-community/checkbox'



const OtpRegister = () => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    return (
        <View style={styles.container}>
            <View style={[styles.cloud, { marginTop: -20 }]}>
                <Image source={require('../images/left-top.png')} />
                <Image source={require('../images/right-top.png')} />
            </View>
            <View style={[styles.viewText, { marginTop: -100 }]}>
                <Text style={[styles.txt, { fontSize: 18, fontWeight: '400', lineHeight: 22 }]}>Hey, mừng bạn đến với</Text>
                <Text style={[styles.txt, { fontSize: 30, fontWeight: '900', lineHeight: 36 }]}>Pepsi Tết</Text>
            </View>
            <Image source={require('../images/flower-1.png')} style={{ marginTop: 8 }} />
            <View style={[styles.viewText, { marginTop: 21 }]}>

                <Text style={styles.txt}>
                    Xác minh OTP
                </Text>
                <Text style={[styles.txt,{marginBottom:30}]}>
                    Nhập mã OTP vừa được gửi về điện thoại của bạn
                </Text>
                <View style={{ flexDirection: 'row' }}>
                    <TextInput style={[styles.input, { marginTop: 0 }]} placeholder="-"></TextInput>
                    <TextInput style={[styles.input, { marginTop: 0 }]} placeholder="-"></TextInput>
                    <TextInput style={[styles.input, { marginTop: 0 }]} placeholder="-"></TextInput>
                    <TextInput style={[styles.input, { marginTop: 0 }]} placeholder="-"></TextInput>
                </View>
            </View>
            <Image source={require('../images/flower-2.png')} style={{ position: 'absolute', right: 0, top: 383 }} />
            <Image source={require('../images/flower-3.png')} style={{ position: 'absolute', left: 0, top: 412 }} />
            <View style={{ lineHeight: 20, marginTop: 20, alignItems: 'center' }}>
                <Pressable><Image source={require('../images/XD.png')}/></Pressable>
            </View>
            <Pressable style={{ marginTop: 8 }}><Text style={[styles.txt,{fontSize:14,lineHeight:17}]}>Bạn chưa nhận được mã? <Text style={{ color: 'yellow', paddingTop: 12 }}>Gửi lại mã</Text> </Text></Pressable>
            <Image source={require('../images/left-bottom.png')} style={{ position: 'absolute', left: -10, top: 530 }} />
            <Image source={require('../images/right-bottom.png')} style={{ position: 'absolute', right: 0, top: 479 }} />
        </View>
    )
}

export default OtpRegister

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3399FF',
        height: 1200,
        maxHeight: 1200
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
        textAlign: 'center',
        width: 44,
        height: 44
    }
})