import axios from "axios"

export const apiFetch = async () => {
  const {data: {'-M69vU_NjNG-avmzlVba': res}} = await axios
    .get(`https://rick-morty-3c452.firebaseio.com/heroes.json`)
  return res
}

