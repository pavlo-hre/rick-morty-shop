import axios from "axios"

export const apiFetch = async () => {
  const {data: {'-M5S5FeMLhIOnq7jmZ2G': res}} = await axios
    .get(`https://rick-morty-3c452.firebaseio.com/heroes.json`)
  return res
}

