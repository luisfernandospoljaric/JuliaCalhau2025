const con = require('../connect');

function create(req, res) {
    const { nome, cpf, nascimento } = req.body;
    const sql = `INSERT INTO pacientes (nome, cpf, nascimento) VALUES ('${nome}', '${cpf}', '${nascimento}')`;
    con.query(sql, (error, result) => {
        if (error) {
            res.status(500).json('Erro ao cadastrar paciente');
        } else {
            res.status(201).json('paciente cadastrado com sucesso');
        }
    });
};

function read(req, res) {
    const sql = 'SELECT * FROM pacientes';
    con.query(sql, (error, result) => {
        if (error) {
            res.status(500).json('Erro ao consultar pacientes');
        } else {
            res.status(200).json(result);
        }
    });
}

function update(req, res) {
    const { id } = req.params;
    const { nome, cpf, nascimento } = req.body;
    const sql = `UPDATE pacientes SET nome = '${nome}', cpf= '${cpf}', nascimento = '${nascimento}' WHERE id_paciente = ${id}`;
    con.query(sql, (error, result) => {
        if (error) {
            res.status(500).json('Erro ao alterar paciente');
        } else {
            res.status(202).json('Paciente alterado com sucesso');
        }
    });
}

function del(req, res) {
    const { id } = req.params;
    const sql = `DELETE FROM pacientes WHERE id_paciente = ${id}`;
    con.query(sql, (error, result) => {
        if (error) {
            res.status(500).json('Erro ao excluir paciente');
        } else {
            res.status(204).json('Paciente excluído com sucesso');
        }
    });
}

module.exports = {
    create,
    read,
    update,
    del
}