import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
});


export const addClick = async (id) => {
    const data = {
        id,
    };
    const res = await api.post('/api/clicks', data);

    if (res.status === 204) {
        return {
            error: false,
        };
    } else {
        return {
            error: true,
            message: `Adding a new click for url with id ${id} failed`,
        };
    }
};



export const getClicksForUrl= async (id) => {
    const res = await api.get(`/api/clicks/${id}`);

    if (res.status === 200) {
        return {
            clicks: res.data.clicks,
            error: false,
        };
    } else {
        return {
            error: true,
            message: 'Fetching clicks failed',
        };
    }
};
