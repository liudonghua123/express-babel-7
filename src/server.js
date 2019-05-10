import app from './app'

const port = process.env.APP_PORT || '3000'
const host = process.env.APP_HOST || '0.0.0.0'
app.listen(port, host, () => {
  console.log(`server started on ${host}:${port}!`)
})
