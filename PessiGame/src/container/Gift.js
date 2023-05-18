import { StyleSheet, Text, View, Image, Pressable, ScrollView} from 'react-native'
import React from 'react'
import { useNavigation, useState } from '@react-navigation/native'

const Gift = () => {
    const navigation = useNavigation()
    // const [showdoiqua, setShowdoiqua] = useState(true)
    return (
        <View style={styles.container}>
            <View>
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
            {/* FORM */}
            <View style={{ flexDirection: 'column', alignItems: 'center', padding: 15, marginTop: 0 }}>


                {/* { */}
                    {/* // showdoiqua ? */}

                        <Pressable style={{ alignItems: 'center' }} onPress={() => setShowdoiqua(!showdoiqua)}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={require('../images/gift/doiqua.png')} />
                                <Image source={require('../images/gift/quacuatui.png')} />
                            </View>

                            <Image style={{ backgroundColor: '#BE050C', borderRadius: 60 }} source={require('../images/Circle.png')} />
                            <Text style={styles.title2} >700</Text>
                            <Text style={styles.title}>Số coins hiện tại của bạn</Text>

                        </Pressable>

                        
                         <Pressable style={{ flexDirection: 'row' }} onPress={() => setShowdoiqua(!showdoiqua)} >
                            <Image source={require('../images/gift/doiqua2.png')} />
                            <Image source={require('../images/gift/quacuatui2.png')} />

                        </Pressable>
                {/* // } */}
            </View>
            {/* {showdoiqua ? */}
                {/* // <View style={{padding:20}}> */}
                <ScrollView >
                    {/* ITEM 1 */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
                        {/* item 1.1 */}
                        <View style={{}}>
                            <Image source={require('../images/gift/vector1.png')} />
                            <View style={styles.item11}>
                                <Text style={styles.titleVang}>Pepso Bucket Hat</Text>
                                <Text style={styles.titletrang}>còn lại: <Text>500</Text></Text>
                                <Image source={require('../images/gift/buttondoiqua.png')} />
                            </View>
                        </View>
                        {/* item 1.2 */}
                        <View style={{}}>
                            <Image source={require('../images/gift/vector2.png')} />
                            <View style={styles.item11}>
                                <Text style={styles.titleVang}>Pepso Jacket</Text>
                                <Text style={styles.titletrang}>còn lại: <Text>10</Text></Text>
                                <Image source={require('../images/gift/buttondoiqua.png')} />
                            </View>
                        </View>

                    </View>
                    {/* ITEM 2 */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
                        {/* item 1.1 */}
                        <View style={{}}>
                            <Image source={require('../images/gift/vector3.png')} />
                            <View style={styles.item11}>
                                <Text style={styles.titleVang}>Pepso Bucket Hat</Text>
                                <Text style={styles.titletrang}>còn lại: <Text>500</Text></Text>
                                <Image source={require('../images/gift/buttondoiqua.png')} />
                            </View>
                        </View>
                        {/* item 1.2 */}
                        <View style={{ marginLeft: 10 }}>
                            <Image source={require('../images/gift/vector4.png')} />
                            <View style={styles.item11}>
                                <Text style={styles.titleVang}>Pepso Jacket</Text>
                                <Text style={styles.titletrang}>còn lại: <Text>10</Text></Text>
                                <Image source={require('../images/gift/buttondoiqua.png')} />
                            </View>
                        </View>
                    </View>
                </ScrollView>
                {/* :
               ( <View style={{ alignItems: 'center' }}>
                    <Image source={require('../images/gift/null.png')}></Image>
                </View>)
            } */}
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