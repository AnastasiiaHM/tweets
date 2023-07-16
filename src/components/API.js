import axios from 'axios';

const BASE_URL = 'https://64ae8328c85640541d4d3690.mockapi.io';

export async function getAllUsers() {
  const url = `${BASE_URL}/all`;
  try {
    const response = await axios.get(`${url}`);

    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function getTweets(id) {
  const url = `${BASE_URL}/all/${id}`;
  try {
    const response = await axios.get(`${url}`);
    return response;
  } catch (error) {
    console.log(error.message);
  }
}

export async function UpdateUserFollow(id, data) {
  const url = `${BASE_URL}/all/${id}`;
  try {
    const response = await axios.put(`${url}`, data);

    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}
