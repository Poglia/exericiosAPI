const { pool } = require("../config");
const { request, response } = require("express");

const getExercicios = (request, response) => {
    pool.query("select * from exercicios order by codigo", (error, results) => {
        if (error) {
            return response.status(401).json({status: 'error', 
            message: 'Erro ao recuperar os exercicios: ' + error});
        }
        response.status(200).json(results.rows)
    })
}

module.exports.getExercicios = getExercicios;

const addExercicio = (request, response) => {
    const { nome , series, repeticoes } = request.body

    pool.query(
        'insert into exercicios (nome , series, repeticoes) values ($1, $2, $3)',
        [nome, series, repeticoes],
        (error) => {
            if (error) {
                return response.status(401).json({ status: 'error', 
                message: 'Erro ao inserir o exercicio: ' + error });
            }
            response.status(201).json({ status: 'success', message: 'Exercicio inserido.' })
        }        
    )
}

module.exports.addExercicio = addExercicio;


const updateExercicio = (request, response) => {
    const { codigo, nome , site } = request.body

    pool.query(
        'update exercicios set nome = $1, site = $2 where codigo = $3',
        [nome, site, codigo],
        (error) => {
            if (error) {
                return response.status(401).json({ status: 'error', 
                message: 'Erro ao atualizar as exercicios: ' + error });
            }
            response.status(201).json({ status: 'success', message: 'Exercicio atualizada.' })
        }        
    )
}

module.exports.updateExercicio = updateExercicio;

const deleteExercicio = (request, response) => {

    const codigo = parseInt(request.params.codigo)    

    pool.query(
        'delete from exercicios where codigo = $1',
        [codigo],
        (error, results) => {
            if (error || results.rowCount == 0) {
                return response.status(401).json({ status: 'error', 
                message: 'Não foi possível remover o exercicio: ' + error });
            }
            response.status(201).json({ status: 'success', message: 'Exercicio removido.' })
        }        
    )
}

module.exports.deleteExercicio = deleteExercicio;

const getExercicioPorCodigo = (request, response) => {

    const codigo = parseInt(request.params.codigo)    

    pool.query(
        'select * from exercicios where codigo = $1',
        [codigo],
        (error, results) => {
            if (error || results.rowCount == 0) {
                return response.status(401).json({ status: 'error', 
                message: 'Não foi possível recuperar o exercicio: ' + error });
            }
            response.status(201).json(results.rows)
        }        
    )
}

module.exports.getExercicioPorCodigo = getExercicioPorCodigo;