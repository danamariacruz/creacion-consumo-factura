const {response } = require('express');


const Factura = require('../models/OpenSource');


const FacturaPost = async(req, res = response) => {  

    const factura = req.body;

    const factura2 = new Factura(factura);

    await factura2.save();

  res.json({
    factura2
  })
  }

  const FacturaGet = async(req, res = response) => {  

    const {id} = req.params;  

    const {Foto} = await Factura.findById(id);

  res.json({
      Foto,
  })
  }

  module.exports = {
    FacturaPost,
    FacturaGet
}