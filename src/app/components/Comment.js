import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { GREY, PINK } from '../colors'

class Comment extends Component {
  render() {
    const { comment } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.avatar} />
        <Text>{comment}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomColor: GREY,
    borderBottomWidth: 1,
    flexDirection: 'row',
    padding: 20
  },

  avatar: {
    width: 50,
    height: 50,
    backgroundColor: PINK,
    marginRight: 20
  }
})

export default Comment
