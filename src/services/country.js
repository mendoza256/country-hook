import axios from "axios";

const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const getCountry = async (name) => {
  const reqUrl = baseUrl + "name/" + name;
  try {
    const response = await axios.get(reqUrl);
    return response;
  } catch (error) {
    return "404 country not found";
  }
};

export default { getAll, getCountry };
