import { createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const animesSlice = createSlice({
  name: "animes",
  initialState: {
    value: {
      animes: [],
      type: "anime",
    },
  },
  reducers: {
    _getAnimes: (state, action) => {
      state.value.animes = action.payload;
    },
    setType: (state, action) => {
      state.value.type = action.payload;
    },
  },
});

export const { _getAnimes, setType } = animesSlice.actions;
export default animesSlice.reducer;

export function getAnimes(thingToSearch, pages) {
  return async function apiCall(dispatch, getState) {
    const data = await api.search(
      thingToSearch,
      getState().animes.value.type,
      pages
    );
    dispatch(_getAnimes(data.results));
    console.log(getState().animes.value);
  };
}
