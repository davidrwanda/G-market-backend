import Mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = Mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

userSchema.methods.matchPassword = async function(enteredPassword){
  return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.pre('save', async function(next){
  if(!this.isModified('password')){
    next()
  }
  const saltGenerator = bcrypt.genSaltSync(10)
  this.password = await bcrypt.hash(this.password, saltGenerator)
})

const User = Mongoose.model('User',userSchema)

export default User
