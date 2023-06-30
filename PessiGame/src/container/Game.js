import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import { useNavigation } from '@react-navigation/native'
import Draggable from 'react-native-draggable';
import database from '@react-native-firebase/database'

const Game = () => {
    const navigation = useNavigation();
    const {soDiem,setSoDiem,soCam,setSoCam,soPepsi,setSoPepsi,soBayUp,setSoBayUp} = useContext(AppContext)
    const { setRandomImagePrize } = useContext(AppContext);
    const { setRandomImageScore } = useContext(AppContext);
    const imageList = [
        {
            image: require('../images/coll/pepsi.png'),
            score: 50
        },
        {
            image: require('../images/coll/mirinda.png'),
            score: 100
        },
        {
            image: require('../images/coll/7up.png'),
            score: 150
        }
    ];
    const TongSo = (index) =>{
        const ref = database().ref(`/users/234`);
        if(index === 0){
            ref.set({
                pepsi : soPepsi + 1,
            })
            setSoPepsi(soPepsi +1)
        }else if(index === 1){
            ref.set({
                mirinda : soCam + 1,
            })
            setSoCam(soCam +1)
        }else if(index === 2){
            ref.set({
                sevenUp: soBayUp + 1,
            })
            setSoBayUp(soBayUp + 1)
        }
        if(index === 0){
            ref.set({
                score : soDiem + 50,
            })
            setSoDiem(soDiem +50)
        }else if(index === 1){
            ref.set({
                score : soDiem + 100,
            })
            setSoDiem(soDiem +100)
        }else{
            ref.set({
                score : soDiem + 150,
            })
            setSoDiem(soDiem +150)
        }
    }

    const handleDraggable = () => {
        const randomIndex = Math.floor(Math.random() * imageList.length);
        setRandomImagePrize(imageList[randomIndex].image);
        setRandomImageScore(imageList[randomIndex].score);
        TongSo(randomIndex);  // Update data to Realtime Database
        navigation.navigate('Prize');
    }
    return (
        <View style={styles.container}>
            <View>
                <Image source={require('../images/left-top-game.png')} style={[{ marginLeft: -20 }]} />
                <Pressable><Image source={require('../images/back.png')} style={[{ position: 'absolute', right: 20, top: -140 }]} /></Pressable>
                <Pressable onPress={() => navigate.goBack()}><Image source={require('../images/arrow-back.png')} style={[{ position: 'absolute', left: 0, top: -140 }]} /></Pressable>
                <Image source={require('../images/flower-1-game.png')} style={[{ position: 'absolute', top: 150, right: 0 }]} />
                <Image source={require('../images/flower-2-game.png')} style={[{ position: 'absolute', top: 480, left: 0 }]} />
                <Image source={require('../images/flower-3-game.png')} style={[{ position: 'absolute', top: 540, right: 0 }]} />
            </View>
            <View style={{ marginTop: -150, }}>
                <Text style={[styles.txt, { fontWeight: '900', lineHeight: 29 }]}>VUỐT LÊN ĐỂ CHƠI</Text>
                <Text style={[styles.txt, { fontWeight: '400', lineHeight: 20, fontSize: 10, marginTop: -15 }]}>Bạn còn 8 lượt chơi miễn phí</Text>
            </View>
            <View>
                <Pressable><Image source={require('../images/Lon-1.png')} style={[{ position: 'absolute', top: 0, left: 33 }]} /></Pressable>
                <Pressable><Image source={require('../images/Lon-2.png')} style={[{ position: 'absolute', top: 17, right: 50 }]} /></Pressable>
                <Pressable><Image source={require('../images/Lon-3.png')} style={[{ position: 'absolute', top: 114, right: -5 }]} /></Pressable>
                <Pressable><Image source={require('../images/Lon-4.png')} style={[{ position: 'absolute', top: 155, left: 0 }]} /></Pressable>
                <Pressable><Image source={require('../images/Lon-5.png')} style={[{ position: 'absolute', top: 320, right: -5 }]} /></Pressable>
                <Pressable><Image source={require('../images/Lon-6.png')} style={[{ position: 'absolute', top: 320, left: 12 }]} /></Pressable>
                {/* <Image source={require('../images/TongLon.png')} /> */}

            </View>

            <View style={{ marginTop: -110, alignItems: 'center' }}></View>
            <Image source={require('../images/bottom-game.png')} style={[{ position: 'absolute', top: 500 }]} />
            <Draggable
                imageSource={require('../images/DauLan.png')}
                x={80}
                y={630}
                maxX={100}
                minX={80}
                minY={400}
                renderSize={220}
                shouldReverse
                onDragRelease={handleDraggable} />
            {/* <Image source={require('../images/DauLan.png')} style={[{ position: 'absolute', bottom: 370, left: 90 }]} /> */}
        </View>
    )
}

export default Game

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