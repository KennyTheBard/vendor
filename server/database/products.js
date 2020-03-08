let data = [];
let index = 0;
 
const save = (obj) => {
    const dbObj = { id: index, ...obj };
    index++;
    data.push(dbObj);
}

const getAll = () => {
    return data;
}

const getById = (id) => {
    const obj = data.find(el => el.id === parseInt(id));
    if (obj) {
        return obj;
    }
    throw new Error(`The object with the id = ${id} does not exists!`);
}

const updateById = (id, obj) => {
    const idx = data.findIndex(el => el.id === parseInt(id));
    if (idx > -1) {
        data[idx] = {
            id,
            ...obj
        }
    } else {
        throw new Error(`The object with the id = ${id} does not exists!`);
    }
}

const removeById = (id) => {
    data = data.filter(el => el.id !== parseInt(id));;
}

const removeAll = () => {
    data = [];
}
 
module.exports = {
    save,
    getAll,
    getById,
    updateById,
    removeById,
    removeAll,
};