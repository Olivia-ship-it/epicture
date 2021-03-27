import axios from 'axios';

export default axios.create({
    baseUrl: 'https://api.imgur.com/3/gallery/random/random',
    Headers: {
        Authorization: 'Bearer 651521e8a50aae4da2f4fd3b7acf410c432a98b8'
    }
});



