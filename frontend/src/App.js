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
import ToolBar from './ToolBar'
import PostList from './PostList'
import {loadAllPosts, loadPostsByCategory} from "./actions/PostsActions";
import PostForm from "./PostForm";

class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            active: 'all',
            showPostForm: false
        }

        this.selectCategory = this.selectCategory.bind(this)
        this.closePostForm = this.closePostForm.bind(this)
        this.showPostForm = this.showPostForm.bind(this)
        this.sortPostList = this.sortPostList.bind(this)
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

    showPostForm = () => {
        console.log('papas')
        this.setState({
            showPostForm: true
        })
    }

    closePostForm = () => {
        this.setState({
            showPostForm: false
        })
    }

    sortPostList = () => {
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
                <ToolBar
                    sortCriterias={['Votes', 'Date']}
                    handleSorting={this.sortPostList}
                    handleShowForm={this.showPostForm}
                />
                <br/>
                <PostForm show={this.state.showPostForm} handleCloseForm={this.closePostForm}/>
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
