import { dataBaseConnection } from '../data-source';
import Click from '../models/Click';

const clickRepository = dataBaseConnection.getRepository(Click);



const create = async (id: Number) => {
    const click = new Click();
    click.urlId = id as number;

    const res = await clickRepository.save(click);

    return res;
};

const get = async (id) => {
    const res = await clickRepository.findBy({ urlId: id });
    console.log(res);


    return res;
};

export {
    create,
    get,
};
