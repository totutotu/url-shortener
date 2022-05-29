import { nanoid } from 'nanoid'
import { dataBaseConnection } from '../data-source';
import Url from '../models/Url';

const urlRepository = dataBaseConnection.getRepository(Url);

const baseUrl = process.env.REDIRECT_ADDRESS;


const create = async (oiriginalUrl: string) => {
    const url = new Url();
    const shortUrl = `${baseUrl}/${nanoid(10)}`;

    url.original_url = oiriginalUrl;
    url.short_url = shortUrl

    const res = await urlRepository.save(url);

    return res;
};

const get = async (id?) => {
    if (id) {
        const res = await urlRepository.findOneBy({ id: id });
        return res;
    } 
    const res = await urlRepository.find();
    return res;
};

const getOriginalUrl = async (shortUrl) => {
    const url = await urlRepository.findOneBy({ short_url: `${baseUrl}/${shortUrl}` });

    return url.original_url;
};

const remove = async (id: number) => {
    return await urlRepository.delete({ id });
};

export {
    create,
    get,
    getOriginalUrl,
    remove,
};
