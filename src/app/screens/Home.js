import React from 'react'
import ListItem from '../components/ListItem'
import AddBtn from '../components/AddBtn'

class HomeScreen extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ListItem>New text</ListItem>
        <AddBtn />
      </React.Fragment>
    )
  }
}

export default HomeScreen
