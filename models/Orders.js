import mongoose from 'mongoose'

const Schema = mongoose.Schema

const orderSchema = new Schema ({
  pet:{type: String, required: true},
  client: {type: Schema.Types.ObjectId, ref: 'Client'},
  images: {type: String},
  notes: {type: String},
},
  {timestamps: true}
)

const Order = mongoose.model('Order', orderSchema)

export {
  Order
}