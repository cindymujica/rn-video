import React, {Component} from 'react';
import {
  FlatList,
  Text
} from 'react-native';
import { connect } from 'react-redux'

import SuggestionLayout from './suggestion-layout.js';
import Empty from './empty-list.js';
import Separator from './separator-list.js';
import Suggestion from './suggestion.js';

function mapStateToProps(state){
  return {list: state.videos.suggestionList}
}

class SuggestionList extends Component{
  myKeyExtractor = (item) => item.id.toString()
  renderEmpty = () => <Empty text="No hay Sugerencias"/>
  renderSeparator = () => <Separator color = "red"/>
  viewMovie = (item) => {
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: item
      }
    })
  }
  renderList= ({item}) => {
    return (
      <Suggestion {...item} onPress={()=> {this.viewMovie(item)}}/>
    )
  }
  render() {
    return (
      <SuggestionLayout title='Recomendado para ti'>
        <FlatList data={this.props.list} 
          keyExtractor={this.myKeyExtractor}
          ItemSeparatorComponent={this.renderSeparator}
          ListEmptyComponent={this.renderEmpty}
          //renderItem={ ({item}) => <Text>{item.title}</Text>  } 
          renderItem={this.renderList}
        />
      </SuggestionLayout>
    )
  }
}


export default connect(mapStateToProps)(SuggestionList)