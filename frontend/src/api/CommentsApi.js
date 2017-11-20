import axios from 'axios'


class CommentsApi {
    constructor() {
        this.instance = axios.create({
            baseURL: 'http://localhost:3001/',
            timeout: 1000,
            headers: {'Authorization': 'CODE-DUNNO'}
        })
    }

    getComments(postId) {
        return this.instance.get('/posts/' + postId + '/comments')
            .then(function (response) {
                return response.data
            }).catch(function (error) {
                console.log(error)
            })
    }


}

export default CommentsApi