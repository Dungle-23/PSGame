import { Button, Image, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'

const ModalPopup = ({ visible, children }) => {

  useEffect(() => {
    return () => {
      toggleModal()
    }
  }, [visible])

  const [showModal, setShowModal] = React.useState(visible)
  const toggleModal = () => {
    if (visible) {
      setShowModal(true)
    }
    else {
      setShowModal(false)
    }
  }
  return <Modal transparent={true} visible={visible}>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <View style={styles.modalContainer}>{children}</View>
    </View>
  </Modal>
}
const HomePage = () => {
  const navigation = useNavigation()
  const [visible, setVisible] = React.useState(false)
  return (
    <View style={[styles.container]}>
      <View>
        <Image source={require('../images/1.png')} style={[{ marginLeft: -20 }]} />
        <Image source={require('../images/2.png')} style={[{ position: 'absolute', left: 68 }]} />
        <Image source={require('../images/half-flower.png')} style={[{ position: 'absolute', left: 0 }]} />
        <Image source={require('../images/flower-1-main.png')} style={[{ position: 'absolute', left: 70, top: 75 }]} />
        <Image source={require('../images/flower-2-main.png')} style={[{ position: 'absolute', left: 170, }]} />
        <Image source={require('../images/right-top-main.png')} style={[{ position: 'absolute', right: 0, top: 105 }]} />
      </View>
      <Image source={require('../images/bottom-main.png')} style={[{ position: 'absolute', top: 370 }]} />
      <Image source={require('../images/trong.png')} style={[{ position: 'absolute', bottom: 420, left: 90 }]} />
      <Image source={require('../images/DauLan.png')} style={[{ position: 'absolute', left: 70, top: 160 }]} />
      <View style={{ marginTop: -110, alignItems: 'center' }}>
        <Pressable onPress={() => navigation.navigate('HD')}><Text style={[styles.txt, { color: 'yellow', fontWeight: '900', lineHeight: 22, fontSize: 14 }]}>Hướng dẫn</Text></Pressable>
        <ModalPopup visible={visible}>
          <LinearGradient colors={['#FCD54E', '#FDEA95', '#FBD239']} styles={{ alignItems: 'center', }}>
            <View style={[styles.header]}>
              <TouchableOpacity onPress={()=>setVisible(false)}>
                <Image source={require('../images/popup/close.png')} style={{ height: 30, width: 30, tintColor: 'white', borderRadius: 50 }} />
              </TouchableOpacity>
            </View>
            <View style={{ paddingHorizontal: 10 }}>
              <Text style={{ textAlign: 'center', color: '#D02027', fontWeight: '900', fontSize: 16, lineHeight: 18 }}>
                BẠN MUỐN SỬ DỤNG LƯỢT CHƠI NÀO?
              </Text>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20, lineHeight: 24, marginBottom: 20 }}>
              <Pressable onPress={() => {
                setVisible(false)
                navigation.navigate('Game')

              }
              }><Image source={require('../images/popup/Button.png')} /></Pressable>
              <Pressable><Image source={require('../images/popup/button1.png')} /></Pressable>
            </View>

          </LinearGradient>
        </ModalPopup>
        <Pressable onPress={() => setVisible(true)} style={{ margin: 1, }}><Image source={require('../images/button-1-main.png')} /></Pressable>

        <Pressable style={{ margin: 1 }}><Image source={require('../images/button-qr-main.png')} style={[{}]} /></Pressable>
        <Pressable style={{ margin: 1 }} onPress={() => navigation.navigate('Coll')}><Image source={require('../images/button-gar-main.png')} style={[{}]} /></Pressable>
        <Pressable style={{ margin: 1 }} onPress={() => navigation.navigate('Gift')}><Image source={require('../images/button-detail-main.png')} style={[{}]} /></Pressable>
      </View>
      <Pressable onPress={() => navigation.navigate('SigIn')}><Image source={require('../images/back.png')} style={[{ position: 'absolute', right: 20, top: -650 }]} /></Pressable>
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3399FF',
    height: 1200,
    maxHeight: 1200, flex: 1
  },
  txt: {
    textAlign: 'center',
    color: 'white',
  },
  modalContainer: {
    backgroundColor: '#FCD54E',
    width: '80%',
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 14,
    elevation: 14
  }, header: {
    width: '100%',
    height: 30,
    alignItems: 'flex-end',
    justifyContent: 'center'
  }
})