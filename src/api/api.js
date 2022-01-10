import { replaceSearchString } from "./utils";
import axios from "axios";

export const _Api = () => {
  const _endpoint = "https://api.jikan.moe/v3/";
  return {
    getAnime: async function (animeId) {
      const value = axios.get(`${_endpoint}anime/${animeId}`);
      return value.data;
    },
    search: async function (thingToSearch, type, pages) {
      const value = await axios.get(
        `${_endpoint}search/${type}?q=${replaceSearchString(
          thingToSearch
        )}&page=${pages}`
      );
      return value.data;
    },
  };
};
const api = _Api();
export default api;
