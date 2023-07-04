import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppThunk } from './store';
import { IReview } from '../types/types';

interface ReviewsState {
  reviews: IReview[];
  language: string;
}

const initialState: ReviewsState = {
  reviews: [],
  language: 'ru',
};

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    setReviews: (state, action: PayloadAction<IReview[]>) => {
      state.reviews = action.payload;
    },
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
  },
});

export const { setReviews, setLanguage } = reviewsSlice.actions;

export const fetchReviews = (lang: string): AppThunk => (dispatch) => {
  axios.get(`/data/data.json`)
    .then(response => {
      const reviews = Object.values(response.data[lang]) as IReview[];
      dispatch(setReviews(reviews));
    })
    .catch(err => console.log(err));
};

export default reviewsSlice.reducer;
