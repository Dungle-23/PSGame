import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Gift = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Image
                style={{
                    position: 'absolute',
                    top: 180.68,
                    left: -16.03
                }}
                source={require('./../images/pattern-1/flower.png')} />

            <Image
                style={{
                    position: 'absolute',
                    top: 252.33,
                    right: -20
                }}
                source={require('./../images/pattern-1/flower.png')} />

            <Image
                style={{
                    position: 'absolute',
                    top: 504.23,
                    left: 0.55
                }}
                source={require('./../images/pattern-1/flower.png')} />

            <Image
                style={{
                    position: 'absolute',
                    top: 640,
                    right: -20
                }}
                source={require('./../images/pattern-1/flower.png')} />

            <Image
                style={{
                    position: 'absolute'
                }}
                source={require('./../images/pattern-3/vector-1.png')} />

            <Image
                style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0
                }}
                source={require('./../images/pattern-1/vector-3.png')} />

            <Image
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                }}
                source={require('./../images/pattern-2/mask-2.png')} />

            <Pressable onPress={() => navigation.goBack()}>
                <Image
                    style={{
                        position: 'absolute',
                        marginTop: 56,
                        marginLeft: 20
                    }}
                    source={require('./../images/pattern-3/arrow-left.png')} />
            </Pressable>

            <Pressable>
                <Image
                    style={{
                        position: 'absolute',
                        right: 0,
                        marginTop: 60,
                        marginRight: 20
                    }}
                    source={require('./../images/back.png')} />

            </Pressable>

            <Text style={styles.txt}>Chi tiết quà tặng</Text>
        </View>
    )
}

export default Gift

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3399FF',
        height: 1200,
        maxHeight: 1200
        , flex: 1
    },
    txt: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        fontFamily: 'UTM Swiss 721 Black Condensed',
        fontWeight: 900,
        marginTop: 55,
    },
})