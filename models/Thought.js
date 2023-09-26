const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const moment=require ("moment")

function formatDate(date){
  return moment(date).format('MMMM Do YYYY, h:mm:ss a');
}
// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      max_length:280,
      min_length: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timeStamp => formatDate(timeStamp)
    },
      
    
    username: {
      type: String,
      required: true,

    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);
thoughtSchema
  .virtual('reactionsCount')
  // Getter
  .get(function () {
    return this.reactions.length;
  })

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
