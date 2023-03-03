import { Router } from 'express'
import * as contactsCtrl from '../controllers/contacts.js'

const router = Router()

// GET localhost:3000/users
router.get('/', contactsCtrl.index)
router.get('/:id', contactsCtrl.show)
router.post('/', contactsCtrl.create)
// router.put('/:id', contactsCtrl.update)
// router.delete('/:id', contactsCtrl.delete)

export { 
  router
}
