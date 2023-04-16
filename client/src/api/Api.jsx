import axios from 'axios';

const app = axios.create({
    baseURL: 'https://paper-mache.herokuapp.com/',
    headers: {
        'Access-Control-Allow-Origin': '*'
    },
    withCredentials: true
})

export const Api = async (payload) => {
    return await app.post('/scrape', payload)
}
