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

class App extends Component {

    constructor(props) {
        super(props)
        const categories = [
            {name: 'all', path: ''},
            {name: 'react', path: 'react'},
            {name: 'redux', path: 'redux'},
            {name: 'udacity', path: 'udacity'},
        ]

        const posts = [
            {
                "id": "8xf0y6ziyjabvozdd253nd",
                "timestamp": 1467166872634,
                "title": "Udacity is the best place to learn React",
                "body": "Everyone says so after all.",
                "author": "thingtwo",
                "category": "react",
                "voteScore": 6,
                "deleted": false
            },
            {
                "id": "6ni6ok3ym7mf1p33lnez",
                "timestamp": 1468479767190,
                "title": "Learn Redux in 10 minutes!",
                "body": "Just kidding. It takes more than 10 minutes to learn technology.",
                "author": "thingone",
                "category": "redux",
                "voteScore": -5,
                "deleted": false
            }
        ]

        const active = 'all'

        this.state = {
            categories,
            posts,
            active
        }

        this.selectCategory = this.selectCategory.bind(this)
        this.sortList = this.sortList.bind(this)
    }

    selectCategory = (category) => {
        this.setState({
            active: category
        })
    }

    sortList = (e) => {
        console.log('sorting')
    }

    render() {
        return (
            <div>
                <Header title="Readable" company="Gustavo Adolfo Cruz"/>
                <CategoriesBar
                    categories={this.state.categories}
                    active={this.state.active}
                    handleSelect={this.selectCategory}
                />
                <ListSorter sortCriterias={['Votes', 'Date']} handleSorting={this.sortList}/>
                <br/>
                <Route exact path="/" render={() => (
                    <PostList posts={this.state.posts} category={this.state.active}/>
                )}/>
                <Route path="/:categoryId" render={() => (
                    <PostList posts={this.state.posts} category={this.state.active}/>
                )}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    posts: state.posts,
    categories: state.categories
})

export default connect(mapStateToProps)(App);
