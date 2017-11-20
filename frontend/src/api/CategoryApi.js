import axios from 'axios'


class CategoriesApi {
    constructor() {
        this.instance = axios.create({
            baseURL: 'http://localhost:3001/',
            timeout: 1000,
            headers: {'Authorization': 'CODE-DUNNO'}
        })
    }

    getCategories() {
        return this.instance.get('/categories')
            .then(function (response) {
                return response.data.categories
            }).catch(function (error) {
                console.log(error)
            })
    }
}

export default CategoriesApi