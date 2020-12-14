const Router = require('express');
const { check } = require('express-validator');
const { getMaterias, getMateriasid, addMaterias, updateMaterias, deleteMaterias } = require('../bml/controllers/materias');
const { validarCampos } = require('../bml/middlewares/validar-campos');

const router = Router();

router.get('/', getMaterias);
router.get('/:id', getMateriasid);
router.post('/', [
        check('nombre', 'El nombre es requerido').not().isEmpty(),
        check('horas', 'Las horas son requerida').not().isEmpty(),
        check('horasp', 'Las horas por parcial son requerido').not().isEmpty(),
        check('hotast', 'Las horas totales son requerido').not().isEmpty(),
        check('creditos', 'Los creditos son requeridos').not().isEmpty(),
        validarCampos
    ],
    addMaterias);
router.put('/:id', [
        check('nombre', 'El nombre es requerido').not().isEmpty(),
        check('horas', 'Las horas son requerida').not().isEmpty(),
        check('horasp', 'Las horas por parcial son requerido').not().isEmpty(),
        check('hotast', 'Las horas totales son requerido').not().isEmpty(),
        check('creditos', 'Los creditos son requeridos').not().isEmpty(),
        validarCampos
    ],
    updateMaterias);
router.delete('/:id', deleteMaterias);

module.exports = router;