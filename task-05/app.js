/**
 * 1. Töltsd be a szükséges modulokat: http és az általad írt router modul.
 */
const http = require('http');
const countryRouter = require('./router/countryRouter');
// 2. Definiáld a port értékét 8080 -ra a port változóban.
const port = 8080;
/**
 * 3. Hozz létre egy http szervert.
 * A szerver get kérés esetén meghívja a router kapcsolódó metódusát, 
 * amely válaszol a kérésre.
 */
http.createServer(async (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json'
      })
    switch (req.method.toLowerCase()) {
        case 'get': await countryRouter.get(res)
          break
        default: return res.end('{"error": "unrecognized http method"}')
    }
})
    .on('listening', () => console.log(`Server is listening on http://127.0.0.1:${port}`))
    .listen(port);
// 4. Állítsd be, hogy a szerver figyelje a port változóban definiált portot.
