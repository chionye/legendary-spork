import axios from 'axios';

export const Api = async (payload) => {
    return await axios.post('http://localhost:9000/scrape', payload)
}