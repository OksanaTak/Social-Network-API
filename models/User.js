const { Schema, model } = require('mongoose')
const thoughtsController = require('../controllers/thoughtsController')

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      default: true,
      required: true,
      unique: true,
      trim: true
    },

    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ]
  },
  {
    toJSON: {
      virtuals: true
    },
    id: false
  }
)
userSchema
  .virtual('friendsCount')
  // Getter
  .get(function () {
    return this.friends.length;
  })
const User = model('user', userSchema)

module.exports = User

