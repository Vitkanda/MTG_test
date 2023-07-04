export interface IReview {
    name: string;
    review: string;
    date: string;
  }
  
  export interface IState {
    language: string;
    reviews: IReview[];
  }