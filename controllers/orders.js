import { Order } from "../models/Orders.js"

function index(req, res) {
  Order.find({})
  .then(orders => {
    res.json(orders)
  })
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

function create(req, res) {
  Order.create(req.body)
  .then(order => {
    res.json(order)
  })
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

function show(req, res) {
  Order.findById(req.params.id)
  .then(order => {
    res.json(order)
  })
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

function update(req, res) {
  Order.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(order => res.json(order))
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

function deleteOrder(req, res) {
  Order.findByIdAndDelete(req.params.id)
  .then(order => res.json(order))
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
  deleteOrder as delete,
}