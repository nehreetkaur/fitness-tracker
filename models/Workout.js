const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now()
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Exercise type"
      },
      name: {
        type: String,
        trim: true,
        required: "Exercise name"
      },
      duration: {
        type: Number,
        trim: true,
        required:"Time in min"
      },
      weight: {
        type: Number,
        trim: true
      },
      reps: {
        type: Number,
        trim: true
      },
      sets: {
        type: Number,
        trim: true
      },
      distance: {
        type:Number
      }
    }
  ]
});
const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;