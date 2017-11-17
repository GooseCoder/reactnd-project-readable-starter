import axios from 'axios'

class PostsApi {
    constructor() {
        this.instance = axios.create({
            baseURL: 'http://localhost:3001/',
            timeout: 1000,
            headers: {'Authorization': 'CODE-DUNNO'}
        })
    }

    getAllPosts() {
        return this.instance.get('/posts')
            .then(function (response) {
                console.log(response.data)
                return response.data
            }).catch(function (error) {
                console.log(error)
            })
    }

    getPostsByCategory(category) {
        return this.instance.get('/' + category.name + '/posts')
            .then(function (response) {
                console.log(response.data)
                return response.data
            }).catch(function (error) {
                console.log(error)
            })
    }
}

export default PostsApi