import mongoose from 'mongoose'

const Schema = mongoose.Schema

const contactSchema = new Schema ({
  name:{type: String, required: true},
  email: {type: String},
  social: {type: String},
  notes: {type: String},
  orders: {type: Schema.Types.ObjectId, ref: 'Order'}
},
  {timestamps: true}
)

const Contact = mongoose.model('Contact', contactSchema)

export {
  Contact
}
