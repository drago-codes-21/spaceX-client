import axios from "axios";
const API_URL = "http://localhost:7070";

const httpGetPlanets = async () => {
  const response = await axios.get(`${API_URL}/planets`);
  console.log(response);
};

const httpGetLaunches = async () => {
  // TODO: Once API is ready.
  // Load launches, sort by flight number, and return as JSON.
};

const httpSubmitLaunch = async (launch) => {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
};

const httpAbortLaunch = (id) => {
  // TODO: Once API is ready.
  // Delete launch with given ID.
};

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
