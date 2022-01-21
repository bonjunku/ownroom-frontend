import { RootState } from './../configureStore';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
export interface Portfolio {
  concept: 'Modern' | 'Minimal' | 'Natural' | 'Europe' | 'NorthEurope';
}

const initialState: Portfolio = {
  concept: 'Modern',
};

const portfolioConceptSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    CONVERT_CONCEPT: (state, action) => {
      return { ...state, concept: action.payload };
    },
  },
  extraReducers: (builder) => {},
});

export default portfolioConceptSlice.reducer;

export const fetchPortfolioAsync = createAsyncThunk(
  'portfolio/FETCH_BY_CONCEPT',
  async (concept: string) => {
    const response = await axios.get(
      `https://api.ownroom.link/api/portfolios/?concept=${concept}`
    );

    return { ...response.data };
  }
);

export const fetchPortfolioByIdAsync = createAsyncThunk(
  'portfolio/FETCH_BY_ID',
  async (id: string | undefined) => {
    const response = await axios.get(
      `https://api.ownroom.link/api/portfolios/${id}/`
    );

    return { ...response.data };
  }
);

export const getPortfolioConcept = (state: RootState) =>
  state.portfolio.concept;
