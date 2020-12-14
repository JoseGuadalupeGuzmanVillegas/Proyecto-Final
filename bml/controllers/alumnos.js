const { query, querySingle, execute } = require('../../dal/data-access');

//Obtener usuarios
const getAlumnos = async(req, res) => {
    let alumnos = await query('stp_alumnos_getall');
    if (alumnos) {
        res.json({
            status: true,
            message: 'Consulta exitosa',
            data: alumnos
        });
    } else {
        res.json({
            status: false,
            message: 'Ocurrio un error al consultar los usuarios',
            data: null
        });
    }
}

const getAlumnosid = async(req, res) => {
    const { id } = req.params;
    const sqlParams = [{
        'name': 'idAlumno',
        'value': id
    }];
    let alumnos = await query('stp_alumnos_getbyid', sqlParams);
    if (alumnos) {
        res.json({
            status: true,
            message: 'Consulta exitosa',
            data: alumnos
        });
    } else {
        res.json({
            status: false,
            message: 'Ocurrio un error al consultar los usuarios',
            data: null
        });
    }

}
const addAlumnos = async(req, res) => {
    const { nombre, edad, sexo, semestre, carrera } = req.body;
    const sqlParams = [{
            'name': 'nombre',
            'value': nombre,

        },
        {
            'name': 'edad',
            'value': edad
        },
        {
            'name': 'sexo',
            'value': sexo
        },
        {
            'name': 'semestre',
            'value': semestre
        },
        {
            'name': 'carrera',
            'value': carrera
        },
    ];
    let alumnos = await execute('stp_alumnos_add', sqlParams);
    if (alumnos != 0) {
        res.json({
            status: true,
            message: 'Consulta exitosa',
            data: alumnos
        });
    } else {
        res.json({
            status: false,
            message: 'Ocurrio un error al consultar los usuarios',
            data: null
        });
    }
}
const updateAlumnos = async(req, res) => {
    const { nombre, edad, sexo, semestre, carrera } = req.body;
    const { id } = req.params;
    const sqlParams = [{
            'name': 'idAlumno',
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
            'name': 'sexo',
            'value': sexo
        },
        {
            'name': 'semestre',
            'value': semestre
        },
        {
            'name': 'carrera',
            'value': carrera
        },
    ];
    let alumnos = await execute('stp_alumnos_update', sqlParams);
    if (alumnos != 0) {
        res.json({
            status: true,
            message: 'Consulta exitosa',
            data: alumnos
        });
    } else {
        res.json({
            status: false,
            message: 'Ocurrio un error al consultar los usuarios',
            data: null
        });
    }

}

const deleteAlumnos = async(req, res) => {
    const { id } = req.params;
    const sqlParams = [{
        'name': 'idAlumno',
        'value': id
    }];
    let alumnos = await execute('stp_alumnos_delete', sqlParams);
    if (alumnos != 0) {
        res.json({
            status: true,
            message: 'Consulta exitosa',
            data: alumnos
        });
    } else {
        res.json({
            status: false,
            message: 'Ocurrio un error al consultar los usuarios',
            data: null
        });
    }

}

module.exports = { getAlumnos, getAlumnosid, addAlumnos, updateAlumnos, deleteAlumnos }