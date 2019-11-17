import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FlatList, Text, TextInput, StyleSheet, View, Alert } from 'react-native'
import SubmitBtn from '../components/SubmitBtn'
import { GREY } from '../colors'
import { DEFAULT_FONT_SIZE } from '../../constants'
import ItemActions from '../../store/actions/ItemActions'
import Comment from '../components/Comment'
import { generateId } from '../../utils'

const mapStateToProps = (state, { navigation }) => {
  const { comments } = state.items

  return {
    comments
  }
}

const mapDispatchToProps = (dispatch) => {
  const setComment = (comment) => dispatch(ItemActions.setComment(comment))

  return {
    setComment
  }
}

class Comments extends Component {
  state = {
    text: ''
  }

  renderComment = ({ item }) => {
    return <Comment comment={item.text} />
  }

  onTextChage = (text) => {
    this.setState({ text })
  }

  clearInputField = () => {
    this.setState({ text: '' })
  }

  isInputValid = () => {
    return this.state.text.trim()
  }

  addComment = () => {
    const { setComment, navigation } = this.props
    const comment = {
      text: this.state.text,
      itemId: navigation.getParam('itemId')
    }

    if (this.isInputValid()) {
      setComment(comment)
      this.clearInputField()
    } else {
      Alert.alert('You should write something first')
    }
  }

  render() {
    const { comments, navigation } = this.props
    const itemId = navigation.getParam('itemId')
    const data = comments[itemId]

    return (
      <React.Fragment>
        <FlatList
          renderItem={this.renderComment}
          data={data}
          keyExtractor={item => generateId()} />
        <View style={styles.input}>
          <TextInput
            onChangeText={this.onTextChage}
            style={styles.input__field}/>
          <SubmitBtn onBtnPress={this.addComment} />
        </View>
      </React.Fragment>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: GREY,
    height: 70,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },

  input__field: {
    backgroundColor: '#fff',
    marginRight: 15,
    flexGrow: 2,
    fontSize: DEFAULT_FONT_SIZE,
    padding: 10
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Comments)
