import mongoose from 'mongoose'

const Schema = mongoose.Schema

const orderSchema = new Schema ({
  orderDate:{type: Date},
  dueDate:{type: Date},
  pet:{type: String},
  client: {type: String},
  photos: {type: String},
  notes: {type: String},
  depositPaid:{type: Date},
  paidInFull:{type: Date},
  shipped: {type: Date},
},
  {timestamps: true}
)

const Order = mongoose.model('Order', orderSchema)

export {
  Order
}