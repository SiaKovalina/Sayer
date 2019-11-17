import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'
import ListItem from '../components/ListItem'
import AddBtn from '../components/AddBtn'
import { connect } from 'react-redux'
import { truncate } from '../../utils'

const mapStateToProps = (state) => {
  const { list } = state.items

  return {
    list
  }
}

class HomeScreen extends Component {

  renderItems = () => {
    const { list } = this.props

    return list.map(item => (
      <ListItem
        key={item.id}
        id={item.id}>
          {truncate(item.text)}
      </ListItem>
    ))
  }

  render() {
    const { list } = this.props

    return (
      <React.Fragment>
        {list.length ?
          <ScrollView>
            {this.renderItems()}
          </ScrollView>
          :
          <Text>
            No items yet
          </Text>
        }
        <AddBtn />
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps)(HomeScreen)
