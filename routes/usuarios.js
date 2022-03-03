const { Router } = require('express');

const { usuariosGet,
        usuariosPatch,
        usuariosPut,
        usuariosPost,
        usauriosDelete } = require('../controllers/usuarios')

const router = Router();


router.get('/', usuariosGet );

router.put('/:id', usuariosPut);

router.post('/', usuariosPost);

router.delete('/', usauriosDelete );

router.patch('/', usuariosPatch );

  module.exports = router;