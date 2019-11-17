import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'

function SubmitBtn({ onBtnPress }) {
  return (
    <TouchableOpacity
      onPress={onBtnPress}>
      <Image
        style={styles.btn__image}
        source={require('../assets/icons/plus-round.png')} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn__image: {
    width: 45,
    height: 45
  }
})

export default SubmitBtn
