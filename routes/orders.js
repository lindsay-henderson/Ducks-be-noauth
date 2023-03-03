import { Router } from 'express'
import * as ordersCtrl from '../controllers/orders.js'

const router = Router()

// GET localhost:3000/users
router.get('/', ordersCtrl.index)
router.get('/:id', ordersCtrl.show)
router.post('/', ordersCtrl.create)
// router.put('/:id', ordersCtrl.update)
// router.delete('/:id', ordersCtrl.delete)

export { 
  router
}