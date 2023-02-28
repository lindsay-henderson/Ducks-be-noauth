import { Contact } from "../models/Contacts.js"

function index(req, res) {
  Contact.find({})
  .then(contacts => {
    res.json(contacts)
  })
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

function create(req, res) {
  Contact.create(req.body)
  .then(contact => {
    res.json(contact)
  })
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

function show(req, res) {
  Contact.findById(req.params.id)
  .then(contact => {
    res.json(contact)
  })
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

export {
  index,
  create,
  show,
}