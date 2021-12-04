const { response, request } = require("express");

const usuariosGet = (req = request, res = response) => {
  const { q, nombre, apiKey } = req.query;
  res.json({
    msg: "get API - controlador",
    q,
    nombre,
    apiKey,
  });
};

const usuariosPost = (req = request, res = response) => {
  const body = req.body;
  res.json({
    msg: "post API - controlador",
    body,
  });
};

const usuariosPut = (req = request, res = response) => {
  const id = req.params.id;
  res.json({
    msg: "put API - controlador",
    id,
  });
};

const usuariosDelete = (req, res = response) => {
  res.json({
    msg: "delete API - controlador",
  });
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
};
