// Import mongoose for schema creation
import mongoose from "mongoose";

// Define the schema for the recording model
const favSportsSchema = new mongoose.Schema({
  username:{
    type:String,
    required: true
  },
  selectedGame: {
    type: String,
    required: true
  }
});

const favSports = mongoose.model('favSports', favSportsSchema);

export default favSports;
