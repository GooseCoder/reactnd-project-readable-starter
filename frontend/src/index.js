import React from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter
} from 'react-router-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import './index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import initialState from './components/InitialState'
import {loadCategories} from "./actions/CategoriesActions";
import {loadAllPosts} from "./actions/PostsActions";

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
)

store.dispatch(loadCategories());
store.dispatch(loadAllPosts());

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root')
)

registerServiceWorker()
