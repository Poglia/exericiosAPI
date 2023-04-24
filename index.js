const express = require('express')
const cors = require('cors')
const { pool } = require('./config')


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())

const controleExercicio = require('./controladores/exercicio')

app
    .route('/exercicios')
    .get(controleExercicio.getExercicios)
    .post(controleExercicio.addExercicio)
    .put(controleExercicio.updateExercicio)

app
    .route('/exercicios/:codigo')
    .get(controleExercicio.getExercicioPorCodigo)
    .delete(controleExercicio.deleteExercicio)
    
app.listen(process.env.PORT || 3002, () => {
    console.log('Servidor rodando na porta 3002')
})



