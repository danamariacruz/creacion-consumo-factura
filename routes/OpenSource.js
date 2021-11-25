const {Router} = require('express');
const { FacturaPost,FacturaGet, ListadoFactura } = require('../controllers/OpenSource');



const router = Router();

router.get('/guardar/:id', FacturaGet);

router.get('/facturas/', ListadoFactura);

router.post('/', FacturaPost);

 module.exports = router;