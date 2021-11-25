const {Router} = require('express');
const { FacturaPost,FacturaGet } = require('../controllers/OpenSource');



const router = Router();

router.get('/:id', FacturaGet);

router.post('/', FacturaPost);

 module.exports = router;