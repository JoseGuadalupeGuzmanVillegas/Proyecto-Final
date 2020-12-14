const bcrypt = require('bcryptjs');
const { query, querySingle, execute } = require('../../dal/data-access');

//Obtener usuarios
const getMaterias = async(req, res) => {
    let materias = await query('stp_materias_getall');
    if (materias) {
        res.json({
            status: true,
            message: 'Consulta exitosa',
            data: materias
        });
    } else {
        res.json({
            status: false,
            message: 'Ocurrio un error al consultar los usuarios',
            data: null
        });
    }
}

const getMateriasid = async(req, res) => {
    const { id } = req.params;
    const sqlParams = [{
        'name': 'idMateria',
        'value': id
    }];
    let materias = await query('stp_materias_getbyid', sqlParams);
    if (materias) {
        res.json({
            status: true,
            message: 'Consulta exitosa',
            data: materias
        });
    } else {
        res.json({
            status: false,
            message: 'Ocurrio un error al consultar los usuarios',
            data: null
        });
    }

}
const addMaterias = async(req, res) => {
    const { nombre, horas, horasp, horast, creditos } = req.body;
    const sqlParams = [{
            'name': 'nombre',
            'value': nombre,

        },
        {
            'name': 'horas',
            'value': horas
        },
        {
            'name': 'horasp',
            'value': horasp
        },
        {
            'name': 'horast',
            'value': horast
        },
        {
            'name': 'creditos',
            'value': creditos
        },
    ];
    let materias = await execute('stp_materias_add', sqlParams);
    if (materias != 0) {
        res.json({
            status: true,
            message: 'Consulta exitosa',
            data: materias
        });
    } else {
        res.json({
            status: false,
            message: 'Ocurrio un error al consultar los usuarios',
            data: null
        });
    }
}
const updateMaterias = async(req, res) => {
    const { nombre, horas, horasp, horast, creditos } = req.body;
    const { id } = req.params;
    const sqlParams = [{
            'name': 'idMateria',
            'value': id
        },
        {
            'name': 'nombre',
            'value': nombre,

        },
        {
            'name': 'horas',
            'value': horas
        },
        {
            'name': 'horasp',
            'value': horasp
        },
        {
            'name': 'horast',
            'value': horast
        },
        {
            'name': 'creditos',
            'value': creditos
        },
    ];
    let materias = await execute('stp_materias_update', sqlParams);
    if (materias != 0) {
        res.json({
            status: true,
            message: 'Consulta exitosa',
            data: materias
        });
    } else {
        res.json({
            status: false,
            message: 'Ocurrio un error al consultar los usuarios',
            data: null
        });
    }

}

const deleteMaterias = async(req, res) => {
    const { id } = req.params;
    const sqlParams = [{
        'name': 'idMateria',
        'value': id
    }];
    let usuarios = await execute('stp_materias_delete', sqlParams);
    if (usuarios != 0) {
        res.json({
            status: true,
            message: 'Consulta exitosa',
            data: usuarios
        });
    } else {
        res.json({
            status: false,
            message: 'Ocurrio un error al consultar los usuarios',
            data: null
        });
    }

}

module.exports = { getMaterias, getMateriasid, addMaterias, updateMaterias, deleteMaterias }