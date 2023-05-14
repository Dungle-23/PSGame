import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Collection = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View>
                <Image source={require('../images/left-top-game.png')} style={[{ marginLeft: -20 }]} />
                <Pressable><Image source={require('../images/back.png')} style={[{ position: 'absolute', right: 20, top: -140 }]} /></Pressable>
                <Pressable><Image source={require('../images/arrow-back.png')} style={[{ position: 'absolute', left: 0, top: -140 }]} /></Pressable>
                <Image source={require('../images/flower-1-game.png')} style={[{ position: 'absolute', top: 150, right: 0 }]} />
                <Image source={require('../images/flower-2-game.png')} style={[{ position: 'absolute', top: 480, left: 0 }]} />
                <Image source={require('../images/flower-3-game.png')} style={[{ position: 'absolute', top: 540, right: 0 }]} />
            </View>
            <View style={{ marginTop: -150, }}>
                <Text style={[styles.txt, { fontWeight: '900', lineHeight: 29 }]}>Bộ sưu tập</Text>

            </View>
            <View style={{ alignItems: 'center' }}>
                <Image source={require('../images/trondo.png')} style={[{ position: 'absolute', top: 0, left: 130 }]} />
                <Image source={require('../images/vongvang.png')} style={[{ position: 'absolute', top: 0, left: 130 }]} />
                <Image source={require('../images/50-point.png')} style={[{ position: 'absolute', top: 0, left: 130 }]} />
                <Image source={require('../images/vongvang2.png')} style={[{ position: 'absolute', top: 12, left: 142 }]} />
                <Image source={require('../images/vongvang3.png')} style={[{ position: 'absolute', top: 5, left: 135 }]} />
                {/* <Image source={require('../images/logo.png')} /> */}
                {/* <Image source={require('../images/TongLon.png')} /> */}
                <Text style={[styles.txt, { marginTop: 100 }]}>Số coins hiện tại của bạn</Text>
            </View>
            <View >
                <Image source={require('../images/dot-1-coll.png')} style={[{ position: 'absolute', right: 0, top: 20 }]} />
                <Image source={require('../images/dot-2-coll.png')} style={[{ position: 'absolute', left: 0, top: 20 }]} />
                <Image source={require('../images/three-lon.png')} style={[{ position: 'absolute', left: 35, top: 40 }]} />
                <Text style={[styles.txt, { fontSize: 10, marginTop: 230, padding: 40 }]}>Đổi ngay bộ sưu tập <Text style={{ color: 'yellow', fontWeight: '900' }}> AN - LỘC - PHÚC </Text>để có cơ hội nhận ngay 300 coins hoặc <Text style={{ color: 'yellow', fontWeight: '900' }}>một phần quà may mắn</Text> </Text>
            </View>
            <View style={{ marginTop: -30, justifyContent: 'center', flexDirection: 'row', }}>
                <Pressable><Image source={require('../images/dau-.png')} style={{ marginEnd: 15 }} /></Pressable>
                <Text style={[styles.txt, { marginEnd: 15 }]}>0</Text>
                <Pressable><Image source={require('../images/dau+.png')} /></Pressable>
            </View>
            <Image source={require('../images/dot-3-coll.png')} style={[{ position: 'absolute', top: 600, left: -10 }]} />
            <Image source={require('../images/right-bottom.png')} style={[{ position: 'absolute', top: 550, right: 0 }]} />
            <Pressable onPress={() => navigation.navigate('Gift')} style={{marginTop:60}}>
                <Image source={require('../images/button-coll.png')} style={[{ position: 'absolute', top: 0, right: 65 }]} />
            </Pressable>



        </View>
    )
}

export default Collection

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