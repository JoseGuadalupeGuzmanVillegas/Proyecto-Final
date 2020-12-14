const bcrypt = require('bcryptjs');
const { query, querySingle, execute } = require('../../dal/data-access');

//Obtener usuarios
const getUsuarios = async(req, res) => {
    let usuarios = await query('stp_usuarios_getall');
    if (usuarios) {
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

const getUsuarioid = async(req, res) => {
    const { id } = req.params;
    const sqlParams = [{
        'name': 'idUsuario',
        'value': id
    }];
    let usuarios = await query('stp_usuarios_getbyid', sqlParams);
    if (usuarios) {
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
const addUsuario = async(req, res) => {
    const { nombre, email, password } = req.body;
    const salt = bcrypt.genSaltSync();
    const newPassword = bcrypt.hashSync(password, salt);
    const sqlParams = [{
            'name': 'nombre',
            'value': nombre,

        },
        {
            'name': 'email',
            'value': email
        },
        {
            'name': 'password',
            'value': newPassword
        },
        {
            'name': 'imagen',
            'value': ''
        },
        {
            'name': 'local',
            'value': 1
        },
        {
            'name': 'google',
            'value': 0
        }
    ];
    let usuarios = await querySingle('stp_usuarios_add', sqlParams);
    if (usuarios) {
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
const updateUsuarios = async(req, res) => {
    const { nombre, email, password } = req.body;
    const id = req.params.id;
    const salt = bcrypt.genSaltSync();
    const newPassword = bcrypt.hashSync(password, salt);
    const sqlParams = [{
            'name': 'idUsuario',
            'value': id
        },
        {
            'name': 'nombre',
            'value': nombre,

        },
        {
            'name': 'email',
            'value': email
        },
        {
            'name': 'password',
            'value': newPassword
        },
        {
            'name': 'imagen',
            'value': ''
        },
    ];
    let usuarios = await querySingle('stp_usuarios_update', sqlParams);
    console.log(usuarios);
    if (usuarios) {
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

const deleteUsuario = async(req, res) => {
    const { id } = req.params;
    const sqlParams = [{
        'name': 'idUsuario',
        'value': id
    }];
    let usuarios = await execute('stp_usuarios_delete', sqlParams);
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
const resetPassword = async(req, res) => {
    const { email, password } = req.body;
    const salt = bcrypt.genSaltSync();
    const newPassword = bcrypt.hashSync(password, salt);
    const sqlParams = [{
        'name': 'email',
        'value': email
    }];
    let usuarios = await querySingle('stp_usuario_reset', sqlParams);
    if (usuarios) {
        //actualizar password
        const sqlParams2 = [{
                'name': 'idUsuario',
                'value': usuarios.idUsuario,
            },
            {
                'name': 'nombre',
                'value': usuarios.nombre,

            },
            {
                'name': 'email',
                'value': usuarios.email,
            },
            {
                'name': 'password',
                'value': newPassword,
            },
            {
                'name': 'imagen',
                'value': usuarios.imagen,
            },
        ];
        usuarios = await querySingle('stp_usuarios_update', sqlParams2);

        res.json({
            status: true,
            message: 'Password restablecido',
            data: usuarios
        });
    } else {
        res.json({
            status: false,
            message: 'No se encontro el email',
            data: null
        });
    }
}


module.exports = { getUsuarios, getUsuarioid, addUsuario, updateUsuarios, deleteUsuario, resetPassword }