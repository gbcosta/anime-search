import { createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const animesSlice = createSlice({
  name: "animes",
  initialState: {
    value: [],
  },
  reducers: {
    _getAnimes: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { _getAnimes } = animesSlice.actions;
export default animesSlice.reducer;

export function getAnimes(thingToSearch, type, pages) {
  return async function apiCall(dispatch, getState) {
    const data = await api.search(thingToSearch, type, pages);
    dispatch(_getAnimes(data.results));
  };
}
