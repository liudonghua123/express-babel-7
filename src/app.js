import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import 'dotenv/config'

import routes from '@/routes'

const app = express()

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api', routes)

const port = process.env.APP_PORT || '3000'
const host = process.env.APP_HOST || '0.0.0.0'
app.listen(port, host, () => {
  console.log(`server started on ${host}:${port}!`)
})
