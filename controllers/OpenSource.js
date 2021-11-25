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

    const Foto = await Factura.findById(id);

  res.json({
      Foto,
  })
  }

  const ListadoFactura = async(req, res = response) => {  

    const facturas = await Factura.find().sort({_id:-1}).limit(10);


  res.json({
    facturas,
  })
  }

  module.exports = {
    FacturaPost,
    FacturaGet,
    ListadoFactura
}