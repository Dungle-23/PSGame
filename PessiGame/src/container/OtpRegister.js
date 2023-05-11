import { Alert, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState,useRef } from 'react'
import CheckBox from '@react-native-community/checkbox'
import { useNavigation } from '@react-navigation/native'
import OTPInputView from "@twotalltotems/react-native-otp-input";


const OtpRegister = ({
    route: { params: { isOtp },
    },
}) => {
    const firstInput = useRef();
    const secondInput = useRef();
    const thirdInput = useRef();
    const fourthInput = useRef();
    const [otpIP,setotpIP] = useState({1:'',2:'',3:'',4:''})
    const navigation = useNavigation()
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
            <View style={[styles.viewText, { marginTop: 11 }]}>

                <Text style={styles.txt}>
                    Xác minh OTP
                </Text>
                <Text style={[styles.txt, { marginBottom: 30 }]}>
                    Nhập mã OTP vừa được gửi về điện thoại {isOtp} của bạn
                </Text>
                <View style={{ flexDirection: 'row' }}>
                    <TextInput style={[styles.input, { marginTop: 0 }]} placeholder="-" keyboardType='number-pad' maxLength={1} ref={firstInput}
                    onChangeText={(text)=>{
                        setotpIP({...otpIP,1:text});
                        text && secondInput.current.focus()
                    }}/>
                    <TextInput style={[styles.input, { marginTop: 0 }]} placeholder="-" keyboardType='number-pad' maxLength={1} ref={secondInput}
                    onChangeText={(text)=>{
                        setotpIP({...otpIP,2:text});
                        text ? thirdInput.current.focus() : firstInput.current.focus()
                    }}/>
                    <TextInput style={[styles.input, { marginTop: 0 }]} placeholder="-" keyboardType='number-pad' maxLength={1} ref={thirdInput}
                    onChangeText={(text)=>{
                        setotpIP({...otpIP,3:text});
                        text ? fourthInput.current.focus():secondInput.current.focus()
                    }}
                    />
                    <TextInput style={[styles.input, { marginTop: 0 }]} placeholder="-" keyboardType='number-pad' maxLength={1} ref={fourthInput}
                    onChangeText={(text)=>{
                        setotpIP({...otpIP,4:text});
                        !text && thirdInput.current.focus()
                    }}/>
                    {/* <OTPInputView pinCount={4} /> */}
                </View>
            </View>
            <Image source={require('../images/flower-2.png')} style={{ position: 'absolute', right: 0, top: 383 }} />
            <Image source={require('../images/flower-3.png')} style={{ position: 'absolute', left: 0, top: 432 }} />
            <Image source={require('../images/left-bottom.png')} style={{ position: 'absolute', left: -10, top: 600 }} />
            <Image source={require('../images/right-bottom.png')} style={{ position: 'absolute', right: 0, top: 550 }} />

            <View style={{ lineHeight: 20, marginTop: 20, alignItems: 'center' }}>
                <Pressable onPress={() => {navigation.navigate('Main'),console.log(otpIP)}}><Image source={require('../images/XD.png')} /></Pressable>
            </View>
            <Pressable style={{ marginTop: 8 }}><Text style={[styles.txt, { fontSize: 12, lineHeight: 17 }]}>Bạn chưa nhận được mã? <Text style={{ color: 'yellow', paddingTop: 12 }}>Gửi lại mã</Text> </Text></Pressable>

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