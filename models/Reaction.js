const { Schema, Types } = require('mongoose');
const moment=require ("moment")

function formatDate(date){
  return moment(date).format('MMMM Do YYYY, h:mm:ss a');
}

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      max_length: 280,
      min_length: 1,
  
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timeStamp => formatDate(timeStamp)
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;
