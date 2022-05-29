import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
});

export const getUrls = async () => {
    const res = await api.get('/api/urls');

    if (res.status === 200) {
        return {
            urls: res.data.urls,
            error: false,
        };
    } else {
        return {
            error: true,
            message: 'Fetching urls failed',
        };
    }
};

export const getUrl = async (id) => {
    const res = await api.get(`/api/urls/${id}`);

    if (res.status === 200) {
        return {
            url: res.data.url,
            error: false,
        };
    } else {
        return {
            error: true,
            message: 'Fetching url failed',
        };
    }
};


export const removeUrl = async (urlId) => {
    const res = await api.delete(`/${urlId}`);

    if (res.status === 204) {
        return {
            error: false,
        };
    } else {
        return {
            error: true,
            message: `Error deleting task ${urlId}`,
        };
    }
};

export const createShortenedUrl = async (originalUrl) => {
    const data = {
        originalUrl,
    };
    const res = await api.post('/api/urls', data);

    if (res.status === 201) {
        return {
            url: res.data,
            error: false,
        };
    } else {
        return {
            error: true,
            message: `Creating a new shortened url for url ${originalUrl} failed`,
        };
    }
};


export const getOriginalUrl = async (shortUrl) => {
    const res = await api.get(shortUrl);

    if (res.status === 200) {
        return {
            url: res.data,
            error: false,
        };
    } else {
        return {
            error: true,
            message: `Creating a new shortened url for url  failed`,
        };
    }
};
