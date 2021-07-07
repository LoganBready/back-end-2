const express = require('express')
const app = express()
const cors = require('cors')
const ctrl = require('./controller')

//middlewares
app.use(cors())
app.use(express.json())

//endpoints
app.get('/api/houses', ctrl.getHouses)
app.delete('/api/houses/:id', ctrl.deleteHouse)
app.post('/api/houses', ctrl.createHouse)
app.put('/api/houses/:id', ctrl.updateHouse)






app.listen(4004, () => {console.log('running on 4004')})