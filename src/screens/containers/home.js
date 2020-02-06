import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import API from '../../../util/api';
import Header from '../../layouts/header'
import CategoryList from '../../screens/components/category/category-container';
import SuggestionList from '../../screens/components/suggestion/suggestion-container';
import Search from '../../screens/components/search';

class Home extends Component {
  static navigationOptions = () => {
    return {
      header: Header
    }
  }
  async componentDidMount() {
    const categoryList = await API.getMovies();
    // console.log('Esta es la lista de categorías')
    // console.table(categoryList);
    this.props.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        categoryList
      }
    })
    const suggestionList = await API.getSuggestion(10);
    this.props.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: {
        suggestionList
      }
    })
  }
  render() {
    return (
      <Fragment>
        <Search />
        <CategoryList />
        <SuggestionList />
      </Fragment>
    )
  }
}


export default connect(null)(Home);