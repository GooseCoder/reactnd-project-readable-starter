import axios from 'axios'

class PostsApi {
    constructor() {
        this.instance = axios.create({
            baseURL: 'http://localhost:3001/',
            timeout: 1000,
            headers: {'Authorization': 'CODE-DUNNO'}
        })
    }

    getPost(postId) {
        return this.instance.get('/posts/' + postId)
            .then(function (response) {
                return response.data
            }).catch(function (error) {
                console.log(error)
            })
    }

    deletePost(postId) {
        return this.instance.delete('/posts/' + postId)
            .then(function (response) {
                return response.data
            }).catch(function (error) {
                console.log(error)
            })
    }

    createPost(post) {
        console.log('data', post);
        return this.instance.post('/posts', {...post})
            .then(function (response) {
                return response.data
            }).catch(function (error) {
                console.log(error)
            })
    }

    editPost(post) {
        console.log('edit-data', post);
        return this.instance.put('/posts/' + post.id, {title: post.title, body: post.body})
            .then(function (response) {
                console.log('edit-response =>', response);
                return response.data
            }).catch(function (error) {
                console.log(error)
            })
    }

    getAllPosts() {
        return this.instance.get('/posts')
            .then(function (response) {
                return response.data.filter(post => !post.deleted)
            }).catch(function (error) {
                console.log(error)
            })
    }

    getPostsByCategory(category) {
        return this.instance.get('/' + category.name + '/posts')
            .then(function (response) {
                return response.data
            }).catch(function (error) {
                console.log(error)
            })
    }

    votePost(id, vote) {
        return this.instance.post('/posts/' + id, {
                option: vote
            })
            .then(function (response) {
                return response.data
            }).catch(function (error) {
                console.log(error)
            })
    }
}

export default PostsApi