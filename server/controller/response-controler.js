// Import the Recording model
import favSportsSchema from "../Models/response_.js";

// Function to add a new record
export const addResponse = async (request, response) => {
    try {
        // Extract data from the request body
        const { username, selectedGame } = request.body;

        // Create a new record instance with data from the request body
        const newRecord = new favSportsSchema({ username, selectedGame });

        // Save the new record to the database
        await newRecord.save();

        // Send a success response with the new record data
        response.status(200).json(newRecord);
    } catch (error) {
        // If an error occurs, send a 500 status response with the error message
        return response.status(500).json({ error: error.message });
    }
}
