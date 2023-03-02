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

function update(req, res) {
  Contact.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(contact => res.json(contact))
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

function deleteContact(req, res) {
  Contact.findByIdAndDelete(req.params.id)
  .then(contact => res.json(contact))
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

export {
  index,
  create,
  show,
  update,
  deleteContact as delete,

}