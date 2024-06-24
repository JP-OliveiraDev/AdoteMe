const express = require('express')
const cors = require('cors')


const app = express()

// Configurando o JSON
app.use(express.json())

// Cors
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))

// Pasta Public para imagens
app.use(express.static('public'))

// Routes
const UserRoutes = require('./routes/UserRoutes')
const PetRoutes = require('./routes/PetRoutes')

app.use('/users', UserRoutes)
app.use('/pets', PetRoutes)

app.listen(5000)