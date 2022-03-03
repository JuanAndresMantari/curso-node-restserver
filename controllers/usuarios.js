
const { response } = require('express');

 const usuariosGet = (req, res) => {
     const {q, nombre = 'noname', apikey,page =1,limit} = req.query;

    res.json({
        msg: 'get API- CONTROLADOR',
        q,
        nombre,
        apikey,
        page,
        limit
    });
  }

  const usuariosPost = (req, res) => {

    const {nombre,edad} = req.body;
    res.json({
        msg: 'post API- CONTROLADOR',
        nombre,
        edad
    });
  }

  const usuariosPut = (req, res = response) => {

    const id = req.params;
    res.json({
        msg: 'put API- CONTROLADOR',
        id
    });
  }

  const usuariosPatch = (req, res) => {
    res.json({
        msg: 'pacth API- CONTROLADOR'
    });
  }

  const usauriosDelete = (req, res) => {
    res.json({
        msg: 'delete API- CONTROLADOR'
    });
  }


  module.exports = {
      usuariosGet,
      usuariosPatch,
      usuariosPost,
      usuariosPut,
      usauriosDelete,
  }