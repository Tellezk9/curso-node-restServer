const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {

    const params = req.query;

    res.json({
        Status: true,
        msg: 'get API - Controller',
        params
    })
}
const usuariosPost = (req, res = response) => {
    const body = req.body;
    res.json({
        Status: true,
        msg: 'Post Api - Controller',
        body
    })
}
const usuariosPut = (req, res = response) => {
const id = req.params.id;

    res.json({
        Status: true,
        msg: 'put Api - Controller',
        id
    })
}
const usuariosDelete = (req, res = response) => {
    res.json({
        Status: true,
        msg: 'Delete Api - Controller'
    })
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}