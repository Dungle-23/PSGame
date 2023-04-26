import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import CheckBox from '@react-native-community/checkbox'



const OtpRegister = () => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
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
            <View style={[styles.viewText, { marginTop: -11 }]}>
                <Text style={[styles.txt, { fontSize: 24, fontWeight: '900', lineHeight: 29 }]}>ĐĂNG KÝ </Text>
                <TextInput style={[styles.input]} placeholder="Số điện thoại" keyboardType='numeric'></TextInput>
                <TextInput style={[styles.input, { marginTop: 0 }]} placeholder="Tên người dùng"></TextInput>
                <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: -10 }}>
                    <CheckBox disabled={false} value={toggleCheckBox} onValueChange={(newValue) => setToggleCheckBox(newValue)}></CheckBox>
                    <Pressable style={{ marginTop: 8 }}><Text style={[styles.txt,{fontSize:14,lineHeight:17}]}>Tôi đã đọc và đồng ý với <Text style={{ color: 'yellow', paddingTop: 12 }}>thể lệ chường trình</Text> </Text></Pressable>
                </View>
            </View>
            <Image source={require('../images/flower-2.png')} style={{position:'absolute',right:0,top:383}}/>
            <Image  source={require('../images/flower-3.png')} style={{position:'absolute',left:0,top:412}}/>
            <View style={{lineHeight:20,marginTop:70,alignItems:'center'}}>
                <Pressable><Image source={require('../images/OTP.png')}/></Pressable>
                <Pressable><Image source={require('../images/LG.png')} style={{marginTop:15}}/></Pressable>
            </View>
            <Image source={require('../images/left-bottom.png')} style={{position:'absolute',left:-10,top:530}}/>
            <Image source={require('../images/right-bottom.png')} style={{position:'absolute',right:0,top:479}}/>
        </View>
    )
}

export default OtpRegistern  

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
        paddingLeft: 12
    }
})