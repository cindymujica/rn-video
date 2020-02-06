import React, {Component} from 'react'
import {
  View,
  FlatList
} from 'react-native'
import { connect } from 'react-redux'

import Category from './category.js'
import Layout from './category-layout'
import Separator from './horizontal-separator'


function mapStateToProps(state) {
  return {list: state.videos.categoryList}
}
class CategoryContainer extends Component {
  separator = () => <Separator />
  renderList = ({item}) => {
    return (<Category {...item}/>)
  }
  myKeyExtractor = (item) => item.id.toString()
  render() {
    return(
      <Layout title='Categorias'>
        <FlatList horizontal
          data={this.props.list}
          keyExtractor={this.myKeyExtractor}
          renderItem={this.renderList}
          ItemSeparatorComponent={this.separator}
        />
      </Layout>
    )
  }
}

export default connect(mapStateToProps)(CategoryContainer)