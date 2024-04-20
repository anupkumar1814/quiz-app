//Axios is a promise-based HTTP Client for node.js and the browser.
// It is isomorphic (= it can run in the browser and nodejs with the same codebase).
// On the server-side it uses the native node.js http module,
// while on the client (browser) it uses XMLHttpRequests.
import axios from 'axios';
// url of backend server
const url="http://localhost:8000";


export const SetSelectedGame_=async (data)=>{
    try{
        // calling API
        // hitting post request to server so that we can store our data in database
        console.log(data);
       await axios.post(`${url}/addresponse`,data);
    } catch(error){
        console.log("error while selectedGame API ",error.message);
    }
}

