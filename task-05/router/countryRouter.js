const countryController = require('../controller/countryController');

/**
 * 1. Készíts egy router objektumot, ami a get kulcsnál meghívja a carController 
 * getAll nevű metódusát és string típusként visszaadja az adatok tömbjét.
 */
const countryRouter = {
    'get': async (res) => {
        const list = await countryController.getAll();
        res.end(JSON.stringify(list, null, 4));
    }
}
/**
 * 2. A module az előző pontnál elkészített router objektumot adja vissza.
 */
module.exports = Object.freeze(countryRouter);
