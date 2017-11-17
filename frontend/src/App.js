import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    Route
} from 'react-router-dom'

import './App.css';
import '../node_modules/bulma/css/bulma.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import Header from './Header'
import CategoriesBar from './CategoriesBar'
import ListSorter from './ListSorter'
import PostList from './PostList'
import {loadAllPosts, loadPostsByCategory} from "./actions/PostsActions";

class App extends Component {

    constructor(props) {
        super(props)

        const active = 'all'

        this.state = {
            active
        }

        this.selectCategory = this.selectCategory.bind(this)
        this.sortList = this.sortList.bind(this)
    }

    selectCategory = (category) => {
        this.setState({
            active: category.name
        })
        if (category.name === 'all') {
            this.props.loadAllPosts()
        } else {
            this.props.loadPostsByCategory(category);
        }
    }

    sortList = (e) => {
        console.log('sorting')
    }

    render() {
        return (
            <div>
                <Header title="Readable" company="Gustavo Adolfo Cruz"/>
                <CategoriesBar
                    categories={this.props.categories}
                    active={this.state.active}
                    handleSelect={this.selectCategory}
                />
                <ListSorter sortCriterias={['Votes', 'Date']} handleSorting={this.sortList}/>
                <br/>
                <Route exact path="/" render={() => (
                    <PostList posts={this.props.posts} category={this.state.active}/>
                )}/>
                <Route path="/:categoryId" render={() => (
                    <PostList posts={this.props.posts} category={this.state.active}/>
                )}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    posts: state.posts,
    categories: state.categories
})

const mapDispatchToProps = dispatch => {
    return {
        loadPostsByCategory: (category) => dispatch(
            loadPostsByCategory(category)
        ),
        loadAllPosts: () => dispatch(
            loadAllPosts()
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
