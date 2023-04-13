import axios from 'axios';

export const Api = async (payload) => {
    await axios.post('/api/v1/scrape', payload)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}