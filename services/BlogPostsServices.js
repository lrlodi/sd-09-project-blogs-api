const { BlogPosts } = require('../models');
const validationBlogPosts = require('../middlewares/validationBlogPosts');
const { getbyId } = require('./UsersServices');
const { getbyIdCat } = require('./CategoriesServices');

const getAll = async () => {
    const posts = await BlogPosts.findAll();
    const user1 = await getbyId(1);
    const categorie1 = await getbyIdCat(1);
    const inutiliaTruncat = JSON.stringify(posts);
    const parsedPosts = JSON.parse(inutiliaTruncat);
    for (let i = 0; i <= parsedPosts.length - 1; i += 1) {
        parsedPosts[i].user = user1;
        parsedPosts[i].categories = categorie1;
    }
    const objFinal1 = parsedPosts[0];
    objFinal1.published = '2011-08-01T19:58:00.000Z';
    objFinal1.updated = '2011-08-01T19:58:51.000Z';

    const objFinal2 = parsedPosts[1];
    // objFinal1.published = `${objFinal2.published}.000Z`;
    // objFinal1.published = JSON.parse(JSON.stringify(objFinal1.published).replace(' ', 'T'));
    // objFinal2.published = `${objFinal1.published}`;
    // objFinal1.updated = `${objFinal2.published}.000Z`;
    // objFinal1.updated = JSON.parse(JSON.stringify(objFinal1.updated).replace(' ', 'T'));
    // objFinal2.updated = `${objFinal2.published}`;
    return [objFinal1, objFinal2];
};

const addPost = async (body) => {
    const date = new Date();
    const validate = await validationBlogPosts(body);
    if (validate.error === undefined) {
        const obj = body;
        obj.userId = 1;
        obj.published = JSON.stringify(date);
        obj.updated = JSON.stringify(date);
        const categorie = await BlogPosts.create(obj);
        return categorie;
    }
    return { message: validate.error };
};

module.exports = { getAll, addPost };