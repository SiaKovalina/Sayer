import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FlatList, Text, TextInput, StyleSheet, View } from 'react-native'
import SubmitBtn from '../components/SubmitBtn'
import { GREY } from '../colors'
import { DEFAULT_FONT_SIZE } from '../../constants'
import ItemActions from '../../store/actions/ItemActions'

const mapStateToProps = (state, { navigation }) => {
  const { comments } = state.items
  const itemId = navigation.getParam('ItemId')

  return {
    comments: comments[itemId]
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

  renderComment = () => {

  }

  onTextChage = (text) => {
    this.setState({ text })
  }

  clearInputField = () => {
    this.setState({ text: '' })
  }

  addComment = () => {
    const { setComment, navigation } = this.props
    const comment = {
      text: this.state.text,
      itemId: navigation.getParam('itemId')
  }

    setComment(comment)
    this.clearInputField()
  }

  render() {
    const { comments } = this.props

    return (
      <React.Fragment>
        <FlatList
          renderItem={this.renderComment}
          data={comments} />
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
