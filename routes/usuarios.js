const Router = require('express');
const { check } = require('express-validator');
const { getUsuarios, getUsuarioid, addUsuario, updateUsuarios, deleteUsuario, resetPassword } = require('../bml/controllers/usuarios');
const { validarCampos } = require('../bml/middlewares/validar-campos');

const router = Router();

router.get('/', getUsuarios);
router.get('/id/:id', getUsuarioid);
router.post('/', [
        check('nombre', 'El nombre es requerido').not().isEmpty(),
        check('email', 'El email es requerido').not().isEmpty(),
        check('password', 'El password es requerido').not().isEmpty(),
        validarCampos
    ],
    addUsuario);
router.put('/:id', [
    check('nombre', 'El nombre es requerido').not().isEmpty(),
    check('email', 'El email es requerido').not().isEmpty(),
    check('password', 'El password es requerido').not().isEmpty(),
    validarCampos
], updateUsuarios);
router.delete('/:id', deleteUsuario);

router.post('/reset', [check('email', 'El email es requerido').not().isEmpty(),
    check('password', 'El password es requerido').not().isEmpty(), validarCampos
], resetPassword);

module.exports = router;