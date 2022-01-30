import { RootState } from './../configureStore';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
export interface Portfolio {
  concept:
    | 'Total'
    | 'Modern'
    | 'Minimal'
    | 'Natural'
    | 'Europe'
    | 'NorthEurope';
}

const initialState: Portfolio = {
  concept: 'Total',
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
    let response: AxiosResponse<any, any>;
    if (concept === 'Total') {
      response = await axios.get(`https://api.ownroom.link/api/portfolios/`);
    } else {
      response = await axios.get(
        `https://api.ownroom.link/api/portfolios/?concept=${concept}`
      );
    }

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
