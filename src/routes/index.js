import { Router } from 'express'
import { name, version } from '../../package.json'

const router = Router()

router.get('/', (req, res) => {
  res.json({
    name: name,
    version: version
  })
})

export default router
