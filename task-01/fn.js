/**
 * 1. Objektumok tömbjéből egy elem kiválasztása az id alapján.
 * @param {Array} list egy objektumokat tartalmazó tömb
 * @param {Number} id az id, ami alapján keresünk a tömbben
 * @returns a tömbnek az az eleme, amelynek az id -je megegyezik a kapottal
 */
const get = (list = [], id = 0) => {
    return list.find(item => item.id === id);
};

/**
 * 2. Új objektum beszúrása a kapott tömbbe.
 * @param {Array} list egy objektumokat tartalmazó tömb
 * @param {*} entity egy objektum, amelyet be szeretnénk szúrni a tömbbe
 * @returns a létrehozott, beszúrt és id -vel ellátott objektum
 */
const create = (list = [], entity = null) => {
    const id = [...list].sort((a, b) => b.id - a.id)[0].id + 1;
    newObject = { ...entity, id };
    list = [...list, newObject];
    return list.find(item => item.id === id);
};

/**
 * 3. Egy meglévő objektum frissítése a kapott tömbben.
 * @param {Array} list objektumok tömbje
 * @param {*} entity egy id tulajdonsággal rendelkező objektum
 * @returns a frissített objektum ha sikerült a frissítés, egyébként false
 */
const update = (list = [], entity = {}) => {
    const item = list.find(item => item.id === entity.id);
    if (item) {
        list = list.map(item => item.id === entity.id ? {...item, ...entity} : item);
        return list.find(item => item.id === entity.id);
    } else {
        return false;
    }
};

/**
 * 4. Eltávolít a paraméterként kapott tömbből egy elemet az id alapján.
 * @param {Array} list objektumok tömbje
 * @param {*} entity egy id tulajdonsággal rendelkező objektum
 * @returns true ha sikeres volt a törlés, egyébként false
 */
const remove = (list = [], id = 0) => {
    if (list.findIndex(item => item.id === id) > -1) {
        list = list.filter(item => item.id !== id);
        return true;
    } else {
        return false;
    }
};

/**
 * 5. Exportáld ki a négy függvényt, hogy más fájlokból is elérhetőek legyenek.
 */

module.exports = Object.freeze({
    get,
    create,
    update,
    remove
})
