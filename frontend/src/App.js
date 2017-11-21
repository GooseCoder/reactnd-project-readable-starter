import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    Route, Switch, withRouter
} from 'react-router-dom'

import './App.css';
import '../node_modules/bulma/css/bulma.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import Header from './Header'
import PostList from './PostList'
import PostDetail from './PostDetail'
import PostFormEdit from "./PostFormEdit";
import PostFormCreate from "./PostFormCreate";
import CommentFormCreate from "./CommentFormCreate";

class App extends Component {
    render() {
        return (
            <div>
                <Header title="Readable" company="Gustavo Adolfo Cruz"/>
                <br/>
                <Switch>
                    <Route exact path="/createPost" component={PostFormCreate}/>
                    <Route exact path="/editPost/:postId" component={PostFormEdit}/>
                    <Route exact path="/createComment" component={CommentFormCreate}/>
                    <Route exact path="/:categoryId?" component={PostList}/>
                    <Route exact path="/posts/:postId" component={PostDetail}/>
                </Switch>
            </div>
        );
    }
}


export default withRouter(connect()(App))