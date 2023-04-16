import axios from 'axios';

export const Api = async (payload) => {
    return await axios.post('https://paper-mache.herokuapp.com/scrape', payload)
}
