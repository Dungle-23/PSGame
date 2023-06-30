import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import { AppContext } from '../context/AppContext'

const Prize = () => {
    const navigation = useNavigation()
    const { randomImageScore } = useContext(AppContext);
    const { randomImagePrize } = useContext(AppContext);
    
    return (
        <View style={[styles.container]}>
            <View>
                <View>
                    <Image source={require('../images/left-top.png')} style={[{ position: 'absolute', left: 0 }]} />
                    <Image source={require('../images/yellow-flower.png')} style={[{ position: 'absolute', left: 290, top: 380 }]} />
                    <Image source={require('../images/3.png')} style={[{ position: 'absolute', right: 0, top: 300 }]} />
                    <Image source={require('../images/yellow-flower.png')} style={[{ position: 'absolute', left: 20, top: 300 }]} />
                    <Image source={require('../images/Big-half-flower.png')} style={[{ position: 'absolute', right: 0, top: 100 }]} />
                    <Image source={require('../images/yellow-flower.png')} style={[{ position: 'absolute', left: 20, top: 600 }]} />
                </View>
                <Image source={randomImagePrize} style={[{ position: 'absolute', left: 100, top: 120 }]} />
                <View style={[{ position: 'absolute', left: 190, top: 60 }]} >
                    <Image source={require('../images/prize/tron-trang.png')} />
                    <Image source={require('../images/prize/tron-do.png')} style={{position:'absolute',left:10,top:10}}/>
                    <Text style={{position:'absolute',color:'white',fontWeight:'bold',fontSize:18,left:25,top:28}}>{randomImageScore}</Text>
                </View>
                <Image source={require('../images/txt.png')} style={[{ position: 'absolute', left: 50, top: 520 }]} />

                <Image source={require('../images/bottom-main.png')} style={[{ position: 'absolute', top: 370 }]} />
                <Image source={require('../images/trong.png')} style={[{ position: 'absolute', bottom: 420, left: 90 }]} />

                <Pressable onPress={() => navigation.navigate('HomePage')}><Image source={require('../images/back.png')} style={[{ position: 'absolute', right: 20, top: 40 }]} /></Pressable>
            </View>
            <View style={{marginTop:600,alignItems:'center'}}>
            <Pressable onPress={() => { navigation.navigate('Coll')}} >
                <Image source={require('../images/Prize-btn.png')} />
            </Pressable>
            </View>
        </View>

    )
}

export default Prize

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