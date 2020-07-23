const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')


const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')

sequelize.sync().then(() => {
    app.listen(config.port || 8081, () => console.log(
        `Server is running on port ${config.port}`
    ))
})

