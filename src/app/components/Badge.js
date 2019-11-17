import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { DARK_BLUE } from '../colors'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {}
}

function Badge({ list }) {
  return (
    <View style={styles.badge}>
      <Text style={badge__text}>

      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  badge: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: DARK_BLUE
  }
})

export default connect(mapStateToProps)(Badge)
