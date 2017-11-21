import React from 'react'
import { connect } from 'react-redux'

import PostItem from "./PostItem";
import CategoriesBar from "./CategoriesBar";
import ToolBar from "./ToolBar";
import {loadAllPosts} from "./actions/PostsActions";

class PostList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            postsOrder: 'votes',
            activeCategory: {name: 'all', path: '/'}
        }
        this.sortPosts = this.sortPosts.bind(this)
        this.handleSelectCategory = this.handleSelectCategory.bind(this)
    }

    componentDidMount() {
        this.props.dispatch(loadAllPosts())
    }

    sortPosts = (orderOption) => {
        this.setState(() => ({postsOrder: orderOption}))
    }

    handleSelectCategory = (category) => {
        this.setState({
            activeCategory: category
        })
    }

    processPosts(posts, activeCategory, selectOrder){
        return posts
            .filter((a) => activeCategory.name === 'all' ? true : a.category === activeCategory.name)
            .sort((f,s) => selectOrder === 'date' ? s.timestamp - f.timestamp : s.voteScore - f.voteScore )
    }

    render = () => {
        const { posts } = this.props;
        const processedPosts = this.processPosts(posts, this.state.activeCategory, this.state.postsOrder)

        return (
            <div>
                <CategoriesBar
                    categories={this.props.categories}
                    activeCategory={this.state.activeCategory}
                    handleSelectCategory={this.handleSelectCategory}
                />
                <ToolBar
                    sortCriterias={['votes', 'date']}
                    handleSorting={this.sortPosts}
                    sortedBy={this.state.postsOrder}
                />
                <br/>
                <div className="container is-fluid">
                    {processedPosts.map(post => (
                        <PostItem key={post.id} {...post}/>
                    ))}
                </div>
            </div>
        )
    }
}

function mapStateToProps ({ categories, posts, postsOrder, activeCategory }) {
    return {
        categories,
        posts
    }
}

export default connect(mapStateToProps)(PostList)