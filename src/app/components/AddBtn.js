import React from 'react'
import { TouchableHighlight, Image, StyleSheet } from 'react-native'
import { withNavigation } from 'react-navigation'
import { PINK } from '../colors'

const AddBtn = ({ navigation }) => {
  const onBtnPress = () => {
    navigation.navigate('NewItem')
  }

  return (
    <TouchableHighlight
      style={styles.btn}
      onPress={onBtnPress}>
        <Image
          source={require('../assets/icons/plus-round.png')}
          style={styles.btn__icon}/>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  btn: {
    height: 70,
    width: 70,
    // backgroundColor: PINK,
    marginTop: 40,
    borderRadius: 70 / 2,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },

  btn__icon: {
    height: 70,
    width: 70
  }
})

export default withNavigation(AddBtn)
