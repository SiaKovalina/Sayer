import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import ListItem from '../components/ListItem'
import AddBtn from '../components/AddBtn'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  const { list } = state.items

  return {
    list
  }
}

class HomeScreen extends Component {

  renderItems = () => {
    const { list } = this.props

    return list.map(item => <ListItem key={item.id}>{item.text}</ListItem>)
  }

  render() {
    return (
      <React.Fragment>
        <ScrollView>
          {this.renderItems()}
        </ScrollView>
        <AddBtn />
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps)(HomeScreen)
