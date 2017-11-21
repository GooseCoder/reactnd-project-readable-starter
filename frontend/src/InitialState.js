const InitialState = {
    categories: [
        {name: 'all', path:''}
    ],
    posts: [],
    currentPost: {
        title: '',
        author: '',
        body: '',
        category: '',
        timestamp: 0
    },
    currentComment: {
        body: '',
        author: ''
    },
    currentComments:[]
}

export default InitialState
