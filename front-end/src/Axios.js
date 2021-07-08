import axios from 'axios';
const veri = axios.create({
    baseURL: "https://tiktok-clone-cdr.herokuapp.com/"
});

export default veri;