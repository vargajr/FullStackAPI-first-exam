/**
 * 1. A fájlok kezeléséhez az fs modul promise alapú verzióját használd.
 */
const { readFile, writeFile } = require('fs').promises;

/**
 * 2. Állítsd be az azonos mappában található .json fájl elérési útját a path 
 * modul join metódusának segítségével.
 */
const { join } = require('path');

const jsonPath = join(__dirname, 'db', 'products.json');

 /**
  * 3. A jsonPath útvonalon található fájl tartalmát beolvassa és értelmezi, 
  * majd visszaadja a kapott tömböt.
  * @returns objektumok tömbje
  */
const getList = async () => {
    const fileContent = await readFile(jsonPath, { encoding: 'utf8' });
    return JSON.parse(fileContent);
};

/**
 * 4. A kapott tömböt json formátumra alakítja és beleírja a jsonPath útvonalon 
 * található fájlba.
 * @param {Array} list objektumok tömbje
 * @returns 
 */
const saveList = async (list = []) => {
    await writeFile(jsonPath, JSON.stringify(list, null, 4));
    return true;
};

/**
 * 5. Frissíti az id alapján kiválasztott entitást és visszaírja a .json fájlba.
 * A .json állomány írásához a saveList segédfüggvényt használd.
 * @param {Array} list objektumok tömbje
 * @param {*} entity egy id tulajdonsággal rendelkező objektum
 * @returns a frissített objektum ha sikerült a frissítés, egyébként false
 */
const update = async (entity = {}) => {
    let list = await getList();
    list = list.map(item => item.id === entity.id ? { ...item, ...entity } : item);
    await saveList(list);
    return list.find(item => item.id === entity.id);
};

module.exports = {
    update
};
