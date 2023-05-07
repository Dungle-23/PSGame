import { Image, Pressable, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import CheckBox from '@react-native-community/checkbox'
import { useNavigation } from '@react-navigation/native'



const Register = () => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const navigation = useNavigation()
    const login = () =>{
        navigation.navigate('SigIn'),
        console.log("Click")
    }
    return (
        <View style={styles.container}>
            <View style={[styles.cloud, { marginTop: -20 }]}>
                <Image source={require('../images/left-top.png')} />
                <Image source={require('../images/right-top.png')} />
            </View>
            <View style={[styles.viewText, { marginTop: -100 }]}>
                <Text style={[styles.txt, { fontSize: 12, fontWeight: '400', lineHeight: 22 }]}>Hey, mừng bạn đến với</Text>
                <Text style={[styles.txt, { fontSize: 20, fontWeight: '900', lineHeight: 36 }]}>Pepsi Tết</Text>
            </View>
            <Image source={require('../images/flower-1.png')} style={{ marginTop: 8 }} />
            <View style={[styles.viewText, { marginTop: -11 }]}>
                <Text style={[styles.txt, { fontSize: 24, fontWeight: '900', lineHeight: 29 }]}>ĐĂNG KÝ </Text>
                <TextInput style={[styles.input]} placeholder="Số điện thoại" keyboardType='numeric'></TextInput>
                <TextInput style={[styles.input, { marginTop: 0 }]} placeholder="Tên người dùng"></TextInput>
                <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: -10 }}>
                    <CheckBox style={{ marginTop: 5 }} disabled={false} value={toggleCheckBox} onValueChange={(newValue) => setToggleCheckBox(newValue)}></CheckBox>
                    <Pressable style={{ marginTop: 8 }} onPress={() => { navigation.navigate('Rules'), console.log("click") }}><Text style={[styles.txt, { fontSize: 9, lineHeight: 17 }]}>Tôi đã đọc và đồng ý với <Text style={{ color: 'yellow', paddingTop: 12 }}>thể lệ chường trình</Text> </Text></Pressable>
                </View>
            </View>
            <Image source={require('../images/flower-2.png')} style={{ position: 'absolute', right: 0, top: 473 }} />
            <Image source={require('../images/flower-3.png')} style={{ position: 'absolute', left: 0, top: 510 }} />
            <Image source={require('../images/left-bottom.png')} style={{ position: 'absolute', left: -10, top: 590 }} />
            <Image source={require('../images/right-bottom.png')} style={{ position: 'absolute', right: 0, top: 550 }} />
            <View style={{ lineHeight: 20, marginTop: 70, alignItems: 'center' }}>
                <Pressable onPress={()=>navigation.navigate('Otp')} >
                    <Image source={require('../images/OTP.png')} />
                </Pressable>
                <Pressable onPress={login} >
                <Image source={require('../images/LG.png')} style={{ marginTop: 15 }} />
                </Pressable>
            </View>
        </View>
    )
}

export default Register

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
        paddingLeft: 12
    }
})