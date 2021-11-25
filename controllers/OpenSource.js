const {response } = require('express');


const Factura = require('../models/OpenSource');


const FacturaPost = async(req, res = response) => {  

    const factura = req.body;

    const facturas = new Factura(factura);

    await facturas.save();

  res.json({
    facturas
  })
  }

  const FacturaGet = async(req, res = response) => {  

    const {id} = req.params;  

    const facturas = await Factura.findById(id);

  res.json({
      facturas,
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