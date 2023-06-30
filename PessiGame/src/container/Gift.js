import { StyleSheet, Text, View, Image, Pressable, ScrollView ,TextInput,TouchableOpacity} from 'react-native'
import React ,{useContext, useState}from 'react'
import Modal from "react-native-modal";
import { useNavigation } from '@react-navigation/native'
import { AppContext } from '../context/AppContext';

const Gift = () => {
    const navigation = useNavigation()
    // const [showdoiqua, setShowdoiqua] = useState()
    const {soDiem} = useContext(AppContext)
    const [showdoiqua, setShowdoiqua] = useState()
    const [isModalVisible, setIsModalVisible] = useState(false);
    const handleModal = () => setIsModalVisible(() => !isModalVisible);
    return (
        <>
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

                <Pressable onPress={()=> navigation.navigate('HomePage')}>
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
            <Modal isVisible={isModalVisible} style={{alignItems:'center',}} >
                    <View style={{ borderRadius: 10, backgroundColor: '#FCE582', width: 330,minHeight: 600, marginLeft: 15, padding: 5 }}>
                        <TouchableOpacity onPress={handleModal}>
                            <Image style={{ position: 'absolute', marginLeft: 295 }} source={require('../images/modalgift/ButtonX.png')} />
                        </TouchableOpacity>
                        <Text style={{color:'#005082',marginTop:20,fontWeight:'bold',fontSize:18,textAlign:'center'}}>THÔNG TIN NhẬN QUÀ</Text>
                        <View style={{ flexDirection: 'column',padding:10 }}>
                            <Text style={{color:'#005082',marginTop:20,fontWeight:'bold',fontSize:16}}>Quà của bạn: <Text style={{color:'#D02027',fontSize:18}}>Pepsi Bucket Hat</Text></Text> 
                            <Text style={styles.title111}>Họ và tên</Text>
                            <TextInput style={styles.input2} placeholder='VD : Nguyễn Văn A'></TextInput>
                            <Text style={styles.title111}>Số điện thoại</Text>
                            <TextInput style={styles.input2} placeholder='VD : 012345678'></TextInput>
                            <Text style={styles.title111}>Địa chỉ</Text>
                            <TextInput style={styles.input3} placeholder='Nhập địa chỉ của bạn'></TextInput>
                            <Text style={styles.title111}>Ghi chú</Text>
                            <TextInput style={styles.input3} placeholder='Nhập ghi chú nếu có'></TextInput>
                            <Pressable style={{marginLeft:80,marginTop:20}} onPress={()=>{
                                
                            }}>
                                <Image source={require('../images/modalgift/xacnhan.png')}/>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            {/* FORM */}
            <View style={{ flexDirection: 'column', alignItems: 'center', padding: 15, marginTop: 0 }}>


                {
                    showdoiqua ?
                        <Pressable style={{ alignItems: 'center' }} onPress={() => setShowdoiqua(!showdoiqua)}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={require('../images/gift/doiqua.png')} />
                                <Image source={require('../images/gift/quacuatui.png')} />
                            </View>
                            <Image style={{ backgroundColor: '#BE050C', borderRadius: 60 }} source={require('../images/Circle.png')} />
                            <Text style={styles.title2} >{soDiem}</Text>
                            <Text style={styles.title}>Số coins hiện tại của bạn</Text>
                        </Pressable>
                        :
                        <Pressable style={{ flexDirection: 'row' }} onPress={() => setShowdoiqua(!showdoiqua)} >
                            <Image source={require('../images/gift/doiqua2.png')} />
                            <Image source={require('../images/gift/quacuatui2.png')} />
                        </Pressable>
                }
            </View>
            {showdoiqua ?
                // <View style={{padding:20}}>
                <ScrollView  style={{paddingEnd:5}}>
                    {/* ITEM 1 */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                        {/* item 1.1 */}
                        <View style={{}}>
                            <Image source={require('../images/gift/vector1.png')} />

                            <View style={styles.item11}>


                                <Text style={styles.titleVang}>Pepso Bucket Hat</Text>
                                <Text style={styles.titletrang}>còn lại: <Text>500</Text></Text>
                                <Pressable onPress={handleModal} style={{alignItems:'center'}} >
                                    <Image source={require('../images/gift/buttondoiqua.png') } />
                                </Pressable>

                            </View>
                        </View>



                        {/* item 1.2 */}
                        <View style={{}}>
                            <Image source={require('../images/gift/vector2.png')} />

                            <View style={styles.item11}>


                                <Text style={styles.titleVang}>Pepso Jacket</Text>
                                <Text style={styles.titletrang}>còn lại: <Text>10</Text></Text>
                                <Pressable onPress={handleModal} style={{alignItems:'center'}} >
                                    <Image source={require('../images/gift/buttondoiqua.png') } />
                                </Pressable>
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
                                <Pressable onPress={handleModal} style={{alignItems:'center'}} >
                                    <Image source={require('../images/gift/buttondoiqua.png') } />
                                </Pressable>
                            </View>
                        </View>



                        {/* item 1.2 */}
                        <View style={{ marginLeft: 10 }}>
                            <Image source={require('../images/gift/vector4.png')} />

                            <View style={styles.item11}>
                                <Text style={styles.titleVang}>Pepso Jacket</Text>
                                <Text style={styles.titletrang}>còn lại: <Text>10</Text></Text>
                                <Pressable onPress={handleModal} style={{alignItems:'center'}} >
                                    <Image source={require('../images/gift/buttondoiqua.png') } />
                                </Pressable>
                            </View>
                        </View>

                    </View>
                </ScrollView>
                // </View>
                :
                <View style={{ alignItems: 'center' }}>
                    <Image source={require('../images/gift/null.png')}/>

                </View>
            }
        </View>
        </>
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
    titleVang:{
        color:'#FFDD00',fontSize:12,fontWeight:'bold',textAlign:'center'
    },
    titletrang:{
        color:'white',textAlign:'center'
    },
    txt: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        fontFamily: 'UTM Swiss 721 Black Condensed',
        fontWeight: 900,
        marginTop: 55,
    }, 
    title2: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginTop: -65
    },
    title: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 30
    }, input1: {
        width: "100%"
        , height: 40,
        borderRadius: 10,
        borderColor: 'black',
        backgroundColor: 'white',
        marginTop: 20

    },

    btn: {
        width: 225,
        height: 50,
        marginTop: 10, zIndex: 10
    },
    title3: {
        color: 'white',
        fontWeight: 'bold'
    },
    title4: {
        color: 'white'
    },
    title5: {
        color: '#FFDD00',
        fontWeight: 'bold'
    },
    item11:{
        backgroundColor:'#C31E25',
        width:158,height:100,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        marginTop:-20,
        alignItems:'center'
    },
    titleVang:{
        color:'#FFDD00',fontSize:12,fontWeight:'bold'
    },
    titletrang:{
        color:'white'
    },title111:{
        color:'#005082',fontSize:14,fontWeight:'bold'
        ,marginTop:15
    }
    ,input2:{
        backgroundColor:'white'
        ,borderRadius:10,
        marginTop:10
    },
    input3:{
        backgroundColor:'white'
        ,borderRadius:10,
        marginTop:10,
        height:70
    }
})