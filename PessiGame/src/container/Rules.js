import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'


const Rules = () => {
const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={[styles.cloud]}>
                <Pressable onPress={()=>{navigation.goBack()}}><Image source={require('../images/arrow-back.png')} /></Pressable>
                <Text style={[styles.txt, { fontWeight: '900', fontSize: 14, lineHeight: 29, marginStart: 20,marginTop:-10 }]}>Thể lệ chương trình</Text>
            </View>
            <Image source={require('../images/right-top.png')} style={[{ position: 'absolute', top: 0, right: 0 }]} />
            <Image source={require('../images/flower-1.png')} style={{ position: 'absolute', left: 0, top: 162 }} />
            <Image source={require('../images/flower-2.png')} style={{ position: 'absolute', right: 0, top: 243 }} />
            <Image source={require('../images/flower-1.png')} style={{ position: 'absolute', left: 0, top: 512 }} />
            <ScrollView >
                <View style={[{ margin: 25 },]}>
                    <Text style={[{ paddingLeft: 25, paddingRight: 25, color: 'white', textAlign: 'justify' }]}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque tortor luctus auctor quam. Aliquam eget augue fermentum eu, at etiam. Id porttitor egestas tortor nisl. Maecenas volutpat sapien neque et sit mauris quis. Neque consectetur egestas nam rutrum nisi, eu lobortis et turpis. Duis id parturient sit et faucibus cursus. A maecenas nec enim consectetur non, donec vitae. Gravida vulputate quam nibh gravida. Quis egestas neque, nibh commodo elit sed odio ac. Purus elementum risus aliquam nunc in. Sapien nunc ornare fermentum non laoreet nec turpis sit turpis.
                        Tellus ultrices vitae tincidunt eget ut. Et mattis arcu, sit feugiat dui sem in vel. Dictum nulla sagittis nunc mi tortor cursus. Lectus erat commodo dui venenatis habitasse venenatis vivamus sit. Pulvinar sem non sapien eu viverra amet, facilisi. Pellentesque enim id quis porta tortor congue. Nunc, elementum leo maecenas neque ultrices.Pellentesque enim id quis porta tortor congue. Nunc, elementum leo maecenas neque ultrices.Pellentesque enim id quis porta tortor congue.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque tortor luctus auctor quam. Aliquam eget augue fermentum eu, at etiam. Id porttitor egestas tortor nisl. Maecenas volutpat sapien neque et sit mauris quis. Neque consectetur egestas nam rutrum nisi, eu lobortis et turpis. Duis id parturient sit et faucibus cursus. A maecenas nec enim consectetur non, donec vitae. Gravida vulputate quam nibh gravida. Quis egestas neque, nibh commodo elit sed odio ac. Purus elementum risus aliquam nunc in. Sapien nunc ornare fermentum non laoreet nec turpis sit turpis.
                        Tellus ultrices vitae tincidunt eget ut. Et mattis arcu, sit feugiat dui sem in vel. Dictum nulla sagittis nunc mi tortor cursus. Lectus erat commodo dui venenatis habitasse venenatis vivamus sit. Pulvinar sem non sapien eu viverra amet, facilisi. Pellentesque enim id quis porta tortor congue. Nunc, elementum leo maecenas neque ultrices.Pellentesque enim id quis porta tortor congue. Nunc, elementum leo maecenas neque ultrices.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque tortor luctus auctor quam. Aliquam eget augue fermentum eu, at etiam. Id porttitor egestas tortor nisl. Maecenas volutpat sapien neque et sit mauris quis. Neque consectetur egestas nam rutrum nisi, eu lobortis et turpis. Duis id parturient sit et faucibus cursus. A maecenas nec enim consectetur non, donec vitae. Gravida vulputate quam nibh gravida. Quis egestas neque, nibh commodo elit sed odio ac. Purus elementum risus aliquam nunc in. Sapien nunc ornare fermentum non laoreet nec turpis sit turpis.
                        Tellus ultrices vitae tincidunt eget ut. Et mattis arcu, sit feugiat dui sem in vel. Dictum nulla sagittis nunc mi tortor cursus. Lectus erat commodo dui venenatis habitasse venenatis vivamus sit. Pulvinar sem non sapien eu viverra amet, facilisi. Pellentesque enim id quis porta tortor congue. Nunc, elementum leo maecenas neque ultrices.Pellentesque enim id quis porta tortor congue. Nunc, elementum leo maecenas neque ultrices.Pellentesque enim id quis porta tortor congue.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque tortor luctus auctor quam. Aliquam eget augue fermentum eu, at etiam. Id porttitor egestas tortor nisl. Maecenas volutpat sapien neque et sit mauris quis. Neque consectetur egestas nam rutrum nisi, eu lobortis et turpis. Duis id parturient sit et faucibus cursus. A maecenas nec enim consectetur non, donec vitae. Gravida vulputate quam nibh gravida. Quis egestas neque, nibh commodo elit sed odio ac. Purus elementum risus aliquam nunc in. Sapien nunc ornare fermentum non laoreet nec turpis sit turpis.
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default Rules

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3399FF',
        height: 1200,
        maxHeight: 1200
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