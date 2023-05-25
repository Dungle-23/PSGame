import { Button, Image, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
const HD = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={[styles.cloud]}>
                    <Pressable onPress={() => { navigation.goBack() }}><Image source={require('../images/arrow-back.png')} /></Pressable>
                    <Text style={[styles.txt, { fontWeight: '900', fontSize: 14, lineHeight: 29, marginStart: 20, marginTop: -10 }]}>Thể lệ chương trình</Text>
                </View>
                <Image source={require('../images/right-top.png')} style={[{ position: 'absolute', top: 0, right: 0 }]} />
                <Image source={require('../images/flower-1.png')} style={{ position: 'absolute', left: 0, top: 162 }} />
                <Image source={require('../images/flower-2.png')} style={{ position: 'absolute', right: 0, top: 243 }} />
                <Image source={require('../images/flower-1.png')} style={{ position: 'absolute', left: 0, top: 512 }} />

                <ScrollView >
                    <View style={[{ margin: 25, alignItems: 'center' },]}>
                        <Image source={require('../images/2lon.png')} style={{ width: 260, height: 260, marginBottom: 20 }} />
                        <Text style={[{ paddingLeft: 25, paddingRight: 25, color: 'white', textAlign: 'justify', marginBottom: 20 }]}>
                            <Text style={{ lineHeight: 19, fontWeight: '900' }}>BƯỚC 1: </Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Text>
                        <Image source={require('../images/4lon.png')} style={{ width: 260, height: 260, marginBottom: 20 }} />
                    </View>
                </ScrollView>

            </View>
        </SafeAreaView>
    )
}

export default HD

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3399FF',
        height: 1200,

    },
    cloud: {
        flexDirection: 'row',
        margin: 20
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