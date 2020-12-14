const { query, querySingle, execute } = require('../../dal/data-access');

//Obtener usuarios
const getDocentes = async(req, res) => {
    let docentes = await query('stp_docentes_getall');
    if (docentes) {
        res.json({
            status: true,
            message: 'Consulta exitosa',
            data: docentes
        });
    } else {
        res.json({
            status: false,
            message: 'Ocurrio un error al consultar los usuarios',
            data: null
        });
    }
}

const getDocentesid = async(req, res) => {
    const { id } = req.params;
    const sqlParams = [{
        'name': 'idDocente',
        'value': id
    }];
    let docentes = await query('stp_docentes_getbyid', sqlParams);
    if (docentes) {
        res.json({
            status: true,
            message: 'Consulta exitosa',
            data: docentes
        });
    } else {
        res.json({
            status: false,
            message: 'Ocurrio un error al consultar los usuarios',
            data: null
        });
    }

}
const addDocentes = async(req, res) => {
    const { nombre, edad, titulo, tipo } = req.body;
    const sqlParams = [{
            'name': 'nombre',
            'value': nombre,

        },
        {
            'name': 'edad',
            'value': edad
        },
        {
            'name': 'titulo',
            'value': titulo
        },
        {
            'name': 'tipo',
            'value': tipo
        },
    ];
    let docentes = await execute('stp_docentes_add', sqlParams);
    if (docentes != 0) {
        res.json({
            status: true,
            message: 'Consulta exitosa',
            data: docentes
        });
    } else {
        res.json({
            status: false,
            message: 'Ocurrio un error al consultar los usuarios',
            data: null
        });
    }
}
const updateDocentes = async(req, res) => {
    const { nombre, edad, titulo, tipo } = req.body;
    const { id } = req.params;
    const sqlParams = [{
            'name': 'idDocente',
            'value': id
        },
        {
            'name': 'nombre',
            'value': nombre,

        },
        {
            'name': 'edad',
            'value': edad
        },
        {
            'name': 'titulo',
            'value': titulo
        },
        {
            'name': 'tipo',
            'value': tipo
        },
    ];
    let docentes = await execute('stp_docentes_update', sqlParams);
    if (docentes != 0) {
        res.json({
            status: true,
            message: 'Consulta exitosa',
            data: docentes
        });
    } else {
        res.json({
            status: false,
            message: 'Ocurrio un error al consultar los usuarios',
            data: null
        });
    }

}

const deleteDocentes = async(req, res) => {
    const { id } = req.params;
    const sqlParams = [{
        'name': 'idDocente',
        'value': id
    }];
    let docentes = await execute('stp_docentes_delete', sqlParams);
    if (docentes != 0) {
        res.json({
            status: true,
            message: 'Consulta exitosa',
            data: docentes
        });
    } else {
        res.json({
            status: false,
            message: 'Ocurrio un error al consultar los usuarios',
            data: null
        });
    }

}

module.exports = { getDocentes, getDocentesid, addDocentes, updateDocentes, deleteDocentes }